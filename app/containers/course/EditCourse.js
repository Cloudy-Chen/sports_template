/**
 * EditData.js
 */

import React, {Component} from "react";
import {Image, StatusBar, Text, TouchableOpacity, View, Dimensions, ScrollView,} from "react-native";
import {connect} from "react-redux";
import {
    _switchrubroIdxTorubro,
    getHeaderHeight,
    isEmptyObject,
    isObject,
    SCREEN_HEIGHT,
    SCREEN_WIDTH
} from "../../utils/tools";
import strings from "../../resources/strings";
import {Toolbar} from '../../components/Toolbar';
import {InputWithClearButton, InputWithActionSheet, InputWithCalendar} from '../../components/multiFuncTextInput/index'
import ImagePickerViewer from "../../components/ImagePickerViewer";
import IntroDivider from '../../components/IntroDivider';
import constants from '../../resources/constants';
import * as CourseActions from "../../actions/course-actions";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import Button from "../../components/Button";
import Toast from 'react-native-root-toast';
import {isEmptyObject, isObject, changeSportsType, changeClassType, changeCostType} from "../../utils/tools";
import constants from '../../resources/constants';

const typeActionSheet = [strings.cancel,constants.TYPE_1,constants.TYPE_2,constants.TYPE_3,constants.TYPE_4];
export class EditCourse extends Component {

  constructor(props) {
    super(props);
      this.state={
          course:{
              courseId:'',
              courseName:'',
              maxNumber:'',
              coachId:'',
              trainId:'',
              classCount:'',
              cost:'',
              courseGrade:'',
              unitName:'',
              costType:'',
              detail:'',
              coursePlace:'',
              unitId:'',
              scheduleDes:'',
              sportsType:'',
              startDate:'',
              endDate:'',
          }
      }
  }

    componentWillMount(){
        const course = this.props.course.get('course');
        this.setState({course:course})
    }

    componentWillReceiveProps(nextProps) {
        const Response = this.props.data.get('dataResponse');
        const nextResponse = nextProps.data.get('dataResponse');

        if (Response === constants.INITIAL && nextResponse === constants.EDIT_COURSE_SUCCESS) {
            this.props.navigation.pop();
            this.props.dispatch(CourseActions.resetResponse());
        }else if (Response === constants.INITIAL && nextResponse === constants.EDIT_COURSE_FAIL){
            alert(strings.editCourseFail);
            this.props.dispatch(CourseActions.resetResponse());
        }
    }

    render() {
        return (
            <View style={{flex:1,alignItems:'center'}}>
                <Toolbar title = "编辑课程" actions = {[]} isBack = {true} navigation = {this.props.navigation}>
                    <KeyboardAwareScrollView style={{height:SCREEN_HEIGHT-{getHeaderHeight},width:SCREEN_WIDTH}}>
                        <ScrollView>
                            <IntroDivider intro={strings.courseBasicInfo}/>
                            {this._renderCourseBasicInfo()}
                            <IntroDivider intro={strings.courseTeachInfo}/>
                            {this._renderCourseTeachInfo()}
                            <IntroDivider intro={strings.coursePayInfo}/>
                            {this._renderCoursePayInfo()}
                        <Button title={strings.confirm} onPress={this._onConfirmPress}/>
                        </ScrollView>
                    </KeyboardAwareScrollView>
                </Toolbar>
            </View>
        );
    }

