import React, { useEffect, useMemo } from 'react';
import classNames from 'css-bem-classes';
import moment from 'moment';
import * as L from 'korus-ui';

import { useUserSelectors } from '@common/models/user';
import { useRouterParams } from '@common/hooks';
import { useRouterFilterSelectors } from '@common/models/routerFilter';

import { useNotesActions } from '../ducks';
import { useNotesSelector } from '../selectors';
import { SimilarNotes } from './SimilarNotes';
import { getSimilarNotes } from '../helpers';

const cn = classNames('editable-note');

export const EditableNote: React.FC = () => {
  const { noteId } = useRouterParams();
  const { getNote, getNoteList } = useNotesActions();
  const {
    noteList,
    editableNote,
    isEditableNoteLoading,
    isIncNumViewsFetchingLoading,
  } = useNotesSelector();
  const {
    userProfile: { id: userId },
  } = useUserSelectors();
  const { routerFilterState } = useRouterFilterSelectors();

  useEffect(() => {
    getNote({ id: noteId });

    if (noteList.length === 0) {
      getNoteList({ userId });
    }
  }, [noteId, noteList]);

  const similarNotes = useMemo(() =>
    getSimilarNotes(editableNote, noteList, 4), [editableNote, noteList]);

  return (
    <L.Loader isLoading={isEditableNoteLoading || isIncNumViewsFetchingLoading} _width100>
      <L.Div _dFlex _width100 className={cn('box')}>
        <L.Div className={cn('image')}>
          <L.Img src={editableNote?.imageUrl} alt="note-image" />
        </L.Div>
        <L.Div className={`${cn('content')} d-flex flex-column`}>
          <L.Div
            className={`${cn('content__header')} d-flex align-items-center justify-content-between`}
          >
            <L.H3>{editableNote?.title}</L.H3>
            <L.Div _d-flex _flex-column _align-items-end>
              <L.Div>
                Опубликовано:
                {' '}
                {moment(editableNote?.creationDate).format('DD.MM.YYYY')}
              </L.Div>
              <L.Div _subtitle>
                Число просмотров:
                {' '}
                {editableNote?.numViews}
              </L.Div>
            </L.Div>
          </L.Div>
          <L.Div className={cn('desc')}>
            <L.P>{editableNote?.desctiption}</L.P>
          </L.Div>
          <L.Div className={`${cn('footer')}  d-flex align-items-center justify-content-between`}>
            <L.Div className={cn('footer__tags')}>
              {editableNote?.tags?.map((tag) => (
                <L.Div
                  key={tag.id}
                  className={cn(
                    'footer__tag',
                    { active: !!routerFilterState?.tags?.includes(tag.label) },
                  )}
                >
                  {`#${tag.label}`}
                </L.Div>
              ))}
            </L.Div>
          </L.Div>
        </L.Div>
      </L.Div>
      <SimilarNotes similarNotes={similarNotes} />
    </L.Loader>
  );
};
