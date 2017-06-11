// @flow
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../constants/ActionTypes';

type actionType = {
  type: string
};

export default function counter(state: number = 0, action: actionType) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + 1;
    case DECREMENT_COUNTER:
      return state - 1;
    default:
      return state;
  }
}
