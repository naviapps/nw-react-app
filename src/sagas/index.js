import { put, call, takeEvery } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { INCREMENT_COUNTER, INCREMENT_ASYNC_COUNTER } from '../constants/ActionTypes';

export function* incrementAsync() {
  yield call(delay, 1000);
  yield put({ type: INCREMENT_COUNTER });
}

export default function* rootSaga() {
  yield takeEvery(INCREMENT_ASYNC_COUNTER, incrementAsync);
}
