import { API_HOST } from "../utils/constants";

export const getPokemonsList = async (next) => {
  try {
    const url = next ? next :`${API_HOST}pokemon?limit=20&offset=0`;

    const response = await fetch(url);
    const result = await response.json();

    return result;
  } catch (error) {
    throw error;
  }
};

export const getPokemonDetails = async (url) => {
  try {
    const response = await fetch(url);
    const result = response.json();

    return result;
  } catch (error) {
    throw error;
  }
};

export const getPokemonDetailsById = async (id) => {
  try {
    const url = `${API_HOST}pokemon/${id}`;
    const response = await fetch(url);
    const result = response.json();

    return result;
  } catch (error) {
    throw error;
  }
};