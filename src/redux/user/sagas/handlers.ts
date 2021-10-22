import {put, takeLatest, call, take} from 'redux-saga/effects';
import {eventChannel} from 'redux-saga';
import {
  getUserRequest,
  getUserSuccess,
  getUserNotFound,
  getUserFailure,
} from '@root/redux/user/slice';
import {firebase} from '@root/firebase/config';
import {User} from '@root/redux/user/types';

function createFirebaseAuthChannel() {
  return eventChannel((emit) => {
    const unsubscribe = firebase
      .auth()
      .onAuthStateChanged((user) => emit({user}));
    return unsubscribe;
  });
}

export function* handleUserWithChannel() {
  const firebaseChannel = yield call(createFirebaseAuthChannel);

  while (true) {
    try {
      const {user} = yield take(firebaseChannel);
      const userData = user as User;
      if (user) yield put(getUserSuccess(userData));
      else yield put(getUserNotFound());
    } catch (e) {
      yield put(getUserFailure(e.toString()));
    }
  }
}

export default function* saga() {
  yield takeLatest(getUserRequest.type, handleUserWithChannel);
}
