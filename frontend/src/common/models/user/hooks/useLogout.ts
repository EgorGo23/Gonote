import { useCallback } from 'react';

import { useUserActions } from '../ducks';

export const useLogout = () => {
  const { clearUserProfile } = useUserActions();

  return useCallback(
    () => {
      clearUserProfile();

      window.localStorage.clear();
    },
    [],
  );
};

