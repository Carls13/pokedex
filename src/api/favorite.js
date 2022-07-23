import AsyncStorage from "@react-native-async-storage/async-storage";
import { FAVORITE_STORAGE } from "../utils/constants";

export async function getFavorites() {
  try {
    const response = await AsyncStorage.getItem(FAVORITE_STORAGE);
    return JSON.parse(response || '[]')
  } catch (error) {
    throw error;
  }
};


export async function addPokemonToFavorites(id) {
  try {
    const favorites = await getFavorites();

    favorites.push(id);
    await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites));
  } catch (error) {
    throw error;
  }
};

export async function isFavorite(id) {
  try {
    const favorites = await getFavorites();

    return favorites.includes(id);
  } catch (error) {
    throw error;
  }
}

export async function removePokemonFromFavorites(id) {
  try {
    const favorites = await getFavorites();

    const newFavorites = favorites.filter((fav) => {
      return fav !== id;
    });

    await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(newFavorites));
  } catch (error) {
    throw error;
  }
}
