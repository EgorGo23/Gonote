import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import * as L from 'korus-ui';

import { URLS } from '@common/constants';

interface Props {
  userFullName: string,
  onLogout: () => void,
  isAuth: boolean,
}

export const Header: React.FC<Props> = memo(
  (
    { userFullName, onLogout, isAuth },
  ) => {
    if (isAuth) {
      return null;
    }
    return (
      (
        <L.Header _gonoteHeader>
          <L.Div
            _width100
            _paddingX16
            _dFlex
            _justifyContentBetween
            _alignItemsCenter
          >
            <Link
              className="header__logo-link dInlineFlex alignItemsCenter"
              to={URLS.MAIN}
            >
              GONOTE
            </Link>
            <L.Ul _flexColumn className="header__account">
              <L.Li _level1 _pointer>
                <L.DropDown _more _wrapper _dFlex _alignItemsCenter>
                  <L.Div>
                    <L.Span _txtBold _user _txtNowrap>
                      {userFullName}
                    </L.Span>
                  </L.Div>
                  <L.Img src="./user.svg" className="header__icon-account" />
                  <L.Ul _list>
                    <L.Li _level2>
                      <Link to={URLS.LOGIN} onClick={onLogout}>
                        <L.I _prodiconExit _paddingRight8 _txtCenter />
                        Выйти
                      </Link>
                    </L.Li>
                  </L.Ul>
                </L.DropDown>
              </L.Li>
            </L.Ul>
          </L.Div>
        </L.Header>
      )
    );
  },
);
