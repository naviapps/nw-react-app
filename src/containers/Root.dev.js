import React, { PropTypes } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import DevTools from './DevTools';

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <App />
      <DevTools />
    </div>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.instanceOf(createStore).isRequired,
};

export default Root;
