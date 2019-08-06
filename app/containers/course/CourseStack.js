/**
 * FormStack.js
 */

import React, {Component} from "react";
import CourseForm from './CourseForm';
import CourseDetail from './CourseDetail';
import AddCourse from './AddCourse';
import EditCourse from './EditCourse';

import { createStackNavigator} from 'react-navigation';

const Routes = {
    CourseForm: {screen: CourseForm},
    CourseDetail: {screen: CourseDetail},
    AddCourse: {screen: AddCourse},
    EditCourse:{screen: EditCourse},
};

const CourseStack = createStackNavigator(Routes, {
    initialRouteName: 'CourseForm',
    headerMode: 'screen',
    defaultNavigationOptions: {
    header:null
    },
});

export default CourseStack;
