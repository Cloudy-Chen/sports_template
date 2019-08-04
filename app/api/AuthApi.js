/**
 * AuthApi.js
 * 登录数据请求接口
 */

import Base64 from "../utils/Base64";
import constants from "../resources/constants";
import queryString from "query-string";
import {post} from '../utils/httpUtils'

// 登录
export function getAccessToken (username, password) {
  const url = constants.SPORTS_HOT_TEST_BASE_URL + '/func/auth/webLogin';
  const body = {
    loginName: username,
    password: password,
    loginType: 1,
  }

  return post(url ,body);
}

// 登出
export function logOut () {
  const url = constants.SPORTS_HOT_TEST_BASE_URL + '/func/auth/webLogout';
  const body = {
  }

  return post(url ,body);
}
