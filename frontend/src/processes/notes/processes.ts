import { SagaIterator } from 'redux-saga';
import {
  call, all, takeEvery, put,
} from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { URLS } from '@common/constants';

import {
  actions as notesActions,
  sagas as notesSagas,
} from '@features/notes';

export function* getNotesListFlow(
  action: ReturnType<typeof notesActions.getNoteList>,
): Generator {
  try {
    yield put(notesActions.startNoteListLoading());

    const { userId } = action.payload;

    yield call(notesSagas.getNoteListSaga, { userId });
  } catch (error) {
  } finally {
    yield put(notesActions.stopNoteListLoading());
  }
}

export function* getNoteFlow(
  action: ReturnType<typeof notesActions.getNote>,
): Generator {
  try {
    yield put(notesActions.startEditableNoteLoading());

    const { id } = action.payload;

    yield call(notesSagas.getNoteSaga, { id });
  } catch (error) {

  } finally {
    yield put(notesActions.stopEditableNoteLoading());
  }
}

export function* incNumViewsFlow(
  action: ReturnType<typeof notesActions.incNumViews>,
): Generator {
  try {
    yield put(notesActions.startIncNumViewsFetchingLoading());

    yield call(notesSagas.incNumViewsSaga, action.payload);
  } catch (error) {

  } finally {
    yield put(notesActions.stopIncNumViewsFetchingLoading());

    yield put(push(`${URLS.NOTES}/${action.payload.id}`));
  }
}

export function* notesWatcher(): SagaIterator {
  yield all([
    takeEvery(notesActions.getNoteList, getNotesListFlow),
    takeEvery(notesActions.getNote, getNoteFlow),
    takeEvery(notesActions.incNumViews, incNumViewsFlow),
  ]);
}
