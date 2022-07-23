import React from "react";

import Icon from "react-native-vector-icons/FontAwesome5";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import FavoritesNavigation from "./FavoritesNavigation";
import PokedexNavigation from "./PokedexNavigation";
import AccountNavigation from "./AccountNavigation";

const Tab = createBottomTabNavigator();

const renderPokeball = () => {
  return (
    <Image 
      source={require("../assets/pokeball.png")}
      style={{ width: 75, height: 75, top: -15 }}
      />
  );
};

const Navigation = () => {
  return (
    <Tab.Navigator initialRouteName="Pokedex">
      <Tab.Screen name="Favorite" options={{
        tabBarLabel: "Favorites",
        tabBarIcon: ({ color, size }) => (
          <Icon name="heart" color={color} size={size} />
        )
      }}
      component={FavoritesNavigation} />
      <Tab.Screen name="Pokedex" options={{
        tabBarLabel: "",
        tabBarIcon: renderPokeball
      }}
        component={PokedexNavigation} />
      <Tab.Screen name="Account" options={{
        tabBarLabel: "Account",
        tabBarIcon: ({ color, size }) => (
          <Icon name="user" color={color} size={size} />
        )
      }} component={AccountNavigation} />
      
    </Tab.Navigator>
  );
}


export default Navigation;