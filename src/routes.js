import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';

const Home = () => <div>Home</div>;
const About = () => <div>About</div>;

export default () => (
  <App>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/index.html" component={Home} />
      <Route path="/about" component={About} />
    </Switch>
  </App>
);
