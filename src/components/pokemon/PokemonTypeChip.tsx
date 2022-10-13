import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Colors, PokemonTypeColors } from '../../theme/colors';

type PokemonTypeChipProps = {
  type: string;
  onPress?: Function;
};

const PokemonTypeChip = ({
  type,
  onPress = () => {},
}: PokemonTypeChipProps) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.chip,
        backgroundColor: PokemonTypeColors[type] || PokemonTypeColors.normal,
      }}
      onPress={() => {
        onPress();
      }}>
      <Text style={styles.type}>{type}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  chip: {
    minWidth: 75,
    borderColor: Colors.white,
    borderWidth: 2,
    padding: 4,
    borderRadius: 9999,
    marginHorizontal: 4,
  },
  type: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.white,
    textTransform: 'uppercase',
    fontSize: 12,
  },
});

export default PokemonTypeChip;
