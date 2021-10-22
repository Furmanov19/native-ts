import {call, put, takeLatest} from 'redux-saga/effects';
import {PayloadAction} from '@reduxjs/toolkit';
import {
  getTodoRequest,
  getTodoSuccess,
  getTodoFailure,
} from '@root/redux/todos/slice';
import {requestGetTodos} from './requests';

export function* handleGetTodos(action: PayloadAction) {
  try {
    const response = yield call(requestGetTodos);
    const {data} = response;
    yield put(getTodoSuccess(data));
  } catch (error) {
    yield put(getTodoFailure(error));
  }
}

export default function* saga() {
  yield takeLatest(getTodoRequest.type, handleGetTodos);
}
