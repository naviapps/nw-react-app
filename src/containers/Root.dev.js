import React, { PropTypes } from 'react';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import DevTools from './DevTools';
import routes from '../routes';

export default class Root extends Component {
  render() {
    const { store } = this.props;
    const history = syncHistoryWithStore(browserHistory, store);

    return (
      <Provider store={store}>
        <div>
          <Router history={history} routes={routes} />
          <DevTools />
        </div>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.instanceOf(Store).isRequired,
};

export default Root;
