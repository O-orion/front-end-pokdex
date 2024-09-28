<script setup lang="ts" >
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import PokemonDetail from '../components/PokemonDetail.vue';
import { ref } from 'vue';
import { usePokemonStore } from '../stores/pokemonStore';
import { PokemonDetailsType } from '../types/PokemonDetails.type';

const route = useRoute();
const pokemonId = Array.isArray(route.params.id) ? Number(route.params.id[0]) : Number(route.params.id);
const pokemonDetails = ref<PokemonDetailsType | null>(null);
const store = usePokemonStore();
const isLoading = ref(false);

onMounted(async () => {
    isLoading.value = true;
    pokemonDetails.value = await store.fetchPokemonById(pokemonId) as PokemonDetailsType;
    console.log(pokemonDetails.value)
    isLoading.value = false;
})

console.log(pokemonDetails.value)
</script>

<template>
    <PokemonDetail  :pokemon="pokemonDetails"></PokemonDetail>
</template>

<style></style>