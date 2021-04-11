import { createSelector } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

import { RootState } from '@store';
import { config } from '@common/config';

import { NotesState } from './ducks';

const notesSelector = (state: RootState): NotesState =>
  state[config.modules.notes];

export const noteListSelector = createSelector(
  notesSelector,
  (state) => state.noteList,
);

export const editableNoteSelector = createSelector(
  notesSelector,
  (state) => state.editableNote,
);

export const isNoteListLoadingSelector = createSelector(
  notesSelector,
  (state) => state.isNoteListLoading,
);

export const isEditableNoteLoadingSelector = createSelector(
  notesSelector,
  (state) => state.isEditableNoteLoading,
);

export const isIncNumViewsFetchingLoadingSelector = createSelector(
  notesSelector,
  (state) => state.isIncNumViewsFetchingLoading,
);

export const selectors = {
  noteListSelector,
  editableNoteSelector,
  isNoteListLoadingSelector,
  isEditableNoteLoadingSelector,
};
interface NotesSelectors {
  noteList: ReturnType<typeof noteListSelector>;
  editableNote: ReturnType<typeof editableNoteSelector>;
  isNoteListLoading: ReturnType<typeof isNoteListLoadingSelector>;
  isEditableNoteLoading: ReturnType<typeof isEditableNoteLoadingSelector>;
  isIncNumViewsFetchingLoading: ReturnType<typeof isIncNumViewsFetchingLoadingSelector>
}

export const useNotesSelector = (): NotesSelectors => ({
  editableNote: useSelector(editableNoteSelector),
  noteList: useSelector(noteListSelector),
  isNoteListLoading: useSelector(isNoteListLoadingSelector),
  isEditableNoteLoading: useSelector(isEditableNoteLoadingSelector),
  isIncNumViewsFetchingLoading: useSelector(isIncNumViewsFetchingLoadingSelector),
});
