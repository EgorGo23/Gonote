import { SagaIterator } from 'redux-saga';
import { call, all, fork } from 'redux-saga/effects';

import {
  initProcessWatcher,
  authorizationWatcher,
  notesWatcher,
  tagsWatcher,
} from '../processes';

/**
 * Главная сага - точка входа
 *
 * @returns {void}
 */
export function* rootSaga(): SagaIterator {
  // eslint-disable-next-line no-console
  yield call(console.log, 'Root Saga Runner...!');

  yield all([
    initProcessWatcher,
    authorizationWatcher,
    notesWatcher,
    tagsWatcher,
  ].map(fork));
}
