import React, { useEffect } from 'react';
import * as L from 'korus-ui';
import classNames from 'css-bem-classes';

import { useUserSelectors } from '@common/models/user';
import { useRouterFilter } from '@common/models/routerFilter';

import { useTagsActions } from '../ducks';
import { useTagsSelectors } from '../selectors';

const cn = classNames('user-tags');

export const UserTags: React.FC = () => {
  const { userProfile } = useUserSelectors();
  const { isTagListLoading, tagList } = useTagsSelectors();
  const { getUserTags } = useTagsActions();
  const { onChangeFilterState, filterValues } = useRouterFilter('tags');

  useEffect(() => {
    getUserTags({ userId: userProfile?.id });
  }, []);

  return (
    <L.Loader isLoading={isTagListLoading}>
      <L.Div
        className={cn()}
      >
        <L.H2 _marginBottom>
          Тэги:
        </L.H2>
        <L.Div _dFlex _flexWrap>
          {
            tagList?.map((tag) => (
              <L.Span
                key={tag.id}
                onClick={onChangeFilterState(tag.label)}
                className={`
                  ${cn('tag-label', { active: filterValues.includes(tag.label) })}
                  pointer
                `}
              >
                {tag.label}
              </L.Span>
            ))
          }
        </L.Div>
      </L.Div>
    </L.Loader>
  );
};
