import { SagaIterator } from 'redux-saga';
import {
  call, put, all, takeEvery,
} from 'redux-saga/effects';

import {
  actions as userActions,
  sagas as authSagas,
} from '@common/models/user';

import { actions as loadingActions } from '@features/loading';

export function* getAuthorizationFlow(
  action: ReturnType<typeof userActions.getUser>,
): Generator {
  try {
    yield put(
      loadingActions.setLoading({
        isLoading: true,
        isGlobal: true,
      }),
    );

    const { login, password } = action.payload;

    yield call(authSagas.getAuthSaga, { login, password });
  } catch (error) { } finally {
    yield put(
      loadingActions.setLoading({
        isLoading: false,
        isGlobal: false,
      }),
    );
  }
}

export function* authorizationWatcher(): SagaIterator {
  yield all([
    takeEvery(userActions.getUser, getAuthorizationFlow),
  ]);
}
