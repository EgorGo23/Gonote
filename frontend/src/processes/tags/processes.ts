import { SagaIterator } from 'redux-saga';
import {
  call, all, takeEvery, put,
} from 'redux-saga/effects';

import {
  actions as tagsActions,
  sagas as tagsSagas,
} from '@features/tags';

export function* getTagsFlow(
  action: ReturnType<typeof tagsActions.getUserTags>,
): Generator {
  try {
    yield put(tagsActions.startTagListLoading());

    const { userId } = action.payload;

    yield call(tagsSagas.getUserTagsSaga, { userId });
  } catch (error) {
  } finally {
    yield put(tagsActions.stopTagListLoading());
  }
}

export function* tagsWatcher(): SagaIterator {
  yield all([
    takeEvery(tagsActions.getUserTags, getTagsFlow),
  ]);
}
