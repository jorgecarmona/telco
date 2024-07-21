import {configureStore} from '@reduxjs/toolkit';

import { loansApi } from './api-slice/loans-api';

export const store = configureStore({
  reducer: {
    [loansApi.reducerPath]: loansApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loansApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;