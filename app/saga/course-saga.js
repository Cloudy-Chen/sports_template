/**
 * course-saga.js
 */

import {call, put, take, takeEvery} from "redux-saga/effects";
import * as actions from "../actions/action-types";
import * as Api from "../api/CourseApi";
import * as courseActions from "../actions/course-actions";

// 获取所有课程
function* getAllCourses( action ) {
  try {
    const response = yield call(Api.fetchAllCourses);
    if (response.re ==1) {
      yield put(courseActions.setResponse(actions.GET_COURSE_SUCCESS,response.data));
    } else {
      yield put(courseActions.setResponse(actions.GET_COURSE_FAIL,null));
    }
  } catch (error) {
    yield put(courseActions.setResponse(actions.GET_COURSE_FAIL,null));
  }
}

// 根据数据Id 获取某个数据详情
function* getCourseDetailById ( action ) {
  try {
    const id = action.id;
    // const response = yield call(Api.getDataDetailById, id);
    // if (response.re ==1) {
    //   yield put(courseActions.setResponse(actions.GET_COURSE_SUCCESS,response.data));
    // } else {
    //   yield put(courseActions.setResponse(actions.GET_COURSE_FAIL,null));
    // }
  } catch (error) {
    // yield put(courseActions.setResponse(actions.GET_COURSE_FAIL,null));
  }
}

// 添加数据
function* addCourse ( action ) {
  try {
    const dataForm = action.dataForm;
    // const response = yield call(Api.addDataToDataList, dataForm);
    // if (response.re ==1) {
    //   yield put(courseActions.setResponse(actions.ADD_DATA_SUCCESS,null));
    // } else {
    //   yield put(courseActions.setResponse(actions.ADD_DATA_FAIL,null));
    // }
  } catch (error) {
    yield put(courseActions.setResponse(actions.ADD_DATA_FAIL,null));
  }
}

// 编辑数据
function* editCourse ( action ) {
  try {
    const dataForm = action.dataForm;
    // const response = yield call(Api.editDataInDataList, dataForm);
    // if (response.re ==1) {
    //   yield put(courseActions.setResponse(actions.EDIT_DATA_SUCCESS,response.data));
    // } else {
    //   yield put(courseActions.setResponse(actions.EDIT_DATA_FAIL,null));
    // }
  } catch (error) {
    yield put(courseActions.setResponse(actions.EDIT_DATA_FAIL,null));
  }
}

// 删除数据
function* deleteCourse ( action ) {
  try {
    const id = action.id;
    // const response = yield call(Api.deleteDataFromDataList, id);
    // if (response.re ==1) {
    //   yield put(courseActions.setResponse(actions.DELETE_DATA_SUCCESS,response.data));
    // } else {
    //   yield put(courseActions.setResponse(actions.DELETE_DATA_FAIL,null));
    // }
  } catch (error) {
    yield put(courseActions.setResponse(actions.DELETE_DATA_FAIL,null));
  }
}

export default [
    takeEvery(actions.GET_COURSE_ACTION,getAllCourses),
    takeEvery(actions.GET_COURSE_DETAIL_ACTION,getCourseDetailById),
    takeEvery(actions.ADD_COURSE_ACTION,addCourse),
    takeEvery(actions.DELETE_COURSE_ACTION,deleteCourse),
    takeEvery(actions.EDIT_COURSE_ACTION,editCourse),
]
