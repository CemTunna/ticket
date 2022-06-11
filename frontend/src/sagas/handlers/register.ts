import { call, put, takeEvery } from 'redux-saga/effects';
import { register } from '../requests/register';

function* handleRegister(action: any) {
  console.log(action);
  try {
    yield call(register, action.payload);
    yield put({ type: 'auth/register' });
  } catch (error) {
    // yield put({ type: 'SET_TODO_FAILED', message: error.message });
    console.log('error', error);
  }
}
function* watcherRegisterSaga() {
  yield takeEvery('auth/registerRequest', handleRegister);
}
export default watcherRegisterSaga;
