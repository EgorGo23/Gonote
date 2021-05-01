import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ITag } from '@common/types/server-responses';
import { config } from '@common/config';
import { useActions } from '@common/hooks';

import { GetUserTagsPayload } from './types';

export type TagsState = {
  tagList: ITag[];
  isTagListLoading: boolean;
};

const initialState: TagsState = {
  tagList: [],
  isTagListLoading: false,
};

export const getUserTags = createAction<GetUserTagsPayload>('getUserTags');

const toSetTagList = (
  state: TagsState,
  { payload }: PayloadAction<ITag[]>,
): TagsState => ({
  ...state,
  tagList: payload,
});

const tagsSlice = createSlice({
  name: config.modules.tags,
  initialState,
  reducers: {
    setTagList: toSetTagList,
    startTagListLoading: (state) => {
      //TODO
      //@ts-ignore
      state.isTagListLoading = true;
    },
    stopTagListLoading: (state) => {
      //TODO
      //@ts-ignore
      state.isTagListLoading = false;
    },
  },
});

export const tagsReducer = tagsSlice.reducer;

export const actions = {
  getUserTags,
  ...tagsSlice.actions,
};

interface TagsActions {
  getUserTags: typeof getUserTags;
}

export const useTagsActions = (): TagsActions =>
  useActions({
    ...actions,
  });
