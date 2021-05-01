import React, { ReactNode, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import * as L from 'korus-ui';

import { useUserSelectors, useLogout } from '@common/models/user';
import { URLS } from '@common/constants';

import { Notices } from '@features/notices';
import { GlobalLoader } from '@features/loading';

import { Header } from './Header';
import { Footer } from './Footer';
import { Sidebar } from './Sidebar';

type LayoutProp = {
  children: ReactNode | ReactNode[];
};

/**
 * ### Базовый макет страницы
 *
 * @returns {JSX.Element} - Базовый макет страницы
 */
export const MainLayout: React.FC<LayoutProp> = ({ children }) => {
  const { userProfile } = useUserSelectors();
  const { pathname } = useLocation();

  const logout = useLogout();

  const isAuth = useMemo(() => pathname === URLS.LOGIN, [pathname]);
  const userFullName = useMemo(
    () => `${userProfile.firstName} ${userProfile.lastName}`, [userProfile],
  );

  return (
    <GlobalLoader>
      <L.Div _appWrapper _authWrapper={isAuth}>
        <Header
          userFullName={userFullName}
          isAuth={isAuth}
          onLogout={logout}
        />
        <Sidebar isAuth={isAuth} />
        <L.Main
          _width100
          _gonoteMain
          _authMain={isAuth}
        >
          {children}
        </L.Main>
        <Footer isAuth={isAuth} />
      </L.Div>
      <Notices />
    </GlobalLoader>
  );
};
