import type { Pokemon } from '../types/pokemon';
import { getPokemonImageSet } from '../util/pokemon';

export function usePokemonIdFromUrl(url: string) {
  const urlSplit = url.split('/');
  return Number.parseInt(urlSplit[urlSplit.length - 2], 10);
}

export function usePokemonImageSet(id: number) {
  return getPokemonImageSet(id);
}

export function usePokemonImageFromObject(pokemon: Pokemon | undefined) {
  if (pokemon) {
    return (
      pokemon.sprites?.other['official-artwork']?.front_default ||
      pokemon.sprites?.front_default
    );
  }

  return;
}
