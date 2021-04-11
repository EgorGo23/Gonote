import { useDispatch } from 'react-redux';
import { useMemo } from 'react';
import { ActionCreatorsMapObject, bindActionCreators } from 'redux';

export const useActions = <T extends ActionCreatorsMapObject>(
  actions: T,
): T => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(actions, dispatch), [
    actions,
    dispatch,
  ]);
};
