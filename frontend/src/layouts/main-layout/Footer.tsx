import React, { memo } from 'react';
import * as L from 'korus-ui';

interface Props {
  isAuth: boolean,
}

export const Footer: React.FC<Props> = memo(
  ({ isAuth }) => {
    if (isAuth) {
      return null;
    }

    return (
      <L.Footer _gonoteFooter>
        <L.Div _txtGray _txtDefault _paddingY16>
          <L.Div _dFlex _justifyContentCenter />
        </L.Div>
      </L.Footer>
    );
  },
);
