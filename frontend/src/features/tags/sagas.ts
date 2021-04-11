import { AxiosPromise } from 'axios';
import {
  put, call, select,
} from 'redux-saga/effects';

import { ITag } from '@common/types/server-responses';

import { getUserTagsRequest } from '@api/tags';

import {
  actions as tagsActions,
} from './ducks';
import {
  GetUserTagsPayload,
} from './types';

function* getUserTagsSaga(
  params: GetUserTagsPayload,
): Generator {
  const { userId } = params;

  const { data: tags }: AxiosPromise<ITag[]> = yield call(getUserTagsRequest, {
    userId,
  });

  yield put(tagsActions.setTagList(tags));
}

export const sagas = {
  getUserTagsSaga,
};
