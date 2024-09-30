<script setup lang="ts">
import { ref } from 'vue';
import { usePokemonStore } from '../stores/pokemonStore';

const searchQuery = ref<string>("");
const store = usePokemonStore();

// Função para realizar pesquisa ao pressionar tecla enter
const handleSearch = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
        store.searchPokemon(searchQuery.value);
    }
}

</script>

<template>
    <section class="container-search">
        <input 
        class="input-search" 
        placeholder="pesquisar" 
        type="text"
        v-model="searchQuery"
        @keyup="handleSearch"
        >
    </section>
</template>

<style src="../styles/components/searchBar.css"></style>
