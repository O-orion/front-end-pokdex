<script setup  lang="ts">
    import { defineProps } from 'vue';

    const props = defineProps<{
        imgUrlFront: string,
        imgUrlBack: string,
        nameVersion: string
    }>()
</script>

<template>
    <div class="container-version">
        <p> {{  nameVersion  }}</p>
        <div class="pokemons-version">
            <img :src="imgUrlFront" alt="">
        </div>
        <div class="pokemons-version">
            <img :src="imgUrlBack" alt="">
        </div>
    </div>
</template>

<style scoped src="../styles/components/pokemonCardVersion.css" ></style>
