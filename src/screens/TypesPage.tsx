import React, { useEffect } from 'react';
import { StyleSheet, StatusBar, FlatList, View, Text } from 'react-native';
import SearchBar from '../components/SearchBar';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import TypesService from '../services/TypesServices';
import {
  selectIsLoadingTypes,
  selectSearch,
  selectTypesList,
  setSearch,
} from '../store/TypesSlice';
import { PokemonTypeColors } from '../theme/colors';
import PokemonTypeCard from '../components/pokemon/PokemonTypeCard';

const typesServices = new TypesService();

const TypesPage = () => {
  const dispatch = useAppDispatch();
  const search = useAppSelector(selectSearch);
  const typesList = useAppSelector(selectTypesList);
  const isLoadingTypes = useAppSelector(selectIsLoadingTypes);

  useEffect(() => {
    dispatch(typesServices.fetchTypesList());
  }, []);

  return (
    <View style={styles.main}>
      <StatusBar backgroundColor={PokemonTypeColors.pokemonRed} />
      <SearchBar
        value={search}
        onChangeText={(text: string) => {
          dispatch(setSearch(text));
        }}
      />
      {isLoadingTypes ? (
        <View>
          <Text>Loading</Text>
        </View>
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          style={styles.typesList}
          numColumns={2}
          data={typesList}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => <PokemonTypeCard type={item.name} />}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  typesList: {
    paddingBottom: 20,
  },
  main: {
    display: 'flex',
    width: '100%',
    height: '100%',
  },
});

export default TypesPage;
