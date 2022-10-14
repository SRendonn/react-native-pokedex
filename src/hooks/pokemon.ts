export function usePokemonIdFromUrl(url: string) {
  const urlSplit = url.split('/');
  return Number.parseInt(urlSplit[urlSplit.length - 2], 10);
}

export function usePokemonImage(id: number) {
  return [
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
  ];
}
