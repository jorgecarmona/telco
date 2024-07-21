import {configureStore} from '@reduxjs/toolkit';

import { postsApi } from './api-slice/posts-api';

export const store = configureStore({
  reducer: {
    // add API slice reducers
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;