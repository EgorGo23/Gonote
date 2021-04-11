import React, { useState } from 'react';
import classNames from 'css-bem-classes';
import * as L from 'korus-ui';

import { LoginData } from '../types';
import { useUserActions } from '../ducks';

const cn = classNames('login');

export const Auth: React.FC = () => {
  const { getUser } = useUserActions();

  const [userData, setUserData] = useState<LoginData>({} as LoginData);

  const handleChangeUserData = ({
    component: { value, name },
  }: L.InputTypes.ChangeEvent) => {
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSignIn = () => {
    getUser(userData);
  };

  return (
    <>
      <L.Div className={cn('form')}>
        <L.Dl _list _w-15>
          <L.Dt>
            <label>Логин</label>
          </L.Dt>
          <L.Dd>
            <L.Input
              isRequired
              name="login"
              form="sign-in"
              placeholder="Введите пароль"
              value={userData?.login || ''}
              onChange={handleChangeUserData}
            />
          </L.Dd>
          <L.Dt>
            <label>Пароль</label>
          </L.Dt>
          <L.Dd>
            <L.Password
              isRequired
              name="password"
              form="sign-in"
              placeholder="Введите пароль"
              value={userData?.password || ''}
              onChange={handleChangeUserData}
              passwordEvaluators={null}
              passwordRules=""
            />
          </L.Dd>
        </L.Dl>
      </L.Div>
      <L.Div className={`${cn('footer')} d-flex justify-content-center`}>
        <L.Button form="sign-in" onClick={handleSignIn}>
          Войти
        </L.Button>
      </L.Div>
    </>
  );
};
