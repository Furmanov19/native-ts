import {takeLatest} from 'redux-saga/effects';
import {handleGetTodos} from '@root/redux/todos/sagas/handlers';
import {getTodoRequest} from '@root/redux/todos/slice';

export default function* rootWatcherSaga() {
  yield takeLatest(getTodoRequest.type, handleGetTodos);
}
