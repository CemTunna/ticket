import { call, put, takeEvery } from 'redux-saga/effects';
import { getTicket } from '../requests/ticket/getTicket';

function* handleGetTicket(action: any): any {
  const { id, token } = action.payload;

  try {
    const response = yield call(getTicket, id, token);

    if (response.data) {
      yield put({ type: 'ticket/getTicketSuccess', payload: response.data });
    }
  } catch (error: any) {
    yield put({
      type: 'ticket/getTicketFailed',
      payload: error.response.data.msg,
    });
  }
}
function* watcherGetTicketSaga() {
  yield takeEvery('ticket/getTicketStart', handleGetTicket);
}
export default watcherGetTicketSaga;
