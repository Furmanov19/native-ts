import {PayloadAction} from '@reduxjs/toolkit';
import {User, UserState} from '@root/redux/user/types';

function getUserRequest(state: UserState) {
  state.loading = true;
}
function getUserSuccess(state: UserState, action: PayloadAction<User>) {
  return {...state, loading: false, list: action.payload};
}
function getUserNotFound(state: UserState) {
  return {...state, loading: false};
}
function getUserFailure(state: UserState, action: PayloadAction<any>) {
  return {...state, loading: false, error: action.payload.toString()};
}

export default {
  getUserRequest,
  getUserSuccess,
  getUserNotFound,
  getUserFailure,
};
