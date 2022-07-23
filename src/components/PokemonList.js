import React from "react";
import { FlatList, StyleSheet, ActivityIndicator, Platform } from "react-native";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemons, loadPokemons, isNext }) => {
  const loadMore = () => {
    if (isNext) loadPokemons();
  }

  return (
    <FlatList 
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.order)}
      renderItem={({ item }) => <PokemonCard pokemon={item}/>}
      contentContainerStyle={styles.flatListContentContainer}
      onEndReached={loadMore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        isNext && <ActivityIndicator size="large" color={"red"}  style={styles.spinner} />
      }
    />
  );
};

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
    marginTop: Platform.OS === "ios" ? 30 : 0,
  },
  spinner: {
    marginTop: 20,
    marginBottom: Platform.OS === "android" ? 90 : 60,
  }
});

export default PokemonList;