<script  setup lang="ts">
    import PokemonCard from './PokemonCard.vue';
    import { onMounted } from 'vue';
    import { usePokemonStore } from '../stores/pokemonStore';
import PaginationList from './PaginationList.vue';

    const store = usePokemonStore();

    onMounted(() => {
        store.loadPokemons(0,20)
     
    })

</script>

<template>
    <PaginationList></PaginationList>
    <section class="container-pokemon-list" >
        <div class="pokemon-list" v-if="!store.isLoading">
            <PokemonCard 
            v-for="pokemon in store.pokemons" 
            :key="pokemon.id"
            :name="pokemon.name"
            :image="pokemon.sprites.front_default"
            :id="pokemon.id"
            :types="pokemon.types"
            ></PokemonCard>
        </div>

    </section>
</template>

<style src="../styles/components/pokemonList.css" ></style>
