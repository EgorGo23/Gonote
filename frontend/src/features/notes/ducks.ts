import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { INote } from '@common/types/server-responses';
import { config } from '@common/config';
import { useActions } from '@common/hooks';

import { GetNotesPayload, GetNotePayload, IncNumViewsPayload } from './types';

export type NotesState = {
  editableNote: INote;
  noteList: INote[];
  isNoteListLoading: boolean,
  isEditableNoteLoading: boolean,
  isIncNumViewsFetchingLoading: boolean,
};

const initialState: NotesState = {
  editableNote: {} as INote,
  noteList: [],
  isNoteListLoading: false,
  isEditableNoteLoading: false,
  isIncNumViewsFetchingLoading: false,
};

export const getNoteList = createAction<GetNotesPayload>('getNoteList');

export const getNote = createAction<GetNotePayload>('getNote');

export const incNumViews = createAction<IncNumViewsPayload>('incNumViews');

const toSetNote = (
  state: NotesState,
  { payload }: PayloadAction<INote>,
): NotesState => ({
  ...state,
  editableNote: payload,
});

const toSetNoteList = (
  state: NotesState,
  { payload }: PayloadAction<INote[]>,
): NotesState => ({
  ...state,
  noteList: payload,
});

const toClearNoteList = (state: NotesState): NotesState => ({
  ...state,
  noteList: [],
});

const toClearEditableNote = (state: NotesState): NotesState => ({
  ...state,
  editableNote: {} as INote,
});

const notesSlice = createSlice({
  name: config.modules.notes,
  initialState,
  reducers: {
    setNoteList: toSetNoteList,
    clearNotes: toClearNoteList,
    setEditableNote: toSetNote,
    clearEditableNote: toClearEditableNote,
    startNoteListLoading: (state) => {
      state.isNoteListLoading = true;
    },
    stopNoteListLoading: (state) => {
      state.isNoteListLoading = false;
    },
    startEditableNoteLoading: (state) => {
      state.isEditableNoteLoading = true;
    },
    stopEditableNoteLoading: (state) => {
      state.isEditableNoteLoading = true;
    },
    startIncNumViewsFetchingLoading: (state) => ({
      ...state,
      isEditableNoteLoading: true,
    }),
    stopIncNumViewsFetchingLoading: (state) => ({
      ...state,
      isEditableNoteLoading: false,
    }),
  },
});

export const notesReducer = notesSlice.reducer;

export const actions = {
  getNoteList,
  getNote,
  incNumViews,
  ...notesSlice.actions,
};

interface NotesActions {
  getNoteList: typeof getNoteList;
  getNote: typeof getNote;
  incNumViews: typeof incNumViews;
  setNoteList: typeof notesSlice.actions.setNoteList;
  setEditableNote: typeof notesSlice.actions.setEditableNote;
  clearEditableNote: typeof notesSlice.actions.clearEditableNote;
  clearNotes: typeof notesSlice.actions.clearNotes;
}

export const useNotesActions = (): NotesActions =>
  useActions({
    ...actions,
  });
