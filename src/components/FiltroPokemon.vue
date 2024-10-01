<script setup lang="ts">
import { onMounted } from 'vue';
import { usePokemonStore } from '../stores/pokemonStore';

const store = usePokemonStore();

onMounted(() => {
    store.loadPokemonTypes();
});

// Função que filtra por tipo selecionado
const selectType = (event: Event) => {
    const selectedType = (event.target as HTMLSelectElement).value;
    if (selectedType === '') {
        store.loadPokemons();
    } else {
        store.loadPokemonsByType(selectedType);
    }
};

</script>

<template>
    <!-- Dropdown para selecionar tipos de Pokémon -->
    <div class="type-filter">
        <select id="type-select" @change="selectType">
            <option value="">Todos</option>
            <option v-for="type in store.pokemonTypes" :key="type" :value="type">{{ type }}</option>
        </select>
    </div>
    
</template>

<style  scoped src="../styles/components/filtroPokemon.css" ></style>
