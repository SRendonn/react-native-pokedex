import React from 'react';
import { StyleSheet } from 'react-native';
import { DiscoverPage, LocationsPage, TypesPage } from '../screens';
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
import { selectColorOfTheDay } from '../store/PokemonSlice';

const Stack = createStackNavigator<RootStackParamList>();
const BottomTab = createBottomTabNavigator<RootBottomTabsParamList>();

const Navigator = () => {
  const colorOfTheDay = useAppSelector(selectColorOfTheDay);

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  headerLeftIcon: { marginLeft: 8 },
});

export default Navigator;
