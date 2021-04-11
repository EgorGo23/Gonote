import { AxiosPromise } from 'axios';
import {
  put, call, select,
} from 'redux-saga/effects';

import { INote } from '@common/types/server-responses';

import { getNotesRequest, getNoteRequest, incNumViewsRequest } from '@api/notes';

import {
  actions as notesActions,
} from './ducks';
import {
  selectors as notesSelectors,
} from './selectors';


import { GetNotesPayload, GetNotePayload, IncNumViewsPayload } from './types';

function* getNoteListSaga(
  params: GetNotesPayload,
): Generator {
  const { userId } = params;

  const { data: notes }: AxiosPromise<INote[]> = yield call(getNotesRequest, {
    userId,
  });

  yield put(notesActions.setNoteList(notes));
}

function* getNoteSaga(
  params: GetNotePayload,
): Generator {
  const { id } = params;

  const { data: [note] }: AxiosPromise<INote[]> = yield call(getNoteRequest, { id });

  yield put(notesActions.setEditableNote(note));
}

function* incNumViewsSaga(
  params: IncNumViewsPayload,
): Generator {
  const updatableNoteData = params;

  yield call(
    incNumViewsRequest,
    { ...updatableNoteData, numViews: updatableNoteData.numViews + 1 },
  );

  const notes: ReturnType<
    typeof notesSelectors.noteListSelector
  > = yield select(notesSelectors.noteListSelector);

  const newNotes = [...notes];

  const updNoteInd = newNotes.findIndex((note) => note.id === updatableNoteData.id);

  newNotes[updNoteInd] = {
    ...updatableNoteData,
    numViews: updatableNoteData.numViews + 1,
  };

  yield put(notesActions.setNoteList(newNotes));
}

export const sagas = {
  getNoteListSaga,
  getNoteSaga,
  incNumViewsSaga,
};

