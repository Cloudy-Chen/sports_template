/**
 * CourseListItem.js
 * 课程列表种每一个课程Item的包装
 */

import React, { Component, Fragment } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, Dimensions,} from 'react-native';
import {SwipeRow} from "react-native-swipe-list-view";

import colors from "../resources/colors";
import strings from "../resources/strings";
import {isEmptyObject, isObject, SCREEN_WIDTH, changeSportsType} from "../utils/tools";
import avatar from '../assets/img/coach_logo.png';

class CourseListItem extends Component {

  render() {
    const {courseId, sportsType, detail, courseName, creatorName, coachLevel, classCount, unitName, cost} = this.props.course;

    return (
        <SwipeRow
            rightOpenValue={-60}>
          {/*delete*/}
          <View style={styles.swipeRowContainer}>
            <TouchableOpacity style={styles.swipeRowDeleteButton} onPress={this.props.onDeleteBtnPress}>
              <Text style={styles.swipeRowText}>{strings.delete_btn}</Text>
            </TouchableOpacity>
          </View>

          {/*main*/}
          <TouchableOpacity style={styles.mainRowContainer} onPress={this.props.onDetailPress}>
              <View style={styles.mainTextWrapper}><Text style={styles.mainTitleText}>{courseName}</Text></View>
              <View style={styles.mainTextWrapper}><Text style={styles.mainDetailText}>{detail}</Text></View>

              <View style={styles.secondRowWrapper}>
                <View style={styles.avatarWrapper}><Image resizeMode="stretch" style={styles.avatar} source={avatar}/></View>

                <View style={styles.basicCoach}>
                  <Text style={styles.creatorNameText}>{creatorName}</Text>
                  <Text style={styles.coachLevelText}>{coachLevel}</Text>
                </View>

                <View style={styles.basicClass}>
                  <Text style={styles.classCountTitle}>课时</Text>
                  <Text style={styles.classCountTimes}>{classCount}次</Text>
                </View>
              </View>

              <View style={styles.thirdRowWrapper}>
                <View style={styles.clubWrapper}><Text style={styles.clubText}>{changeSportsType(sportsType)}</Text></View>
                <View style={styles.unitWrapper}><Text style={styles.unitText}>{unitName}</Text></View>
                <View style={styles.costWrapper}><Text style={styles.costText}>￥{cost}</Text></View>
              </View>
            </TouchableOpacity>
        </SwipeRow>
    );
  }
}

const styles = StyleSheet.create({
  swipeRowContainer: {
    alignItems: 'center',
    width:SCREEN_WIDTH,
    height:'100%',
    flexDirection: "row-reverse",
    borderBottomWidth: 0.5,
    borderColor: '#ddd',
  },
  swipeRowDeleteButton:{
    height:'100%',
    width: 60,
    paddingHorizontal: 10,
    backgroundColor: colors.baseRed,
    textAlign:'center',
    justifyContent:'center'
  },
  swipeRowText:{
    color: '#fff',
    textAlign: 'center',
    fontSize: 14
  },

  mainRowContainer: {
    flexDirection: 'column',
    borderBottomWidth: 0.5,
    borderColor: '#ddd',
    backgroundColor:'#fff',
    alignItems: 'flex-start',
  },
  mainTextWrapper:{
    padding: 10 ,
    flexDirection:'row',
    alignItems:'center'
  },
  mainTitleText: {
    fontSize: 19,
    color: '#222',
  },
  mainDetailText:{
    fontSize: 13,
    color: '#666',
  },
  secondRowWrapper:{
    padding: 6,
    paddingHorizontal:6,
    flexDirection:'row',
    marginTop:3
  },
  avatarWrapper:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center'
  },
  avatar:{
    height:40,
    width:40,
    borderRadius:20
  },
  basicCoach:{
    flex:4,
    flexDirection:'column',
    alignItems:'flex-start',
    justifyContent:'center'
  },
  creatorNameText:{
    color: '#222',
    fontSize: 17,
    marginBottom:5
  },
  coachLevelText:{
    color: '#666',
    fontSize: 13
  },
  classCountTitle:{
    color: '#222',
    fontSize: 16,
    marginBottom:5
  },
  classCountTimes:{
    color: '#555',
    fontSize: 16
  },
  basicClass:{
    flex:1,
    flexDirection:'column'
  },
  thirdRowWrapper:{
    paddingTop: 12,
    paddingBottom: 4,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom:5
  },
  clubWrapper:{
    backgroundColor: '#efb66a',
    borderRadius: 6,
    padding: 4,
    paddingHorizontal: 6
  },
  clubText:{
    color: '#fff',
    fontSize: 13
  },
  unitWrapper:{
    backgroundColor: '#fc3c3f',
    borderRadius: 6,
    padding: 4,
    paddingHorizontal: 6,
    marginLeft: 10
  },
  unitText:{
    color: '#fff',
    fontSize: 13
  },
  costWrapper:{
    padding: 4,
    paddingHorizontal: 6,
    flex:1,
    alignItems:'flex-end'
  },
  costText:{
    color: '#f00',
    fontSize: 20
  }
});

export default CourseListItem;
