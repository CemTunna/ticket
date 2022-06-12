import { all } from 'redux-saga/effects';
import watcherLoginSaga from './handlers/login';
import watcherRegisterSaga from './handlers/register';
import watcherLogoutSaga from './handlers/logout';

export default function* rootSaga() {
  yield all([watcherRegisterSaga(), watcherLogoutSaga(), watcherLoginSaga()]);
}
