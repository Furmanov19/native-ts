import {RootState} from '@root/redux/store';

export const selectTodos = (state: RootState) => state.todos.list;
