/**
 * DataDetail
 */

import React, {Component} from "react";
import {Image, StatusBar, Text, TouchableOpacity, View, ScrollView, StyleSheet} from "react-native";
import {connect} from "react-redux";
import strings from "../../resources/strings";
import ZoomableImageViewer from '../../components/ZoomableImageViewer';
import {Toolbar, ACTION_EDIT, OPTION_SHOW} from "../../components/Toolbar";
import {InformationItem, TYPE_AVATAR, TYPE_TEXT} from '../../components/InformationItem';
import IntroDivider from '../../components/IntroDivider';
import * as CourseActions from "../../actions/course-actions";
import {isEmptyObject, isObject, changeSportsType, changeClassType, changeCostType} from "../../utils/tools";

export class CourseDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentWillMount(): void {
        const course = this.props.navigation.state.params.course;
        this.props.dispatch(CourseActions.setCourse(course));
    }

    render() {
        return (
                <Toolbar title="课程详情" actions={[{icon: ACTION_EDIT, show: OPTION_SHOW}]} onPress={this._onEditPress} isBack={true} navigation={this.props.navigation}>
                    <ScrollView style={styles.container}>
                    <IntroDivider intro={strings.courseBasicInfo}/>
                    {this._renderCourseBasicInfo()}
                    <IntroDivider intro={strings.courseTeachInfo}/>
                    {this._renderCourseTeachInfo()}
                    <IntroDivider intro={strings.coursePayInfo}/>
                    {this._renderCoursePayInfo()}
                    </ScrollView>
                </Toolbar>
        );
    }

    _onEditPress = () => this.props.navigation.navigate('EditData');

    _renderCourseBasicInfo(){
        const course = this.props.course.get('course');
        return([
                <InformationItem key = {0} type = {TYPE_TEXT} title = {strings.courseName} content = {course.courseName}/>,
                <InformationItem key = {1} type = {TYPE_TEXT} title = {strings.classType} content = {changeClassType(course.courseGrade)} />,
                <InformationItem key = {2} type = {TYPE_TEXT} title = {strings.sportsType} content = {changeSportsType(course.sportsType)} />,
                <InformationItem key = {3} type = {TYPE_TEXT} title = {strings.detail} content = {course.detail} />,
                <InformationItem key = {4} type = {TYPE_TEXT} title = {strings.scheduleDes} content = {course.scheduleDes} />,
            ]);}

    _renderCourseTeachInfo(){
        const course = this.props.course.get('course');
        return([
            <InformationItem key = {5} type = {TYPE_TEXT} title = {strings.startDate} content = {course.startDateStr} />,
            <InformationItem key = {6} type = {TYPE_TEXT} title = {strings.endDate} content = {course.endDateStr} />,
            <InformationItem key = {7} type = {TYPE_TEXT} title = {strings.maxNumber} content = {course.maxNumber} />,
            <InformationItem key = {8} type = {TYPE_TEXT} title = {strings.classCount} content = {course.classCount}/>,
            <InformationItem key = {9} type = {TYPE_TEXT} title = {strings.unitName} content = {course.unitName} />,
            <InformationItem key = {10} type = {TYPE_TEXT} title = {strings.coachName} content = {course.coachId} />,
        ]);}

    _renderCoursePayInfo(){
        const course = this.props.course.get('course');
        return([
            <InformationItem key = {11} type = {TYPE_TEXT} title = {strings.costType} content = {changeCostType(course.costType)} />,
            <InformationItem key = {12} type = {TYPE_TEXT} title = {strings.cost} content = {course.cost} />,
        ]);}

}

var styles = StyleSheet.create({
    container:{
        flex:1,
    },
})

const mapStateToProps = (state) => ({
    auth: state.get('auth'),
    root: state.get('root'),
    course: state.get('course'),
});

export default connect(mapStateToProps)(CourseDetail)
