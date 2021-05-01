import { createSelector } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { isNil, not, pathOr } from 'ramda';

import { RootState } from '@store';
import { config } from '@common/config';

import { ErrorsState } from './ducks';

const errorsSelector = (state: RootState): ErrorsState =>
  state[config.modules.errors];

/**
 * ## [Селектор] Есть ли глобальная ошибка
 */
const isErrorExists = createSelector(errorsSelector, (errors): boolean =>
  not(isNil(errors)));

/**
 * ## [Селектор] Получить заголовок ошибки
 */
const errorTitle = createSelector(errorsSelector, (error): string =>
  pathOr('', ['title'], error));

/**
 * ## [Селектор] Получить текст ошибки
 */
const errorMessage = createSelector(errorsSelector, (error): string =>
  pathOr('', ['message'], error));

/**
 * ## [Селектор] Получить код ошибки
 */
const errorCode = createSelector(errorsSelector, (error): string =>
  pathOr('', ['code'], error));

interface ErrorsSelectors {
  isErrorExists: ReturnType<typeof isErrorExists>;
  errorTitle: ReturnType<typeof errorTitle>;
  errorMessage: ReturnType<typeof errorMessage>;
  errorCode: ReturnType<typeof errorCode>;
}

export const useErrorsSelector = (): ErrorsSelectors => ({
  isErrorExists: useSelector(isErrorExists),
  errorTitle: useSelector(errorTitle),
  errorMessage: useSelector(errorMessage),
  errorCode: useSelector(errorCode),
});
