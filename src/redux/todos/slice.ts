import {createSlice} from '@reduxjs/toolkit';
import {TodosState} from '@root/redux/todos/types';
import reducers from '@root/redux/todos/reducers';

const name = 'TODOS';
const initialState: TodosState = {list: [], loading: false, error: ''};

export const slice = createSlice({
  name,
  initialState,
  reducers,
});

export const {
  addTodo,
  toggleTodo,
  getTodoRequest,
  getTodoSuccess,
  getTodoFailure,
} = slice.actions;

export default slice.reducer;
