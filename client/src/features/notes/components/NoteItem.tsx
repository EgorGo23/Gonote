import React, { memo } from 'react';
import classNames from 'css-bem-classes';
import * as L from 'korus-ui';
import moment from 'moment';

import { INote } from '@common/types/server-responses';
import { useRouterFilterSelectors } from '@common/models/routerFilter';

import { useNotesActions } from '../ducks';

const cn = classNames('note');

interface Props {
  note: INote;
}

export const NoteItem: React.FC<Props> = memo(({ note }) => {
  const { incNumViews } = useNotesActions();
  const { routerFilterState } = useRouterFilterSelectors();

  const handleClickReadMore = () => {
    incNumViews(note);
  };

  return (
    <L.Div
      className={`${cn()} d-flex`}
    >
      <L.Div className={cn('image')}>
        <L.Img src={note.imageUrl} alt="note-image" />
      </L.Div >
      <L.Div className={`${cn('content')} d-flex flex-column`}>
        <L.Div
          className={`${cn('content__header')} d-flex align-items-center justify-content-between`}
        >
          <L.H3 >{note.title}</L.H3>
          <L.Div _d-flex _flex-column _align-items-end>
            <L.Div>
              Опубликовано:
              {' '}
              {moment(note.creationDate).format('DD.MM.YYYY')}
            </L.Div>
            <L.Div _subtitle>
              Число просмотров:
              {' '}
              {note.numViews}
            </L.Div>
          </L.Div>
        </L.Div>
        <L.Div className={cn('desc')}>
          <L.P>{note.desctiption}</L.P>
        </L.Div>
        <L.Div
          className={
            `
              ${cn('footer')}
              d-flex
              align-items-center
              justify-content-between
              padding-right
            `
          }
        >
          <L.Div className={cn('footer__tags')}>
            {note?.tags?.map((tag) => (
              <L.Div
                key={tag.id}
                className={`${cn(
                  'footer__tag',
                  { active: !!routerFilterState?.tags?.includes(tag.label) },
                )}`}
              >
                {`#${tag.label}`}
              </L.Div>
            ))}
          </L.Div>
          <L.Button
            className={cn('footer__button pointer')}
            onClick={handleClickReadMore}
          >
            Читать далее
          </L.Button>
        </L.Div>
      </L.Div>
    </L.Div>
  );
});
