import React from 'react';
import { View, Text } from 'react-native';
import type { PokemonBasic } from '../types/pokemon';

type PokemonCardProps = { pokemon: PokemonBasic };

const PokemonBasicCard = ({ pokemon }: PokemonCardProps) => {
  return (
    <View>
      <Text>{pokemon.name}</Text>
    </View>
  );
};

export default PokemonBasicCard;
