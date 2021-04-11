import { createSelector } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

import { RootState } from '@store';
import { config } from '@common/config';

import { LoadingState } from './ducks';

const loadingSelector = (state: RootState): LoadingState =>
  state[config.modules.loading];

/**
 * ## [Селектор] - Включен ли лоадер
 */
const isLoading = createSelector(
  loadingSelector,
  (loading): boolean => loading.isLoading,
);

/**
 * ## [Селектор] - Включен ли лоадер в глобальном режиме
 */
const isGlobal = createSelector(
  loadingSelector,
  (loading): boolean => loading.isGlobal,
);

const isInitializationApp = createSelector(
  loadingSelector,
  (loading): boolean => loading.isInitializationApp,
);

export const selectors = {
  isLoading,
  isGlobal,
};

interface LoaderSelectors {
  isLoading: ReturnType<typeof isLoading>;
  isGlobal: ReturnType<typeof isGlobal>;
  isInitializationApp: ReturnType<typeof isInitializationApp>;
}

export const useLoaderSelector = (): LoaderSelectors => ({
  isLoading: useSelector(isLoading),
  isGlobal: useSelector(isGlobal),
  isInitializationApp: useSelector(isInitializationApp),
});
