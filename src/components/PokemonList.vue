<script  setup lang="ts">
    import PokemonCard from './PokemonCard.vue';
    import { onMounted } from 'vue';
    import { usePokemonStore } from '../stores/pokemonStore';

    const store = usePokemonStore();

    onMounted(() => {
        store.loadPokemons(0,20)
     
    })

</script>

<template>
    <section class="container-pokemon-list" >
        <div class="pokemon-list" v-if="!store.isLoading">
            <PokemonCard 
            v-for="pokemon in store.pokemons" 
            :key="pokemon.id"
            :name="pokemon.name"
            :image="pokemon.sprites.front_default"
            :id="pokemon.id"
            ></PokemonCard>
        </div>
    </section>
</template>

<style src="../styles/components/pokemonList.css" ></style>
