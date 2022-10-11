import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { PokemonBasic } from '../types/pokemon';
import { RootState } from '.';

type PokemonState = {
  pokemons: PokemonBasic[];
};

const initialState: PokemonState = {
  pokemons: [],
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setPokemon: (state, action: PayloadAction<PokemonBasic[]>) => {
      state.pokemons = action.payload;
    },
  },
});

export const { setPokemon } = pokemonSlice.actions;
export const selectPokemon = (state: RootState) => state.pokemon.pokemons;
export default pokemonSlice.reducer;
