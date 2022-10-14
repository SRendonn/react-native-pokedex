import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const PokemonDetailPage = () => {
  return (
    <View style={styles.main}>
      <Text>Pokemon Detail here</Text>
    </View>
  );
};

export default PokemonDetailPage;

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    width: '100%',
    height: '100%',
  },
});
