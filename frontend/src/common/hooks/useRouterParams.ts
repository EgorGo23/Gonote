import { RouterParams } from '@common/types/general';

import { useRouter } from './useRouter';

export const useRouterParams = (): Partial<RouterParams> => {
  const {
    match: { params },
  } = useRouter<Partial<RouterParams>>();

  return params;
};
