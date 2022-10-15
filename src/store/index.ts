import { configureStore } from '@reduxjs/toolkit';
import discoverReducer from './DiscoverSlice';
import typesReducer from './TypesSlice';
import pokemonReducer from './PokemonSlice';

export const store = configureStore({
  reducer: {
    discover: discoverReducer,
    types: typesReducer,
    pokemon: pokemonReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
