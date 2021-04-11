import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import '@styles/main.scss';

import { AppRoutes } from '@src/routes';
import configureStore, { history } from '@store';
import { actions as initProcessActions } from '@processes/init';

const store = configureStore();
store.dispatch(initProcessActions.initApp());

export const render = (): void => {
  ReactDOM.render(
    <Provider store={store}>
      <AppRoutes history={history} />
    </Provider>,
    document.getElementById('app'),
  );
};

window.addEventListener('load', render);
