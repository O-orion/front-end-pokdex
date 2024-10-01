import axios from "axios";

const API_URL = "https://pokeapi.co/api/v2/pokemon";


/**
 * Busca uma lista de pokémons.
 * @param offset O deslocamento para a busca (página).
 * @param limit O número de pokémons a retornar.
 * @returns Um objeto contendo a lista de pokémons e metadados.
 * @throws Erro se a requisição falhar.
 */
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

/**
 * Busca os detalhes de um pokémon pelo ID.
 * @param id O ID do pokémon a ser buscado.
 * @returns Os detalhes do pokémon.
 * @throws Erro se a requisição falhar.
 */
export const fetchPokemonsDetails = async (id: number) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.log("Error: ", error);
    throw error;
  }
};
