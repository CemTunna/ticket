import { call, put, takeEvery } from 'redux-saga/effects';
import { getTickets } from '../requests/ticket/getTickets';

function* handleGetTickets(action: any): any {
  console.log('asd', action.payload);

  try {
    const response = yield call(getTickets, action.payload);
    if (response.data) {
      yield put({ type: 'ticket/getTicketsSuccess', payload: response.data });
    }
  } catch (error: any) {
    yield put({
      type: 'ticket/getTicketsFailed',
      payload: error.response.data.msg,
    });
  }
}
function* watcherGetTicketsSaga() {
  yield takeEvery('ticket/getTicketsStart', handleGetTickets);
}
export default watcherGetTicketsSaga;
