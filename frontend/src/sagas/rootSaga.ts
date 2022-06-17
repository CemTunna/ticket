import { all } from 'redux-saga/effects';
import watcherLoginSaga from './handlers/auth/login';
import watcherRegisterSaga from './handlers/auth/register';
import watcherLogoutSaga from './handlers/auth/logout';
import watcherCreateTicketSaga from './handlers/ticket/createTicket';
import watcherGetTicketsSaga from './handlers/ticket/getTickets';
import watcherGetTicketSaga from './handlers/ticket/getTicket';
import watcherCloseTicketSaga from './handlers/ticket/closeTicket';
import watcherGetNotesSaga from './handlers/note/getNotes';
import watcherCreateNotesSaga from './handlers/note/createNote';

export default function* rootSaga() {
  yield all([
    watcherCreateTicketSaga(),
    watcherRegisterSaga(),
    watcherLogoutSaga(),
    watcherLoginSaga(),
    watcherGetTicketsSaga(),
    watcherGetTicketSaga(),
    watcherCloseTicketSaga(),
    watcherGetNotesSaga(),
    watcherCreateNotesSaga(),
  ]);
}
