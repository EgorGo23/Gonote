import { SagaIterator } from 'redux-saga';
import {
  put,
  delay,
  all,
  takeEvery,
  call,
} from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { config } from '@common/config';
import { URLS } from '@common/constants';
import { logger } from '@common/utils';
import { actions as loadingActions } from '@features/loading';

import { actions as userActions } from '@common/models/user/ducks';

import { actions as initProcessActions } from './actions';

/**
 * Процесс инициализации приложения
 *
 * @returns {void}
 */
function* initProcess(): Generator {
  yield put(
    loadingActions.setLoading({
      isLoading: true,
      isGlobal: true,
      isInitializationApp: true,
    }),
  );

  yield delay(config.defaultDelay);

  yield call(logger, 'Run init process!!!');

  const currentUser = window.localStorage.getItem('user');

  if (currentUser) {
    yield put(userActions.setUserProfile(JSON.parse(currentUser)));
  } else {
    yield put(push(URLS.LOGIN));
  }

  yield put(
    loadingActions.setLoading({
      isLoading: false,
      isGlobal: false,
      isInitializationApp: false,
    }),
  );
}

/**
 * Вотчер процесса инициализации приложения
 *
 * @returns {void}
 */
export function* initProcessWatcher(): SagaIterator {
  yield all([takeEvery(initProcessActions.initApp, initProcess)]);
}
