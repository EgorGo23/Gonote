import React from 'react';
import classNames from 'css-bem-classes';
import * as L from 'korus-ui';

import { INote } from '@common/types/server-responses';
import { URLS } from '@common/constants';

import { useNotesActions } from '../ducks';

const cn = classNames('similar-notes');

interface Props {
  similarNotes: INote[],
}

export const SimilarNotes: React.FC<Props> = (
  { similarNotes },
) => {
  const { incNumViews } = useNotesActions();
  return (
    <L.Div
      className={`${cn()} block-inline padding`}
    >
      <L.H5 className={`${cn('header')} margin-bottom`}>Похожие заметки:</L.H5>
      <L.Div className={`${cn('body')} d-flex justify-content-between`}>
        {
          similarNotes.map((note) => (
            <L.Div
              key={note.id}
              className={
                `
                  ${cn('body__item')}
                  d-flex
                  flex-column
                  align-items-center
                  justify-content-start
                  pointer
                `
              }
              onClick={() => incNumViews(note)}
            >
              <L.Img src={note.imageUrl} />
              <L.Span>{note.title}</L.Span>
            </L.Div>
          ))
        }
      </L.Div>
    </L.Div>
  );
};
