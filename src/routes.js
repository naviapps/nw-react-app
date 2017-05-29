import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from './containers/App';

const Home = () => <div>Home</div>;
const About = () => <div>About</div>;

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="index.html" component={Home} />
    <Route path="about" component={About} />
  </Route>
);
