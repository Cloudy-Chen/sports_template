/**
 * CourseForm.js
 * 课程列表
 */

// 组件
import React, {Component} from "react";
import {
    Image,
    StatusBar,
    Text,
    TouchableOpacity,
    View,
    Dimensions,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    StyleSheet,
    ScrollView,
    InteractionManager
} from "react-native";
import {Toolbar} from '../../components/Toolbar';
import RefreshListView,{RefreshState} from '../../components/RefreshListView';
import NetworkingError from '../../components/NetworkingError';
import CourseListItem from '../../components/CourseListItem';
import strings from "../../resources/strings";
import {isEmptyObject, isObject, getHeaderHeight} from "../../utils/tools";
import * as CourseActions from "../../actions/course-actions";
import {connect} from "react-redux";
import CourseDetail from './CourseDetail'
import constants from "../../resources/constants";


export class CourseForm extends Component {

  constructor(props) {
    super(props);
      this.state = {
      };
  }

    componentDidMount() {
        InteractionManager.runAfterInteractions(()=> {
            const courseList = this.props.course.get('courseList');
            if(courseList == null || courseList.length === 0)
                this.props.dispatch(CourseActions.getAllCourses());
        });
    }

    onHeaderRefresh = () => {
        this.props.dispatch(CourseActions.getAllCourses());
    };

    componentWillReceiveProps(nextProps) {
        const Response = this.props.course.get('dataResponse');
        const nextResponse = nextProps.course.get('dataResponse');

        if (Response === constants.INITIAL && nextResponse === constants.GET_COURSE_SUCCESS) {
            this.props.dispatch(CourseActions.resetResponse());
        }else if (Response === constants.INITIAL && nextResponse === constants.GET_COURSE_FAIL){
            this.props.dispatch(CourseActions.resetResponse());
        }
    }

  render() {

      const courses = this.props.course.get('courseList');
      const datasError = this.props.course.get('datasError');
      const refreshState = this.props.course.get('refreshState');

      const courseList = courses && courses.length>0?courses:[];

    return (
        <View style={styles.container}>
            <Toolbar
                title = "课程列表"
                actions = {[
                    {icon:'md-add',show:'OPTION_SHOW'}
                ]}
                navigation = {this.props.navigation}
                onPress = {() => {this.props.navigation.push('AddCourse')}}
            >
                {datasError?
                    <NetworkingError retry={() => this.props.dispatch(CourseActions.getCourseList())} />
                    :
                    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null} keyboardVerticalOffset={getHeaderHeight} style={styles.container}>
                        <SafeAreaView style={styles.container}>
                            <RefreshListView
                                data={courseList}
                                footerEmptyDataText={strings.noData}
                                footerFailureText={strings.loadError}
                                footerNoMoreDataText={strings.noMore}
                                footerRefreshingText={strings.loading}
                                ItemSeparatorComponent={() => <View style={styles.separator} />}
                                keyExtractor={(item, index) => `${index}`}
                                onHeaderRefresh={this.onHeaderRefresh}
                                refreshState={refreshState}
                                renderItem={this.renderCell}
                                style={styles.listView}
                            />
                        </SafeAreaView>
                    </KeyboardAvoidingView>
                }
            </Toolbar>
        </View>
        );
  }

    renderCell = ({ item, index }) => {

        const courseList = this.props.course.get('courseList');
        const course = courseList[index];

        return (
            <CourseListItem
                course={course}
                navigation={this.props.navigation}
                onDeleteBtnPress={() => this.onDeleteBtnPress(course.id)}
                onDetailPress={() => this.onDetailPress(course)}
            />
        );
    };

    onDeleteBtnPress = (id) => {this.props.dispatch(CourseActions.deleteCourse(id))}
    onDetailPress = (course) => this.props.navigation.navigate('CourseDetail',{course:course})

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    listView: {
        flex: 1,
        backgroundColor: '#eee',
    },
    separator: {
        height: 0.5,
        backgroundColor: '#D5D5D5',
    },
});

const mapStateToProps = (state) => ({
    auth: state.get('auth'),
    root: state.get('root'),
    course: state.get('course'),
});

export default connect(mapStateToProps)(CourseForm)
