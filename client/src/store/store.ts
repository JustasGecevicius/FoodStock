import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userReducer from '../pages/signIn/slice';
import { apiSlice } from '../pages/ingredients/api';

export const store = configureStore({
  reducer: {
    user: userReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
