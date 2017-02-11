import React, { Component, PropTypes } from 'react';

export default class Counter extends Component {
  static propTypes = {
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,
  };

  render() {
    //
  }
}
