import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { config } from '@common/config';
import { useActions } from '@common/hooks';

export type RouterFilterState = {
  [filterName: string]: string[],
};

const initialState = {};

const toSetActiveFilters = (
  state: RouterFilterState,
  { payload }: PayloadAction<{ filterName: string, filterValues: string[] }>,
): RouterFilterState => ({
  ...state,
  [payload.filterName]: payload.filterValues,
});

const toChangeRouterFilter = (
  state: RouterFilterState,
  { payload }: PayloadAction<[string, string]>,
): RouterFilterState => {
  const [filterName, filterItem] = payload;

  if (state[filterName]) {
    return {
      ...state,
      [filterName]: state[filterName].includes(filterItem)
        ? state[filterName].filter((filterItm) => filterItm !== filterItem)
        : [...state[filterName], filterItem],
    };
  }


  return {
    ...state,
    [filterName]: [filterItem],
  };
};

const toClearFilter = (): RouterFilterState => initialState;

const routerFilterSlice = createSlice({
  name: config.modules.routerFilter,
  initialState,
  reducers: {
    setActiveFilters: toSetActiveFilters,
    changeRouterFilter: toChangeRouterFilter,
    clearFilterState: toClearFilter,
  },
});

export const routerFilterReducer = routerFilterSlice.reducer;

export const actions = {
  ...routerFilterSlice.actions,
};

interface RouterFilterActions {
  setActiveFilters: typeof actions.setActiveFilters,
  changeRouterFilter: typeof actions.changeRouterFilter;
  clearFilterState: typeof actions.clearFilterState;
}

export const useRouterFilterActions = (): RouterFilterActions =>
  useActions({
    ...actions,
  });
