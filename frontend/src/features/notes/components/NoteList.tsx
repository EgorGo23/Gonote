import React, { useEffect } from 'react';
import * as L from 'korus-ui';

import { useUserSelectors } from '@common/models/user';

import { useNotesActions } from '../ducks';
import { useNotesSelector } from '../selectors';
import { NoteItem } from './NoteItem';


export const NoteList: React.FC = () => {
  const {
    userProfile: { id },
  } = useUserSelectors();
  const { getNoteList } = useNotesActions();
  const { noteList, isNoteListLoading } = useNotesSelector();

  useEffect(() => {
    getNoteList({ userId: id });
  }, []);

  return (
    <L.Loader isLoading={isNoteListLoading}>
      {noteList.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </L.Loader>
  );
};
