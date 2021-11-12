import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';

import { maponApi } from '../services/api';
import carSlicer from '../services/car';
import periodSlicer from '../services/period'


const store = configureStore({
  reducer: {
    period: periodSlicer,
    car: carSlicer,
    [maponApi.reducerPath]: maponApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(maponApi.middleware)
})

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;