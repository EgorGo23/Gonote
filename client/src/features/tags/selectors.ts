import { createSelector } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

import { RootState } from '@store';
import { config } from '@common/config';

import { TagsState } from './ducks';

const tagsSelector = (state: RootState): TagsState =>
  state[config.modules.tags];

export const tagListSelector = createSelector(
  tagsSelector,
  (state) => state.tagList,
);

export const isTagListLoadingSelector = createSelector(
  tagsSelector,
  (state) => state.isTagListLoading,
);

export const selectors = {
  tagListSelector,
  isTagListLoadingSelector,
};

interface TagsSelectors {
  tagList: ReturnType<typeof tagListSelector>;
  isTagListLoading: ReturnType<typeof isTagListLoadingSelector>;
}

export const useTagsSelectors = (): TagsSelectors => ({
  tagList: useSelector(tagListSelector),
  isTagListLoading: useSelector(isTagListLoadingSelector),
});
