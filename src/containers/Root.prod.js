import React, { PropTypes } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';

const Root = ({ store }) => (
  <Provider store={store}>
    <App />
  </Provider>
);

Root.propTypes = {
  store: PropTypes.instanceOf(createStore).isRequired,
};

export default Root;
