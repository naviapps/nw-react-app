import React from 'react';
import App from './containers/App'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="foo" component={Foo}/>
    <Route path="bar" component={Bar}/>
  </Route>
);
