import {combineReducers} from '@reduxjs/toolkit';
import todosReducer from '@root/redux/todos/slice';
import userReducer from '@root/redux/user/slice';

const rootReducer = combineReducers({todos: todosReducer, user: userReducer});

export default rootReducer;
