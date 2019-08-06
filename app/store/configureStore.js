/**
 * configureStore.js
 */

import {autoRehydrate, persistStore} from "redux-persist-immutable";
import {combineReducers} from "redux-immutable";
import createActionBuffer from "redux-action-buffer";
import {REHYDRATE} from "redux-persist/constants";
import Immutable from "immutable";
import {applyMiddleware, compose, createStore} from "redux";
import {AsyncStorage} from "react-native";
import createSagaMiddleware from "redux-saga";

import saveSubsetFilter from '../utils/saveSubsetFilter'

import authReducer from "../reducers/authReducer";
import rootReducer from "../reducers/rootReducer";
import courseReducer from "../reducers/courseReducer";
import activityReducer from "../reducers/activityReducer";

import { rootSaga } from './saga';
import {RefreshState} from "../components/RefreshListView";
import constants from '../resources/constants';

const combinedReducers = combineReducers({
  root: rootReducer,
  auth: authReducer,
  course: courseReducer,
  activity: activityReducer,
});

const initialState = new Immutable.Map({
  root: Immutable.Map({
    loading: false,
  }),
  auth: Immutable.Map({
    isLoggedIn: false,
    loginError: '',
    registerStatus: false,
    username: '',
    password: '',
    sessionId: '',
  }),
  course: Immutable.Map({
    course: {},
    courseList: [],
    refreshState: RefreshState.Idle,
    datasError: false,
    dataResponse: constants.INITIAL,
  }),
  activity: Immutable.Map({
    activity: {},
    activityList: [],
    refreshState: RefreshState.Idle,
    datasError: false,
    dataResponse: constants.INITIAL,
  })
});

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
      combinedReducers,
      initialState,
      compose(applyMiddleware(sagaMiddleware, createActionBuffer(REHYDRATE)), autoRehydrate({log: true})));

  persistStore(
      store,
      {
        storage: AsyncStorage,
        whitelist: ['auth','course','activity'],
        transforms: [
            // 白名单 whitelist 中需要save的值
          saveSubsetFilter(['username','password','sessionId','activityList','courseList'])
        ],
      }
  );

  return {
    ...store, runSaga: [sagaMiddleware.run(rootSaga)]
  };
}
