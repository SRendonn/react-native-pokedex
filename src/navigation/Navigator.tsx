import React from 'react';
import { StyleSheet } from 'react-native';
import {
  DiscoverPage,
  LocationsPage,
  TypeDetailPage,
  TypesPage,
} from '../screens/stack';
import { PokemonDetailPage, EvolutionDetailPage } from '../screens/bottom';
import { Colors, PokemonTypeColors } from '../theme/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import type {
  RootBottomTabsParamList,
  RootStackParamList,
} from '../types/navigation';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useAppSelector } from '../hooks/redux';
import { selectColorOfTheDay } from '../store/DiscoverSlice';
import { selectCurrentTypeName, selectTypeColor } from '../store/TypesSlice';

const Stack = createStackNavigator<RootStackParamList>();
const BottomTab = createBottomTabNavigator<RootBottomTabsParamList>();

const Navigator = () => {
  const colorOfTheDay = useAppSelector(selectColorOfTheDay);
  const currentTypeName = useAppSelector(selectCurrentTypeName);
  const typeColor = useAppSelector(selectTypeColor);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Discover"
        screenOptions={{
          headerTintColor: Colors.white,
          headerStyle: {
            backgroundColor: PokemonTypeColors.pokemonRed,
            shadowColor: PokemonTypeColors.pokemonRed,
          },
        }}>
        <Stack.Screen
          name="Discover"
          component={DiscoverPage}
          options={{
            title: 'Discover',
            headerTintColor: Colors.white,
            headerStyle: {
              backgroundColor: colorOfTheDay,
              shadowColor: colorOfTheDay,
            },
            headerLeft: () => (
              <Icon
                name="pokeball"
                color={Colors.white}
                size={28}
                style={styles.headerLeftIcon}
              />
            ),
          }}
        />
        <Stack.Screen
          name="Types"
          component={TypesPage}
          options={{
            title: 'Types',
          }}
        />
        <Stack.Screen
          name="Locations"
          component={LocationsPage}
          options={{
            title: 'Locations',
          }}
        />
        <Stack.Screen
          name="TypeDetail"
          component={TypeDetailPage}
          options={{
            title: `${
              currentTypeName.charAt(0).toUpperCase() + currentTypeName.slice(1)
            } Pokémon`,
            headerStyle: {
              backgroundColor: typeColor,
              shadowColor: typeColor,
            },
          }}
        />
        <Stack.Screen
          name="Pokemon"
          component={PokemonNavigator}
          options={{ title: 'Pokémon' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const PokemonNavigator = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: PokemonTypeColors.pokemonRed,
        tabBarStyle: {
          borderTopLeftRadius: 90,
          borderTopRightRadius: 90,
        },
      }}>
      <BottomTab.Group>
        <BottomTab.Screen
          name="PokemonDetail"
          component={PokemonDetailPage}
          options={{
            title: 'Pokémon',
            tabBarIcon: ({ color, size }) => (
              <Icon name="pokeball" color={color} size={size} />
            ),
          }}
        />
        <BottomTab.Screen
          name="EvolutionDetail"
          component={EvolutionDetailPage}
          options={{
            title: 'Evolutions',
            tabBarIcon: ({ color, size }) => (
              <Icon name="pokeball" color={color} size={size} />
            ),
          }}
        />
      </BottomTab.Group>
    </BottomTab.Navigator>
  );
};

const styles = StyleSheet.create({
  headerLeftIcon: { marginLeft: 8 },
});

export default Navigator;
