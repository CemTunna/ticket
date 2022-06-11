import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/rootSaga';
const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
