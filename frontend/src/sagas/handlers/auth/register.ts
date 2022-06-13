import { call, put, takeEvery } from 'redux-saga/effects';
import { register } from '../../requests/auth/register';

function* handleRegister(action: any): any {
  try {
    const response = yield call(register, action.payload);
    if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data));
      yield put({ type: 'auth/registerSuccess', payload: response.data });
    }
  } catch (error: any) {
    yield put({
      type: 'auth/registerFailed',
      payload: error.response.data.msg,
    });
  }
}
function* watcherRegisterSaga() {
  yield takeEvery('auth/registerStart', handleRegister);
}
export default watcherRegisterSaga;
