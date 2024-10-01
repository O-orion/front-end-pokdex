<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import PokemonDetail from '../components/PokemonDetail.vue';
import { ref } from 'vue';
import { usePokemonStore } from '../stores/pokemonStore';
import { PokemonDetailsType } from '../types/PokemonDetails.type';
import Loading from '../components/Loading.vue';

const route = useRoute();
const pokemonId = Array.isArray(route.params.id) ? Number(route.params.id[0]) : Number(route.params.id);
const pokemonDetails = ref<PokemonDetailsType | null>(null);
const store = usePokemonStore();
const isLoading = ref(false);

onMounted(async () => {
    isLoading.value = true;
    pokemonDetails.value = await store.fetchPokemonById(pokemonId) as PokemonDetailsType;
    isLoading.value = false;
})

</script>

<template>
    <Loading v-if="store.isLoading"></Loading>
    <PokemonDetail :pokemon="pokemonDetails" v-else></PokemonDetail>
</template>

<style></style>