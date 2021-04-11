import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

import { URLS, RoleCode } from '@common/constants';
import { useUserSelectors } from '@common/models/user';

interface Props extends RouteProps {
  component: React.FC;
  roles: RoleCode[];
  redirectUrl: string;
  rest: any[];
}

export const PrivateRoute: React.FC<Partial<Props>> = ({
  component,
  roles,
  redirectUrl,
  ...rest
}) => {
  const { isUserExists, userRole } = useUserSelectors();

  if (!isUserExists) {
    return <Redirect to={URLS.LOGIN} />;
  }

  if (roles && !roles.includes(userRole)) {
    return <Redirect to={URLS.MAIN} />;
  }

  if (redirectUrl) {
    return <Redirect to={redirectUrl} />;
  }

  return <Route {...rest} component={component} />;
};
