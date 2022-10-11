import React, { useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import PokemonCard from '../components/PokemonBasicCard';
import { api } from '../config/axios';
import { selectPokemon, setPokemon } from '../store/PokemonSlice';

const HomePage = () => {
  const dispatch = useAppDispatch();
  const pokemon = useAppSelector(selectPokemon);

  const fetchPokemon = async () => {
    try {
      const data = (await api.get('pokemon')).data;
      dispatch(setPokemon(data.results));
    } catch (error) {
      dispatch(setPokemon([]));
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <View>
      <FlatList
        data={pokemon}
        keyExtractor={(item, index) => item.name}
        renderItem={({ item }) => <PokemonCard pokemon={item} />}
      />
    </View>
  );
};

export default HomePage;
