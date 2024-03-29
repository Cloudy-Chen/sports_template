/**
 * 底部tab 统一配置
 * 各个模块的路由在单独的Stack中配置
 */
import React, {Component} from "react";
import { Image, Text, Platform } from 'react-native';
import {createStackNavigator, createAppContainer, createBottomTabNavigator} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons'
import CourseStack from "./course/CourseStack";
import ChartStack from "./chart/ChartStack";
import SettingsStack from "./settings/SettingsStack";
import colors from '../resources/colors'

const TAB_CONFIG = {
  CourseStack: {
    label: '课程',
    icon: 'md-clipboard',
  },
  ChartStack: {
    label: '图表',
    icon: 'md-pie',
  },
  SettingsStack: {
    label: '设置',
    icon: 'md-settings',
  },
};

const Routes = {
  CourseStack:CourseStack,
  ChartStack:ChartStack,
  SettingsStack: SettingsStack,
};

const RootStack = createBottomTabNavigator(Routes, {
  defaultNavigationOptions: ({ navigation }) => {
    const iconSize = 23;
    return ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        return (
            <Ionicons
                name={TAB_CONFIG[routeName].icon}
                size={26}
                color={focused ?colors.primaryColor:'#aaa'}
            />
        );
      },
      tabBarLabel: ({ tintColor }) => {
        const { routeName } = navigation.state;
        return (
            <Text
                allowFontScaling={false}
                style={{
                  color: tintColor,
                  fontSize: 12,
                  textAlign: 'center',
                }}
            >
              {TAB_CONFIG[routeName].label}
            </Text>
        );
      },
      tabBarOptions: {
        activeTintColor: colors.primaryColor, // 文字和图片选中颜色
        inactiveTintColor: '#aaa', // 文字和图片未选中颜色
        allowFontScaling: false,
        style: {
          backgroundColor: '#ffffff',
          paddingVertical: 3,
          height:50,
        },
      },
    });
  },
  initialRouteName: 'CourseStack',
  headerMode: 'screen'
});

export default RootStack;
