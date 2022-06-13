import { call, put, takeEvery } from 'redux-saga/effects';
import { createTicket } from '../requests/ticket/createTicket';

function* handleCreateTicket(action: any): any {
  const { ticketFormData, token } = action.payload;

  try {
    const response = yield call(createTicket, ticketFormData, token);

    if (response.data) {
      yield put({ type: 'ticket/createTicketSuccess', payload: response.data });
    }
  } catch (error: any) {
    yield put({
      type: 'ticket/createTicketFailed',
      payload: error.response.data.msg,
    });
  }
}
function* watcherCreateTicketSaga() {
  yield takeEvery('ticket/createTicketStart', handleCreateTicket);
}
export default watcherCreateTicketSaga;
