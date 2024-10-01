import { defineStore } from "pinia";
import axios from "axios";
import { Pokemon } from "../types/PokemonList.type";
import { PokemonDetailsType } from "../types/PokemonDetails.type";

export const usePokemonStore = defineStore("pokemonStore", {
  state: () => ({
    pokemons: [] as PokemonDetailsType[],
    isLoading: false,
    count: 0, // Total de pokémons
    next: null as string | null, // URL da próxima página
    previous: null as string | null, // URL da página anterior
    currentPage: 1, // Página atual
    limit: 20, // Número de pokémons por página
    pokemonTypes: [] as string[], // Armazena os tipos de Pokémon
    selectedType: '', // Tipo de Pokémon selecionado para filtrar
  }),
  actions: {
    async loadPokemons(offset = 0, limit = 20) {
      this.isLoading = true;
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
        );
        const pokemonResults = response.data.results;

        this.count = response.data.count; // Total de pokémons
        this.next = response.data.next; // Próxima URL
        this.previous = response.data.previous; // URL anterior

        const pokemonDetails = await Promise.all(
          pokemonResults.map((pokemon: Pokemon) => axios.get(pokemon.url))
        );

        this.pokemons = pokemonDetails.map(
          (detail) => detail.data as PokemonDetailsType
        );
      } catch (error) {
        console.error("Erro ao carregar Pokémon:", error);
      
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

    async searchPokemon(name: string) {
      this.isLoading = true;

      if (name.trim() === "") {
        this.loadPokemons();
        return;
      }

      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
        );
        this.pokemons = [response.data as PokemonDetailsType];
      } catch (error) {
        console.error("Erro ao buscar Pokémon:", error);
        
      } finally {
        this.isLoading = false;
      }
    },

    async fetchPokemonById(id: number) {
      this.isLoading = true;

      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${id}`
        );
        return response.data as PokemonDetailsType;
      } catch (error) {
        console.error("Erro ao buscar Pokémon por ID:", error);
      } finally {
        this.isLoading = false;
      }
    },

    async loadPokemonsByType(type: string) {
      this.isLoading = true;
      this.selectedType = type;
      this.currentPage = 1; // Resetar para a primeira página
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/type/${type}`
        );
        const pokemonResults = response.data.pokemon.map((p: any) => p.pokemon);

        const pokemonDetails = await Promise.all(
          pokemonResults.map((pokemon: Pokemon) => axios.get(pokemon.url))
        );

        this.pokemons = pokemonDetails.map(
          (detail) => detail.data as PokemonDetailsType
        );
      } catch (error) {
        console.error("Erro ao carregar Pokémon por tipo:", error);
      } finally {
        this.isLoading = false;
      }
    },

    async loadPokemonTypes() {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/type');
        this.pokemonTypes = response.data.results.map((type: any) => type.name);
      } catch (error) {
        console.error("Erro ao carregar tipos de Pokémon:", error);
      }
    },
  },
});
