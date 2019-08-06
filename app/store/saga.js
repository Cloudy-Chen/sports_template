// import sagas to start
import { all } from 'redux-saga/effects';
import courseSagas from '../saga/course-saga';
import activitySagas from '../saga/activity-saga';
import authSagas from '../saga/auth-saga';

const sagas = [
    ...courseSagas,
    ...activitySagas,
    ...authSagas,
];

export function* rootSaga() {
  yield all([...sagas]);
}