    _renderCourseBasicInfo(){

      var course = this.props.course.get('course');

        return([
            <InputWithClearButton
                hookCanBeCleared
                title={strings.courseName}
                textInputEvent={{
                    defaultValue: course.courseName,
                    onChangeText: (value) => {
                        this.setState({course:Object.assign(this.state.course,{courseName: value})});
                    }}}
            />,
            <InputWithActionSheet
                title={strings.classType}
                actionSheetOptions={constants.CLASS_TYPE_ACTION_SHEET}
                option={changeClassType(this.state.course.classType)}
                handlePress={(index)=>{
                    if(index!==0){
                        this.setState({course:Object.assign(this.state.course,{classType: index})});
                    }
                }}
            />,
            <InputWithActionSheet
                title={strings.sportsType}
                actionSheetOptions={constants.SPORTS_TYPE_ACTION_SHEET}
                option={changeSportsType(this.state.course.sportsType)}
                handlePress={(index)=>{
                    if(index!==0){
                        this.setState({course:Object.assign(this.state.course,{sportsType: index})});
                    }
                }}
            />,
            <InputWithClearButton
                hookCanBeCleared
                title={strings.detail}
                textInputEvent={{
                    defaultValue: course.detail,
                    onChangeText: (value) => {
                        this.setState({course:Object.assign(this.state.course,{detail: value})});
                    }}}
            />,
            <InputWithClearButton
                hookCanBeCleared
                title={strings.scheduleDes}
                textInputEvent={{
                    defaultValue: course.scheduleDes,
                    onChangeText: (value) => {
                        this.setState({course:Object.assign(this.state.course,{scheduleDes: value})});
                    }}}
            />,
            <InputWithCalendar
                title={strings.startDate}
                date={this.state.startDate}
                onDateChange={(value)=>{
                    this.setState({course:Object.assign(this.state.course,{startDate: value})});
                }}
            />,
            <InputWithCalendar
                title={strings.endDate}
                date={this.state.endDate}
                onDateChange={(value)=>{
                    this.setState({course:Object.assign(this.state.course,{endDate: value})});
                }}
            />,
            <InputWithClearButton
                hookCanBeCleared
                title={strings.maxNumber}
                textInputEvent={{
                    defaultValue: course.maxNumber,
                    onChangeText: (value) => {
                        this.setState({course:Object.assign(this.state.course,{maxNumber: value})});
                    }}}
            />,
            <InputWithClearButton
                hookCanBeCleared
                title={strings.classCount}
                textInputEvent={{
                    defaultValue: course.classCount,
                    onChangeText: (value) => {
                        this.setState({course:Object.assign(this.state.course,{classCount: value})});
                    }}}
            />,
            <InputWithClearButton
                hookCanBeCleared
                title={strings.unitName}
                textInputEvent={{
                    defaultValue: course.unitName,
                    onChangeText: (value) => {
                        this.setState({course:Object.assign(this.state.course,{unitName: value})});
                    }}}
            />,
            <InputWithClearButton
                hookCanBeCleared
                title={strings.coachName}
                textInputEvent={{
                    defaultValue: course.coachId,
                    onChangeText: (value) => {
                        this.setState({course:Object.assign(this.state.course,{coachId: value})});
                    }}}
            />,
            <InputWithActionSheet
                title={strings.costType}
                actionSheetOptions={constants.COST_TYPE_ACTION_SHEET}
                option={changeCostType(this.state.course.costType)}
                handlePress={(index)=>{
                    if(index!==0){
                        this.setState({course:Object.assign(this.state.course,{costType: index})});
                    }
                }}
            />,
            <InputWithClearButton
                hookCanBeCleared
                title={strings.cost}
                textInputEvent={{
                    defaultValue: course.cost,
                    onChangeText: (value) => {
                        this.setState({course:Object.assign(this.state.course,{cost: value})});
                    }}}
            />,
        ]);
    }

    _onConfirmPress = () => {if(this._validateData())this.props.dispatch(CourseActions.editData(this.state.goods));}

    _validateData(){
      var {name, codigo, price} = this.state.goods;
      if(isEmptyObject(name)){Toast.show(strings.nameIsNotEmpty, {duration: Toast.durations.LONG,position: Toast.positions.CENTER,});return false;}
      if(isEmptyObject(codigo)){Toast.show(strings.codigoIsNotEmpty, {duration: Toast.durations.LONG,position: Toast.positions.CENTER,});return false;}
      if(isEmptyObject(price)){Toast.show(strings.priceIsNotEmpty, {duration: Toast.durations.LONG,position: Toast.positions.CENTER,});return false;}
      return true;
  }

};

const mapStateToProps = (state) => ({
    auth: state.get('auth'),
    root: state.get('root'),
    course: state.get('course'),
});

export default connect(mapStateToProps)(EditCourse)
