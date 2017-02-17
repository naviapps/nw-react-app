import React, { Component, PropTypes } from 'react';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from '../routes';

export default class Root extends Component {
  render() {
    const { store } = this.props;
    const history = syncHistoryWithStore(browserHistory, store);

    return (
      <Provider store={store}>
        <Router history={history} routes={routes} />
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.instanceOf(Store).isRequired,
};

export default Root;
