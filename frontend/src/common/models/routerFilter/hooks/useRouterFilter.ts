import { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import { getFilterItemsFromPathname } from '@common/utils';
import { URLS } from '@common/constants';

import { useRouterFilterActions } from '../ducks';
import { useRouterFilterSelectors } from '../selectors';

type RouterFilter = {
  onChangeFilterState: (filterItem: string) => () => void;
  filterValues: string[],
};

export const useRouterFilter = (filterBy: string): RouterFilter => {
  const { push } = useHistory();
  const { pathname } = useLocation();
  const { routerFilterState } = useRouterFilterSelectors();
  const { setActiveFilters, clearFilterState } = useRouterFilterActions();
  const [filterState, setFilterState] = useState<string[]>([]);

  const handleChangeRouterFilterState = (filterItem: string) => () => {
    setFilterState((prevState) => (prevState.includes(filterItem)
      ? prevState.filter((item) => item !== filterItem) : [...prevState, filterItem]));

    const filterItemsFromPathname = pathname === URLS.NOTES
      ? getFilterItemsFromPathname(pathname, filterBy)
      : routerFilterState?.[filterBy];

    if (filterItemsFromPathname.length === 1 && filterItemsFromPathname.includes(filterItem)) {
      push(URLS.NOTES);

      return;
    }

    const newFilterPathname = filterItemsFromPathname.includes(filterItem)
      ? filterItemsFromPathname.filter((item) => item !== filterItem).join('+')
      : [...filterItemsFromPathname, filterItem].join('+');

    push(`${URLS.NOTES}/tags=${newFilterPathname}`);
  };

  useEffect(() => {
    setActiveFilters({
      filterName: filterBy,
      filterValues: filterState,
    });
  }, [filterState]);

  useEffect(() => {
    const filterItemsFromPathname = getFilterItemsFromPathname(pathname, filterBy);

    if (filterItemsFromPathname?.length) {
      setActiveFilters({
        filterName: filterBy,
        filterValues: filterItemsFromPathname,
      });

      setFilterState(filterItemsFromPathname);
    }

    return () => {
      clearFilterState();
      setFilterState([]);
    };
  }, []);

  useEffect(() => {
    if (pathname === URLS.NOTES) {
      setFilterState([]);
      clearFilterState();
    }
  }, [pathname]);

  return {
    onChangeFilterState: handleChangeRouterFilterState,
    filterValues: routerFilterState?.[filterBy] || [],
  };
};
