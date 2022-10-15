import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Colors } from '../../theme/colors';

type PokemonBasicProps = {
  pokemonName: string;
  pokemonUri: string;
  showBackgroundShadow?: boolean;
  onPress?: Function;
  onImageLoadError?: Function;
};

const PokemonBasicInfo = ({
  pokemonName,
  pokemonUri,
  showBackgroundShadow = true,
  onPress = () => {},
  onImageLoadError = () => {},
}: PokemonBasicProps) => {
  return (
    <View style={styles.pokemonMain}>
      <TouchableOpacity
        style={{
          ...styles.pokemonImage,
          ...(showBackgroundShadow ? styles.pokemonImageBackground : {}),
        }}
        onPress={() => {
          onPress();
        }}>
        <Image
          source={{ uri: pokemonUri, width: 192, height: 192 }}
          onError={() => {
            onImageLoadError();
          }}
        />
      </TouchableOpacity>
      <Text style={styles.pokemonName}>{pokemonName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  pokemonMain: {
    display: 'flex',
    alignItems: 'center',
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
    overflow: 'visible',
  },
  pokemonImageBackground: {
    borderRadius: 9999,
    backgroundColor: 'rgba(100,100,100,0.2)',
  },
});

export default PokemonBasicInfo;
