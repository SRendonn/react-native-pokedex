import { configureStore } from '@reduxjs/toolkit';
import discoverReducer from './DiscoverSlice';
import typesReducer from './TypesSlice';

export const store = configureStore({
  reducer: {
    discover: discoverReducer,
    types: typesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
