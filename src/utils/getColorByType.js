import { POKEMON_TYPE_COLORS } from "./constants";

export const getColorByType = (type) => POKEMON_TYPE_COLORS[type.toLowerCase()];