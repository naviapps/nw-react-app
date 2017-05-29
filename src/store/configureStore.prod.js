import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(history, initialState) {
  const middlewares = [
    sagaMiddleware,
    routerMiddleware(history),
  ];

  const enhancer = applyMiddleware(...middlewares);

  return createStore(rootReducer, initialState, enhancer);
}
