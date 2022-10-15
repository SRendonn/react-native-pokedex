import React, { useEffect } from 'react';
import { Text, View, StatusBar, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import TypesService from '../../services/TypesServices';
import {
  selectCurrentType,
  selectCurrentTypeName,
  selectCurrentTypeSearch,
  selectIsLoadingCurrentType,
  selectPaginationOptions,
  selectTypeColor,
  setCurrentTypeSearch,
  setPaginationOptions,
} from '../../store/TypesSlice';
import PokemonBasicCard from '../../components/pokemon/PokemonBasicCard';
import { useNavigation } from '@react-navigation/native';
import type { RootStackParamList } from '../../types/navigation';
import type { StackNavigationProp } from '@react-navigation/stack';
import SearchBar from '../../components/SearchBar';
import Pagination from '../../components/Pagination';
import { Colors } from '../../theme/colors';
import PokemonDamageRelation from '../../components/pokemon/PokemonDamageRelation';
import { setCurrentPokemonName } from '../../store/PokemonSlice';

const typesService = new TypesService();

const TypeDetailPage = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const dispatch = useAppDispatch();
  const isLoadingCurrentType = useAppSelector(selectIsLoadingCurrentType);
  const currentTypeSearch = useAppSelector(selectCurrentTypeSearch);
  const currentTypeName = useAppSelector(selectCurrentTypeName);
  const currentType = useAppSelector(selectCurrentType);
  const typeColor = useAppSelector(selectTypeColor);
  const { limit, offset } = useAppSelector(selectPaginationOptions);

  useEffect(() => {
    dispatch(typesService.fetchTypeByName(currentTypeName));
  }, [currentTypeName]);

  return (
    <View style={styles.main}>
      <StatusBar backgroundColor={typeColor} />
      {currentType ? (
        <View style={{ backgroundColor: typeColor }}>
          <PokemonDamageRelation
            damageRelation={currentType.damage_relations.double_damage_to}
            label="Strong against"
          />
          <PokemonDamageRelation
            damageRelation={currentType.damage_relations.double_damage_from}
            label="Weak against"
          />
        </View>
      ) : (
        <></>
      )}
      <SearchBar
        backgroundColor={typeColor}
        value={currentTypeSearch}
        onChangeText={(text: string) => {
          dispatch(setCurrentTypeSearch(text));
          dispatch(setPaginationOptions({ offset: 0 }));
        }}
      />
      {isLoadingCurrentType ? (
        <Text>Loading</Text>
      ) : currentType ? (
        <>
          <FlatList
            showsVerticalScrollIndicator={false}
            numColumns={2}
            data={currentType.pokemon.slice(
              limit * offset,
              limit + limit * offset,
            )}
            keyExtractor={(item) => item.pokemon.name}
            renderItem={({ item }) => (
              <PokemonBasicCard
                pokemonBasic={item.pokemon}
                typeColor={typeColor}
                onPress={() => {
                  dispatch(setCurrentPokemonName(item.pokemon.name));
                  navigation.navigate('Pokemon');
                }}
              />
            )}
          />
          <Pagination
            totalSize={currentType?.pokemon.length || 0}
            currentPage={offset}
            pageSize={limit}
            onFirstPagePress={() => {
              dispatch(setPaginationOptions({ offset: 0 }));
            }}
            onLastPagePress={() => {
              dispatch(
                setPaginationOptions({
                  offset: Math.floor(currentType.pokemon.length / limit),
                }),
              );
            }}
            onPrevPagePress={() => {
              dispatch(setPaginationOptions({ offset: offset - 1 }));
            }}
            onNextPagePress={() => {
              dispatch(setPaginationOptions({ offset: offset + 1 }));
            }}
          />
        </>
      ) : (
        <></>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: Colors.darkGray,
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  pokemonList: {
    paddingBottom: 20,
  },
});

export default TypeDetailPage;
