import { api } from '../config/axios';
import type { AppDispatch } from '../store';
import {
  setIsLoadingPokemonOfTheDay,
  setPokemonList,
  setPokemonOfTheDay,
} from '../store/PokemonSlice';
import { Pokemon, PokemonSummary } from '../types/pokemon';

export default class PokemonService {
  readonly TOTAL_POKEMONS = 1154;

  fetchPokemonOfTheDay() {
    return async (dispatch: AppDispatch) => {
      try {
        dispatch(setIsLoadingPokemonOfTheDay(true));
        const randomPokemonId = Math.ceil(Math.random() * this.TOTAL_POKEMONS);
        const response = await api.get(`pokemon/${randomPokemonId}`);
        const pokemon: Pokemon = response.data;
        dispatch(setPokemonOfTheDay(pokemon));
      } catch (error) {
      } finally {
        dispatch(setIsLoadingPokemonOfTheDay(false));
      }
    };
  }

  fetchPokemonList() {
    return async (dispatch: AppDispatch) => {
      try {
        const response = await api.get('pokemon');
        const pokemonList: PokemonSummary[] = response.data.results;
        dispatch(setPokemonList(pokemonList));
      } catch (error) {
        dispatch(setPokemonList([]));
      }
    };
  }
}
