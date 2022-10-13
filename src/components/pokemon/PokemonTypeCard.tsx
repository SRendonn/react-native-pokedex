import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Colors, PokemonTypeColors } from '../../theme/colors';

type PokemonTypeCardProps = {
  type: string;
};

const PokemonTypeCard = ({ type }: PokemonTypeCardProps) => {
  return (
    <TouchableOpacity style={styles.cardWrapper}>
      <View
        style={{
          ...styles.typeCard,
          backgroundColor: PokemonTypeColors[type],
        }}>
        <Text style={styles.typeText}>{type}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardWrapper: {
    width: '50%',
    padding: 8,
  },
  typeCard: {
    borderRadius: 9999,
    minHeight: 50,
    padding: 16,
    shadowColor: Colors.black,
    shadowOffset: {
      height: -2,
      width: 0,
    },
    shadowRadius: 3,
    shadowOpacity: 1,
    elevation: 4,
  },
  typeText: {
    color: Colors.white,
    fontSize: 20,
    textTransform: 'capitalize',
    fontWeight: '500',
  },
});

export default PokemonTypeCard;
