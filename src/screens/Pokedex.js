import React, { useEffect, useState } from "react";
import { SafeAreaView } from 'react-native-safe-area-context';
import { getPokemonDetails, getPokemonsList } from "../api/pokemon";
import PokemonList from "../components/PokemonList";

const PokedexScreen = () => {
  const [pokemonsList, setPokemonsList] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);

  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
    try {
      const response = await getPokemonsList(nextUrl);
      setNextUrl(response.next);

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

      setPokemonsList([...pokemonsList, ...pokemonsArray]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView>
      <PokemonList pokemons={pokemonsList} loadPokemons={loadPokemons} isNext={!!nextUrl} />
    </SafeAreaView>
  );
}

export default PokedexScreen;