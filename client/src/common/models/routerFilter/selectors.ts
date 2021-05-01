import { useSelector } from 'react-redux';

import { RootState } from '@store';
import { config } from '@common/config';

import { RouterFilterState } from './ducks';

const routerFilterSelector = (state: RootState): RouterFilterState =>
  state[config.modules.routerFilter] as RouterFilterState;

interface RouterFilterSelectors {
  routerFilterState: ReturnType<typeof routerFilterSelector>;
}

export const useRouterFilterSelectors = (): RouterFilterSelectors => ({
  routerFilterState: useSelector(routerFilterSelector),
});
