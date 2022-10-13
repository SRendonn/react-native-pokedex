import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { Colors } from '../../theme/colors';
import type { Pokemon } from '../../types/pokemon';
import PokemonTypeChip from './PokemonTypeChip';

type PokemonOfTheDayProps = {
  pokemon: Pokemon;
};

const PokemonOfTheDay = ({ pokemon }: PokemonOfTheDayProps) => {
  const pokemonUri =
    pokemon.sprites.other.home.front_default || pokemon.sprites.front_default;

  return (
    <View style={styles.container}>
      <Text style={styles.pokemonName}>{pokemon.name}</Text>
      <View style={styles.pokemonImage}>
        <Image source={{ uri: pokemonUri, width: 192, height: 192 }} />
      </View>
      <View style={styles.typesChips}>
        {pokemon.types.map((type) => (
          <PokemonTypeChip key={type.type.name} type={type.type.name} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    marginVertical: 16,
    marginHorizontal: 4,
  },
  pokemonName: {
    marginBottom: 8,
    color: Colors.white,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 26,
  },
  pokemonImage: {
    display: 'flex',
    alignItems: 'center',
    width: 192,
    height: 192,
    borderRadius: 9999,
    backgroundColor: 'rgba(100,100,100,0.2)',
    overflow: 'visible',
  },
  bgPokeball: {
    position: 'absolute',
    top: 0,
    opacity: 0.5,
    transform: [{ rotate: '-45deg' }],
  },
  typesChips: {
    marginTop: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default PokemonOfTheDay;
