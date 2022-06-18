import { call, put, takeEvery } from 'redux-saga/effects';
import { createNotes } from '../../requests/note/createNote';

function* handleCreateNotes(action: any): any {
  const {
    id,
    token,
    noteText: { text },
  } = action.payload;

  try {
    const response = yield call(createNotes, id, text, token);

    if (response.data) {
      yield put({ type: 'note/createNotesSuccess', payload: response.data });
    }
  } catch (error: any) {
    console.log('err', error);
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
