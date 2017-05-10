import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import Root from './containers/Root';

const store = configureStore();

const rootEl = document.getElementById('root');
const render = Component => ReactDOM.render( // eslint-disable-line react/no-render-return-value
  <AppContainer>
    <Component store={store} />
  </AppContainer>,
  rootEl,
);

render(Root);
if (module.hot) module.hot.accept('./containers/Root', () => render(Root));
