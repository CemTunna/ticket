import { all } from 'redux-saga/effects';
import watcherLoginSaga from './handlers/auth/login';
import watcherRegisterSaga from './handlers/auth/register';
import watcherLogoutSaga from './handlers/auth/logout';
import watcherCreateTicketSaga from './handlers/createTicket';
import watcherGetTicketsSaga from './handlers/getTickets';

export default function* rootSaga() {
  yield all([
    watcherCreateTicketSaga(),
    watcherRegisterSaga(),
    watcherLogoutSaga(),
    watcherLoginSaga(),
    watcherGetTicketsSaga(),
  ]);
}
