import { call, put, takeEvery } from 'redux-saga/effects';
import { getNotes } from '../../requests/note/getNotes';

function* handleGetNotes(action: any): any {
  const { id, token } = action.payload;
  try {
    const response = yield call(getNotes, id, token);
    if (response.data) {
      yield put({ type: 'note/getNotesSuccess', payload: response.data });
    }
  } catch (error: any) {
    yield put({
      type: 'note/getNotesFailed',
      payload: error.response.data.msg,
    });
  }
}
function* watcherGetNotesSaga() {
  yield takeEvery('note/getNotesStart', handleGetNotes);
}
export default watcherGetNotesSaga;
