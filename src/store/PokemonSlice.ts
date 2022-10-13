import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Pokemon, PokemonSummary } from '../types/pokemon';
import { RootState } from '.';
import { PokemonTypeColors } from '../theme/colors';

type PokemonState = {
  pokemonList: PokemonSummary[];
  isLoadingPokemonOfTheDay: boolean;
  pokemonOfTheDay: Pokemon | undefined;
  today: number;
};

const initialState: PokemonState = {
  pokemonList: [],
  isLoadingPokemonOfTheDay: false,
  pokemonOfTheDay: undefined,
  today: new Date().setHours(0, 0, 0, 0),
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setPokemonList: (state, action: PayloadAction<PokemonSummary[]>) => {
      state.pokemonList = action.payload;
    },
    setPokemonOfTheDay: (state, action: PayloadAction<Pokemon>) => {
      state.pokemonOfTheDay = action.payload;
    },
    setIsLoadingPokemonOfTheDay: (state, action: PayloadAction<boolean>) => {
      state.isLoadingPokemonOfTheDay = action.payload;
    },
  },
});

export const selectPokemonOfTheDay = (state: RootState) => ({
  pokemonOfTheDay: state.pokemon.pokemonOfTheDay,
  isLoadingPokemonOfTheDay: state.pokemon.isLoadingPokemonOfTheDay,
});
export const selectColorOfTheDay = (state: RootState) =>
  state.pokemon.pokemonOfTheDay
    ? PokemonTypeColors[state.pokemon.pokemonOfTheDay.types[0]?.type.name]
    : PokemonTypeColors.pokemonRed;
export const {
  setPokemonList,
  setPokemonOfTheDay,
  setIsLoadingPokemonOfTheDay,
} = pokemonSlice.actions;
export default pokemonSlice.reducer;
