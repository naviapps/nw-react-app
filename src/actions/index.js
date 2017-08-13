import { INCREMENT_COUNTER, DECREMENT_COUNTER, INCREMENT_ASYNC_COUNTER } from '../constants/ActionTypes';

export function increment() {
  return {
    type: INCREMENT_COUNTER,
  };
}

export function decrement() {
  return {
    type: DECREMENT_COUNTER,
  };
}

export function incrementAsync() {
  return {
    type: INCREMENT_ASYNC_COUNTER,
  };
}
