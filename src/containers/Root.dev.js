import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import Routes from '../routes';
import DevTools from './DevTools';

const Root = ({ store, history }) => ( // eslint-disable-line react/prop-types
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Routes />
        <DevTools />
      </div>
    </ConnectedRouter>
  </Provider>
);

export default Root;
