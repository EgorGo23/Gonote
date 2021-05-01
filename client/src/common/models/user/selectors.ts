import { createSelector } from '@reduxjs/toolkit';
import { isEmpty, not } from 'ramda';
import { useSelector } from 'react-redux';

import { RootState } from '@store';
import { config } from '@common/config';

import { UserState } from './ducks';

const userSelector = (state: RootState): UserState =>
  state[config.modules.user] as UserState;

export const userProfile = createSelector(userSelector, (user) => user);

export const isUserExists = createSelector(userSelector, (user) =>
  not(isEmpty(user)));

export const userRole = createSelector(userSelector, (user) => user.role);

interface UserSelectors {
  userProfile: ReturnType<typeof userProfile>;
  isUserExists: ReturnType<typeof isUserExists>;
  userRole: ReturnType<typeof userRole>;
}

export const useUserSelectors = (): UserSelectors => ({
  userProfile: useSelector(userProfile),
  isUserExists: useSelector(isUserExists),
  userRole: useSelector(userRole),
});
