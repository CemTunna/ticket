import { call, put, takeEvery } from 'redux-saga/effects';
import { createNotes } from '../../requests/note/createNote';

function* handleCreateNotes(action: any): any {
  const { id, token, text } = action.payload;
  console.log('notes action', action);
  try {
    const response = yield call(createNotes, text, id, token);
    console.log('resss', response);
    if (response.data) {
      yield put({ type: 'note/createNotesSuccess', payload: response.data });
    }
  } catch (error: any) {
    yield put({
      type: 'note/createNotesFailed',
      payload: error.response.data.msg,
    });
  }
}
function* watcherCreateNotesSaga() {
  yield takeEvery('note/createNotesStart', handleCreateNotes);
}
export default watcherCreateNotesSaga;
