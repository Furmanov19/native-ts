import {combineReducers} from '@reduxjs/toolkit';
import todosReducer from '@root/redux/todos/slice';

const rootReducer = combineReducers({todos: todosReducer});

export default rootReducer;
