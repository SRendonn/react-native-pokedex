import React, { useEffect } from 'react';
import { View, StyleSheet, Text, StatusBar } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import PokemonOfTheDay from '../../components/pokemon/PokemonOfTheDay';
import DiscoverService from '../../services/DiscoverService';
import {
  selectColorOfTheDay,
  selectPokemonOfTheDay,
} from '../../store/DiscoverSlice';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../../theme/colors';
import MainButton from '../../components/MainButton';
import { useNavigation } from '@react-navigation/native';
import type { RootStackParamList } from '../../types/navigation';
import type { StackNavigationProp } from '@react-navigation/stack';

const discoverService = new DiscoverService();

const DiscoverPage = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const dispatch = useAppDispatch();
  const colorOfTheDay = useAppSelector(selectColorOfTheDay);
  const { pokemonOfTheDay, isLoadingPokemonOfTheDay } = useAppSelector(
    selectPokemonOfTheDay,
  );

  const navigationButtons = [
    {
      label: 'Types',
      iconName: 'pokeball',
      variant: 'grass',
      onPress: () => navigation.navigate('Types'),
    },
    {
      label: 'Locations',
      iconName: 'pokemon-go',
      variant: 'fire',
      onPress: () => navigation.navigate('Locations'),
    },
  ];

  useEffect(() => {
    dispatch(discoverService.fetchPokemonOfTheDay());
  }, []);

  return (
    <View style={styles.main}>
      <StatusBar backgroundColor={colorOfTheDay} />
      <View
        style={{ ...styles.pokemonOfTheDay, backgroundColor: colorOfTheDay }}>
        <Icon
          name="pokeball"
          size={256}
          color={Colors.whiteSmoke}
          style={styles.bgPokeball}
        />
        {isLoadingPokemonOfTheDay ? (
          <Text>Loading</Text>
        ) : pokemonOfTheDay ? (
          <PokemonOfTheDay pokemon={pokemonOfTheDay} />
        ) : (
          <></>
        )}
      </View>
      <View style={styles.otherButtons}>
        {navigationButtons.map((button) => (
          <MainButton
            key={button.label}
            label={button.label}
            buttonRight={
              <Icon name={button.iconName} color={Colors.white} size={32} />
            }
            style={styles.navigationButton}
            variant={button.variant}
            onPress={button.onPress}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: Colors.darkGray,
  },
  pokemonOfTheDay: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    zIndex: 10,
    minHeight: 300,
    paddingBottom: 15,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
  },
  bgPokeball: {
    position: 'absolute',
    top: 26,
    opacity: 0.5,
  },
  otherButtons: {
    position: 'relative',
    zIndex: 20,
    padding: 20,
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navigationButton: {
    marginBottom: 12,
  },
});

export default DiscoverPage;
