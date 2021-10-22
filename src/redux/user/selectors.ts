import {RootState} from '@root/redux/store';

export const selectUser = (state: RootState) => state.user.user;
