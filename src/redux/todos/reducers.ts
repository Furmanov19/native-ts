import {PayloadAction} from '@reduxjs/toolkit';
import {TodoId, Todo, TodosState} from '@root/redux/todos/types';

function addTodo(state: TodosState, action: PayloadAction<Todo>) {
  state.list.push(action.payload);
}

function toggleTodo(state: TodosState, action: PayloadAction<TodoId>) {
  const index = state.list.findIndex(({id}) => id === action.payload);

  if (index) {
    state.list[index].completed = !state.list[index].completed;
  }
}

function getTodoRequest(state: TodosState) {
  state.loading = true;
}
function getTodoSuccess(state: TodosState, action: PayloadAction<Todo[]>) {
  return {...state, loading: false, list: action.payload};
}
function getTodoFailure(state: TodosState, action: PayloadAction<any>) {
  return {...state, loading: false, error: action.payload.toString()};
}

export default {
  addTodo,
  toggleTodo,
  getTodoRequest,
  getTodoSuccess,
  getTodoFailure,
};
