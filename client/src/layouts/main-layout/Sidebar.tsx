import React, { memo } from 'react';
import * as L from 'korus-ui';

import { UserTags } from '@features/tags';

interface Props {
  isAuth: boolean,
}

export const Sidebar: React.FC<Props> = memo(
  ({ isAuth }) => {
    if (isAuth) {
      return null;
    }

    return (
      <L.Aside
        _gonote-sidebar
      >
        <UserTags />
      </L.Aside>
    );
  },
);
