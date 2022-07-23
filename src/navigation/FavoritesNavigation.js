import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import FavoritesScreen from "../screens/Favorites";
import PokemonScreen from "../screens/Pokemon";

const Stack = createStackNavigator();

const FavoritesNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Favorite" component={FavoritesScreen} options={{
        title: "Favorites"
      }} />
      <Stack.Screen name="Pokemon" component={PokemonScreen} options={{
        title: "Pokemon",
        headerTransparent: true
      }} />
    </Stack.Navigator>
  );
};

export default FavoritesNavigation;