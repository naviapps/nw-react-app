import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import * as CounterActions from '../actions';

import Counter from '../components/Counter';
const Home = () => (
  <div>
    Home
  </div>
);
const About = () => (<div>About!</div>);

class App extends Component {
  static propTypes = {
    increment: PropTypes.func,
    decrement: PropTypes.func,
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
          <Counter
            value={this.props.counter}
            onIncrement={this.props.increment}
            onDecrement={this.props.decrement}
          />
          <hr />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  counter: state.counter,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(CounterActions, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
