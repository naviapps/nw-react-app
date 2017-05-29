import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './store/configureStore';
import Root from './containers/Root';

const store = configureStore(browserHistory);
const history = syncHistoryWithStore(browserHistory, store);

const rootEl = document.getElementById('root');
const render = Component => ReactDOM.render( // eslint-disable-line react/no-render-return-value
  <AppContainer>
    <Component store={store} history={history} />
  </AppContainer>,
  rootEl,
);

render(Root);
if (module.hot) module.hot.accept('./containers/Root', () => render(Root));
