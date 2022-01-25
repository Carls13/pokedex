import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { getPokemonDetailsById } from "../api/pokemon";
import Header from "../components/Pokemon/Header";

const PokemonScreen = ({ navigation, route: { params: { id } } }) => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    (async () => {
      await getPokemon();
    })();
  }, []);

  const getPokemon = async () => {
    try {
      const response = await getPokemonDetailsById(id);

      setPokemon(response);
      console.log({ response })
      
    } catch (error) {
      navigation.goBack();
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <Header name={pokemon?.name} 
          order={pokemon?.order} 
          image={pokemon?.sprites.other['official-artwork'].front_default} 
          type={pokemon?.types[0].type.name || ""}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default PokemonScreen;