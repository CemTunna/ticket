import { all } from 'redux-saga/effects';
import watcherRegisterSaga from './handlers/register';

export default function* rootSaga() {
  yield all([watcherRegisterSaga()]);
}
