<script setup lang="ts">
import PokemonCard from './PokemonCard.vue';
import { onMounted } from 'vue';
import { usePokemonStore } from '../stores/pokemonStore';
import PaginationList from './PaginationList.vue';
import SearchBar from './SearchBar.vue';
import { useRouter } from 'vue-router';
import Loading from './Loading.vue';
import FiltroPokemon from './FiltroPokemon.vue';

const store = usePokemonStore();
const router = useRouter();

// Quando o componente é montado carrega os Pokémon
onMounted(() => {
    store.loadPokemons(0, 20);
});


// Função para redirecionar para a página de detalhes do Pokémon
const goToDetails = (id: number) => {
    router.push({ name: 'pokemonDetails', params: { id } })
}
</script>

<template>
    <SearchBar></SearchBar>
    <PaginationList></PaginationList>

    <FiltroPokemon></FiltroPokemon>
    
    <section class="container-pokemon-list">
        <Loading v-if="store.isLoading"></Loading>
        <div class="pokemon-list" v-else>
            <PokemonCard v-for="pokemon in store.pokemons" :key="pokemon.id" :name="pokemon.name"
                :image="pokemon.sprites.front_default" :id="pokemon.id" :types="pokemon.types"
                @click="goToDetails(pokemon.id)"></PokemonCard>
        </div>
    </section>
</template>

<style src="../styles/components/pokemonList.css"></style>
