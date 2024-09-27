import { defineStore } from 'pinia';
import axios from 'axios';
import { Pokemon, PokemonListType } from '../types/PokemonList.type';
import { PokemonDetailsType } from '../types/PokemonDetails.type';

export const usePokemonStore = defineStore('pokemonStore', {
  state: () => ({
    pokemons: [] as PokemonDetailsType[],
    isLoading: false,
  }),
  actions: {
    async loadPokemons(offset = 0, limit = 20) {
      this.isLoading = true;
      try {
        // Primeira chamada para obter os nomes e URLs dos Pokémon
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
        const pokemonResults = response.data.results;

        // Carrega detalhes de cada Pokémon individualmente a partir da URL
        const pokemonDetails = await Promise.all(
          pokemonResults.map((pokemon: Pokemon) => axios.get(pokemon.url))
        );

        // Salva os detalhes de cada Pokémon no state
        this.pokemons = pokemonDetails.map((detail) => detail.data as PokemonDetailsType);


      } catch (error) {
        console.error('Erro ao carregar Pokémon:', error);
      } finally {
        this.isLoading = false;
      }
    },
  },
});
