export function getPokemonIdFromUrl(url: string) {
  const urlSplit = url.split('/');
  return Number.parseInt(urlSplit[urlSplit.length - 2], 10);
}

export function getImageUrlFromId(id: number) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
}
