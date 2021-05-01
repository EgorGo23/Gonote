import { AxiosPromise } from 'axios';
import { put, call } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { IUser } from '@common/types/server-responses';
import { URLS } from '@common/constants';

import { getUserRequest } from '@api/user';

import { actions as authActions } from './ducks';
import { GetUserPayload } from './types';

export function* getAuthSaga(
  params: GetUserPayload,
): Generator {
  const { login, password } = params;

  //TODO
  //@ts-ignore
  const { data: [user] }: AxiosPromise<IUser> = yield call(getUserRequest, {
    login,
    password,
  });

  yield put(authActions.setUserProfile(user));

  window.localStorage.setItem('user', JSON.stringify(user));

  yield put(push(URLS.MAIN));
}

export const sagas = { getAuthSaga };
