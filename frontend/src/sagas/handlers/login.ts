import { call, put, takeEvery } from 'redux-saga/effects';
import { login } from '../requests/auth/login';

function* handleLogin(action: any): any {
  try {
    const response = yield call(login, action.payload);
    if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data));
      yield put({ type: 'auth/loginSuccess', payload: response.data });
    }
  } catch (error: any) {
    yield put({
      type: 'auth/loginFailed',
      payload: error.response.data.msg,
    });
  }
}
function* watcherLoginSaga() {
  yield takeEvery('auth/loginStart', handleLogin);
}
export default watcherLoginSaga;
