import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import FavoritesScreen from "../screens/Favorites";

const Stack = createStackNavigator();

const FavoritesNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Favorite" component={FavoritesScreen} options={{
        title: "Favorites"
      }} />
    </Stack.Navigator>
  );
};

export default FavoritesNavigation;