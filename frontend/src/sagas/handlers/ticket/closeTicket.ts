import { call, put, takeEvery } from 'redux-saga/effects';
import { closeTicket } from '../../requests/ticket/closeTicket';

function* handleCloseTicket(action: any): any {
  const { id, token } = action.payload;

  try {
    const response = yield call(closeTicket, id, token);

    if (response.data) {
      yield put({ type: 'ticket/closeTicketSuccess', payload: response.data });
    }
  } catch (error: any) {
    yield put({
      type: 'ticket/closeTicketFailed',
      payload: error.response.data.msg,
    });
  }
}
function* watcherCloseTicketSaga() {
  yield takeEvery('ticket/closeTicketStart', handleCloseTicket);
}
export default watcherCloseTicketSaga;
