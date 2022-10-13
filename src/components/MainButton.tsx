import React from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Colors, PokemonTypeColors } from '../theme/colors';

type MainButtonProps = {
  variant?: string;
  label: string;
  buttonRight?: JSX.Element;
  onPress?: Function;
  style?: StyleProp<ViewStyle>;
};

const MainButton = ({
  label,
  buttonRight,
  onPress = () => {},
  variant = 'pokemonRed',
  style,
}: MainButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        style,
        styles.btn,
        { backgroundColor: PokemonTypeColors[variant] },
      ]}
      onPress={() => {
        onPress();
      }}>
      <Text style={styles.label}>{label}</Text>
      {buttonRight || <></>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
    width: '100%',
    borderRadius: 9999,
    shadowColor: Colors.black,
    shadowOffset: {
      height: -2,
      width: 0,
    },
    shadowRadius: 3,
    shadowOpacity: 1,
    elevation: 4,
  },
  label: {
    fontWeight: '500',
    fontSize: 16,
    color: Colors.white,
  },
});

export default MainButton;
