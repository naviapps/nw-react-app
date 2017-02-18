import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CounterActions from '../actions';

import { BrowserRouter, Route } from 'react-router-dom';
const Home = () => (<div>Home!asa</div>);
const About = () => (<div>Home!aaaaaaaa</div>);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="App-header">
            <h2>Welcome to Reaaaaac2</h2>
          </div>
          <p className="App-intro">
            To get started, ediad2 <code>src/Adpp.js</code> and save to reload.
          </p>
          {this.props.children}
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
