/**
 * course-actions.js
 */

import * as actions from "../actions/action-types";

export function getAllCourses() {
  return {
    type: actions.GET_COURSE_ACTION,
  };
}

export function getCourseDetails(id){
  return {
    type: actions.GET_COURSE_DETAIL_ACTION,
    id: id,
  };
}

export function addCourse(dataForm){
  return {
    type: actions.ADD_COURSE_ACTION,
    dataForm: dataForm,
  };
}

export function editCourse(dataForm){
  return {
    type: actions.EDIT_COURSE_ACTION,
    dataForm: dataForm,
  };
}

export function deleteCourse(id){
  return {
    type: actions.DELETE_COURSE_ACTION,
    id: id,
  };
}

export function resetResponse(){
  return {
    type: actions.RESET_COURSE_RESPONSE,
  }
}

export function setResponse(type,data) {
  return{
    type: type,
    data: data,
  }
}

export function resetCourse(){
  return {
    type: actions.RESET_COURSE,
  }
}

export function setCourse(course) {
  return{
    type: actions.SET_COURSE,
    course: course,
  }
}
