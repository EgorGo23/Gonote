import React from 'react';
import classNames from 'css-bem-classes';
import * as L from 'korus-ui';

import { NoteList } from '@features/notes';

const cn = classNames('notes-page');

export const NotesPage: React.FC = () => (
  <L.Div className={cn()}>
    <NoteList />
  </L.Div>
);
