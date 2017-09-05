import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import configureStore from './store/configureStore';
import Root from './containers/Root';
import registerServiceWorker from './registerServiceWorker';

const history = createHistory();
const store = configureStore(history);

const rootEl = document.getElementById('root');
const render = Component => ReactDOM.render( // eslint-disable-line react/no-render-return-value
  <Component store={store} history={history} />,
  rootEl,
);

render(Root);
if (module.hot) module.hot.accept('./containers/Root', () => render(Root));
registerServiceWorker();
