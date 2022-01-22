import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { getPokemonDetails, getPokemonsList } from "../api/pokemon";

const PokedexScreen = () => {
  const [pokemonsList, setPokemonsList] = useState([]);

  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
    try {
      const response = await getPokemonsList();

      const pokemonsArray = [];

      for await (const pokemon of response.results) {
        const pokemonDetails = await getPokemonDetails(pokemon.url);
       
        pokemonsArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          image: pokemonDetails.sprites.other['official-artwork'].front_default
        })
      }

      setPokemonsList([...pokemonsList, pokemonsArray]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView>
      <Text>Pokedex</Text>
    </SafeAreaView>
  );
}

export default PokedexScreen;