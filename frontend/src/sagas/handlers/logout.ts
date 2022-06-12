import { call, put, takeEvery } from 'redux-saga/effects';
import { logout } from '../requests/auth/logout';

function* handleLogout(): any {
  try {
    yield call(logout);
    yield put({ type: 'auth/logoutSuccess' });
  } catch (error: any) {
    yield put({
      type: 'auth/logoutFailed',
      payload: error.response.data.msg,
    });
  }
}
function* watcherLogoutSaga() {
  yield takeEvery('auth/logoutStart', handleLogout);
}
export default watcherLogoutSaga;
