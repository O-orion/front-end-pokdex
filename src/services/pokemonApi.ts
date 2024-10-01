import axios from "axios";

const API_URL = "https://pokeapi.co/api/v2/pokemon";

export const fetchPokemons = async (offset: number, limit: number) => {
  try {
    const response = await axios.get(
      `${API_URL}?offset=${offset}&limit=${limit}`
    );
    return response.data;
  } catch (erro) {
    console.log("Error: ", erro);
    throw erro;
  }
};

export const fetchPokemonsDetails = async (id: number) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.log("Error: ", error);
    throw error;
  }
};
