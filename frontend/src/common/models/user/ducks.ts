import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IUser } from '@common/types/server-responses';
import { config } from '@common/config';
import { useActions } from '@common/hooks';

import { GetUserPayload } from './types';

const initialState = {};

export type UserState = IUser;

const getUser = createAction<GetUserPayload>('getUser');

const toSetUserProfile = (
  state: UserState,
  { payload }: PayloadAction<IUser>,
): UserState => ({
  ...payload,
});

const toClearUserProfile = () => initialState;

const userSlice = createSlice({
  name: config.modules.loading,
  initialState,
  reducers: {
    setUserProfile: toSetUserProfile,
    clearUserProfile: toClearUserProfile,
  },
});

export const actions = {
  getUser,
  ...userSlice.actions,
};

export const userReducer = userSlice.reducer;

interface UserActions {
  getUser: typeof getUser;
  setUserProfile: typeof userSlice.actions.setUserProfile;
  clearUserProfile: typeof userSlice.actions.clearUserProfile;
}

export const useUserActions = (): UserActions =>
  useActions({
    ...actions,
  });
