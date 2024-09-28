import { defineStore } from 'pinia';
import axios from 'axios';
import { Pokemon } from '../types/PokemonList.type';
import { PokemonDetailsType } from '../types/PokemonDetails.type';

export const usePokemonStore = defineStore('pokemonStore', {
  state: () => ({
    pokemons: [] as PokemonDetailsType[],
    isLoading: false,
    count: 0, // Total de pokémons
    next: null as string | null, // URL da próxima página
    previous: null as string | null, // URL da página anterior
    currentPage: 1, // Página atual
    limit: 20, // Número de pokémons por página
  }),
  actions: {
    async loadPokemons(offset = 0, limit = 20) {
      this.isLoading = true;
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
        const pokemonResults = response.data.results;
        
        this.count = response.data.count; // Total de pokémons
        this.next = response.data.next; // Próxima URL
        this.previous = response.data.previous; // URL anterior
        
        const pokemonDetails = await Promise.all(
          pokemonResults.map((pokemon: Pokemon) => axios.get(pokemon.url))
        );
        
        this.pokemons = pokemonDetails.map((detail) => detail.data as PokemonDetailsType);
      } catch (error) {
        console.error('Erro ao carregar Pokémon:', error);
      } finally {
        this.isLoading = false;
      }
    },
    nextPage() {
      if (this.next) {
        const offset = this.currentPage * this.limit;
        this.currentPage++;
        this.loadPokemons(offset, this.limit);
      }
    },
    previousPage() {
      if (this.previous && this.currentPage > 1) {
        const offset = (this.currentPage - 2) * this.limit;
        this.currentPage--;
        this.loadPokemons(offset, this.limit);
      }
    },
    goToPage(pageNumber: number) {
      const offset = (pageNumber - 1) * this.limit;
      this.currentPage = pageNumber;
      this.loadPokemons(offset, this.limit);
    },

    async searchPokemon (name: string) {
      this.isLoading = true;
      
      if (name.trim() === "") {
        this.loadPokemons();
        return
      }

      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
        this.pokemons = [response.data as PokemonDetailsType]
      } catch (error) {
        console.error('error', error);

      }finally {
        this.isLoading = false;
      }
    },

    async fetchPokemonById(id: number) {
      this.isLoading = true;

      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        return response.data as PokemonDetailsType;

      } catch (error) {
        console.log(error);
      } finally {
        this.isLoading = false;
      }

    }
  },
});

