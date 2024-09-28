<script  setup lang="ts">
    import { defineProps } from 'vue';

    const props = defineProps<{
        shiny: any,
    }>()

</script>

<template>
    <div class="container-shiny">
        <div  class="pokemons-shiny">
            <img :src="shiny?.front_shiny" alt="">
        </div>
        <div  class="pokemons-shiny">
            <img :src="shiny?.back_shiny" alt="">
        </div>
    </div>
</template>

<style src="../styles/components/pokemonShiny.css" ></style>
