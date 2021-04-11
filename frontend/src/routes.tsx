import React from 'react';
import * as L from 'korus-ui';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router';
import { History, LocationState } from 'history';

import { URLS, RoleCode } from '@common/constants';
import { PrivateRoute } from '@common/components';

import { MainLayout } from '@layouts/main-layout/MainLayout';
import { LoginPage, NotesPage, NotePage } from '@pages';

import { useLoaderSelector } from '@features/loading';

interface AppRoutesProps<S = LocationState> {
  history: History<S>;
}

/**
 * @param {AppRoutesProps} props - пропсы компонента
 *
 * @returns {JSX.Element} Компонент с роутами приложения
 */
export function AppRoutes<S = LocationState>({
  history,
}: AppRoutesProps<S>): JSX.Element {
  const { isInitializationApp } = useLoaderSelector();

  return (
    isInitializationApp
      ? <L.Loader isLoading={isInitializationApp} isGlobal={isInitializationApp} />
      : (
        <ConnectedRouter history={history}>
          <L.Leda underscoreClassesTransform={L.UnderscoreClasses.CamelCaseTransform}>
            <MainLayout>
              <Switch>
                <PrivateRoute exact path={URLS.MAIN} redirectUrl={URLS.NOTES} />
                <PrivateRoute
                  exact
                  path={URLS.NOTES}
                  roles={[RoleCode.User]}
                  component={NotesPage}
                />
                <PrivateRoute
                  exact
                  path={`${URLS.NOTES}/tags=:filterTagLabel`}
                  roles={[RoleCode.User]}
                  component={NotesPage}
                />
                <PrivateRoute
                  exact
                  path={`${URLS.NOTES}/:noteId`}
                  component={NotePage}
                  roles={[RoleCode.User]}
                />
                <Route exact path={URLS.LOGIN} component={LoginPage} />
              </Switch>
            </MainLayout>
          </L.Leda>
        </ConnectedRouter>
      )
  );
}
