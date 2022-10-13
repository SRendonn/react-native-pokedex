import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from './PokemonSlice';
import typesReducer from './TypesSlice';

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
    types: typesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
