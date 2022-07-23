import React, { useState, useEffect, useContext, useCallback } from "react";
import { Text } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { getFavorites } from "../api/favorite";
import { getPokemonDetailsById } from "../api/pokemon";
import { AuthContext } from "../contexts/AuthContext";
import PokemonList from "../components/PokemonList";
import { useFocusEffect } from "@react-navigation/native";
import NoLogged from "../components/NoLogged";

const FavoritesScreen = () => {
  const [pokemons, setPokemons] = useState([]);
  const { auth: user } = useContext(AuthContext);

  useFocusEffect(
    useCallback(() => {
      if (user) {
        (async () => {
          const response = await getFavorites();
  
          const pokemonsArray = [];
  
          for await (const pokemonId of response) {
            const pokemonDetails = await getPokemonDetailsById(pokemonId);
           
            pokemonsArray.push({
              id: pokemonDetails.id,
              name: pokemonDetails.name,
              type: pokemonDetails.types[0].type.name,
              order: pokemonDetails.order,
              image: pokemonDetails.sprites.other['official-artwork'].front_default
            })
          }
    
          setPokemons(pokemonsArray);
      })()
      }
    }, [user])
  );

  useEffect(() => {
    console.log({ pokemons })
  }, [pokemons]);
    

  return (
    <SafeAreaView>
      {user ? <PokemonList  pokemons={pokemons}/>:<NoLogged />}
    </SafeAreaView>
  );
}

export default FavoritesScreen;