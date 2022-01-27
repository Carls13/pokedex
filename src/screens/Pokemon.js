import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

import { SafeAreaView } from 'react-native-safe-area-context';
import { getPokemonDetailsById } from "../api/pokemon";
import Header from "../components/Pokemon/Header";
import Stats from "../components/Pokemon/Stats";
import Types from "../components/Pokemon/Types";

const PokemonScreen = ({ navigation, route }) => {
  const { params } = route;
  const { id } = params;
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => null,
      headerLeft: () => <Icon 
                          name="arrow-left" 
                          color="white" 
                          size={20} 
                          style={{ marginLeft: 10 }} 
                          onPress={() => navigation.goBack()}
                          />
    })
  }, [navigation, params]);

  useEffect(() => {
    (async () => {
      await getPokemon();
    })();
  }, []);

  const getPokemon = async () => {
    try {
      const response = await getPokemonDetailsById(id);

      setPokemon(response);
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
        <Types types={pokemon?.types} />
        <Stats stats={pokemon?.stats} />
      </ScrollView>
    </SafeAreaView>
  );
}

export default PokemonScreen;