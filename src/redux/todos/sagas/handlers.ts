import {call, put} from 'redux-saga/effects';
import {PayloadAction} from '@reduxjs/toolkit';
import {getTodoSuccess, getTodoFailure} from '@root/redux/todos/slice';
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
