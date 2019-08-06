/**
 * 应用需要访问的所有常量
 */

export default {
  EMAIL_REGEX: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  MIN_PASSWORD_LENGTH: 6,
  CLIENT_ID: 'ffb12e79140e7b6597ba',
  CLIENT_SECRET: 'd07dadbce095325cebfc40a46eb467e906063927',
  BASE_HEADER: {
    'Accept': 'application/vnd.github.v3.full+json',
    'Content-Type': 'application/json',
  },
  BASE_PAGE_LIMIT: 10,
  LOGIN_SCREEN: 'Login',
  REPOSITORY_LIST_SCREEN: 'RepositoriesList',
  REPOSITORY_DETAILS_SCREEN: 'RepositoryDetails',
  HARDWARE_PRESS_EVENT:'hardwareBackPress',

  SUCCESS:'SUCCESS',
  FAIL:'FAIL',
  INITIAL: '',

  // URL
  SPORTS_HOT_BASE_URL: 'http://114.215.99.2',
  SPORTS_HOT_TEST_BASE_URL: 'http://192.168.1.100:8080/badmintonhot',

  // STACK

  // COURSE
  GET_COURSE_SUCCESS : 'GET_COURSE_SUCCESS',
  GET_COURSE_FAIL : 'GET_COURSE_FAIL',
  GET_COURSE_DETAIL_SUCCESS : "GET_COURSE_DETAIL_SUCCESS",
  GET_COURSE_DETAIL_FAIL : "GET_COURSE_DETAIL_FAIL",
  ADD_COURSE_SUCCESS : "ADD_COURSE_SUCCESS",
  ADD_COURSE_FAIL : "ADD_COURSE_FAIL",
  EDIT_COURSE_SUCCESS : "EDIT_COURSE_SUCCESS",
  EDIT_COURSE_FAIL : "EDIT_COURSE_FAIL",
  DELETE_COURSE_SUCCESS : "DELETE_COURSE_SUCCESS",
  DELETE_COURSE_FAIL : "DELETE_COURSE_FAIL",

  // CHART
  ADRESS_DROP_DOWN : ['中国','日本','美国'],
  TIME_DROP_DOWN : ['1月','2月','3月'],
  TYPE_DROP_DOWN : ['食物','服饰','生活'],

  // COURSE
  CLASS_TYPE_ACTION_SHEET : ['取消','初级班','中级班','高级班'],
  SPORTS_TYPE_ACTION_SHEET : ['取消','羽毛球','足球','乒乓球','篮球'],
  COST_TYPE_ACTION_SHEET : ['取消','按人支付','按小时支付','按班支付'],
}
