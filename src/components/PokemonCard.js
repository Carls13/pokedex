import React from "react";
import { View, Text, Image, StyleSheet, TouchableWithoutFeedback} from "react-native";
import { getColorByType } from "../utils/getColorByType";
import { useNavigation } from "@react-navigation/native";

const PokemonCard = ({ pokemon }) => {
  const navigation = useNavigation();
  const typeColor = getColorByType(pokemon.type);
  const bgStyles = {
    backgroundColor: typeColor,
    ...styles.bgStyles
  }

  const handlePokemonDetail = () => {
    navigation.navigate("Pokemon", { id: pokemon.id });
  }

  return (
    <TouchableWithoutFeedback onPress={handlePokemonDetail}>
      <View style={styles.card}>
        <View style={styles.spacing}> 
          <View style={bgStyles}>
            <Text style={styles.order}>#{`${pokemon.order}`.padStart(3, 0)}</Text>
            <Text style={styles.name}>{pokemon.name}</Text>
            <Image style={styles.sprite} source={{ uri: pokemon.image}} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130
  },
  spacing: {
    flex: 1, 
    padding: 5
  },
  bgStyles: {
    flex: 1,
    borderRadius: 15,
    padding: 10
  },
  name: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 10,
    textTransform: "capitalize"
  },
  order: {
    position: "absolute",
    right: 10,
    top: 10,
    color: "white",
    fontSize: 11
  },
  sprite: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 90,
    height: 90
  }
});

export default PokemonCard;