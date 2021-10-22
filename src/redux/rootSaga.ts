import {takeLatest, spawn} from 'redux-saga/effects';
import {handleGetTodos} from '@root/redux/todos/sagas/handlers';
import {getTodoRequest} from '@root/redux/todos/slice';
import userSaga from '@root/redux/user/sagas/handlers';
import todosSaga from '@root/redux/todos/sagas/handlers';

export default function* () {
  yield spawn(userSaga);
  yield spawn(todosSaga);
}
