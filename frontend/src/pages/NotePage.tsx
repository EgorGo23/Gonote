import React from 'react';
import classNames from 'css-bem-classes';
import * as L from 'korus-ui';

import { EditableNote } from '@features/notes';

const cn = classNames('note-page');

export const NotePage: React.FC = () => (
  <L.Div className={`${cn()} d-flex`}>
    <EditableNote />
  </L.Div>
);
