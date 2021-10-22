import {configureStore} from '@reduxjs/toolkit';
import {applyMiddleware} from 'redux';
import devToolsEnhancer from 'remote-redux-devtools';
import createSagaMiddleware from 'redux-saga';
import {
  useSelector as useSelectorOriginal,
  useDispatch,
  TypedUseSelectorHook,
} from 'react-redux';
import rootReducer from '@root/redux/rootReducer';
import rootWatcherSaga from '@root/redux/rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({thunk: false}),
    sagaMiddleware,
  ],
  devTools: true,
});
sagaMiddleware.run(rootWatcherSaga);

export type RootState = ReturnType<typeof store.getState>;
export const useSelector: TypedUseSelectorHook<RootState> = useSelectorOriginal;
