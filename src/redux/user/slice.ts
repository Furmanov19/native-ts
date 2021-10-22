import {createSlice} from '@reduxjs/toolkit';
import {UserState} from '@root/redux/user/types';
import reducers from '@root/redux/user/reducers';

const name = 'USER';
const initialState: UserState = {user: null, loading: false, error: ''};

export const slice = createSlice({
  name,
  initialState,
  reducers,
});

export const {getUserRequest, getUserSuccess, getUserNotFound, getUserFailure} =
  slice.actions;

export default slice.reducer;
