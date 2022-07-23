import React, { useState, useEffect } from "react";

import Icon from "react-native-vector-icons/FontAwesome5";
import { addPokemonToFavorites, isFavorite, removePokemonFromFavorites } from "../../api/favorite";

const Favorite = ({ id }) => {
  const [isPokemonFavorite, setIsFavorite] = useState(false);
  const [reloadCheck, setReloadCheck] = useState(false);

  useEffect(async () => {
    setIsFavorite(await isFavorite(id));
  }, [id, reloadCheck]);

  const onReloadCheckFavorite = () => {
    setReloadCheck((prev) => !prev);
  }

  const addFavorite = async () => {
    await addPokemonToFavorites(id);
    onReloadCheckFavorite();
  }

  const removeFavorite = async () => {
    await removePokemonFromFavorites(id);
    onReloadCheckFavorite();
  }

  return (
    <Icon name="heart" solid={isPokemonFavorite} color="#fff" size={20} onPress={isPokemonFavorite ? removeFavorite : addFavorite} style={{ marginRight: 20 }}  />
  )
}

export default Favorite;