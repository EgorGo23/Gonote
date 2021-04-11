import React from 'react';
import classNames from 'css-bem-classes';
import * as L from 'korus-ui';

import { Auth } from '@common/models/user';
import { GlobalLoader } from '@features/loading';

const cn = classNames('login-page');

export const LoginPage: React.FC = () => (
  <GlobalLoader>
    <L.Div className={`${cn()} box margin-y-none margin-x-auto`}>
      <L.H4 _inner-16 _txt-center _margin-bottom>
        Войти в систему
      </L.H4>
      <Auth />
    </L.Div>
  </GlobalLoader>
);
