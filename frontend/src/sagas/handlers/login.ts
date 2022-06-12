import { call, put, takeEvery } from 'redux-saga/effects';
import { login } from '../requests/auth/login';

function* handleLogin(action: any) {
  try {
    yield call(login, action.payload);
    yield put({ type: 'auth/login', payload: action.payload });
  } catch (error) {
    // yield put({ type: 'SET_TODO_FAILED', message: error.message });
    console.log('error', error);
  }
}
function* watcherLoginSaga() {
  yield takeEvery('auth/loginRequest', handleLogin);
}
export default watcherLoginSaga;
