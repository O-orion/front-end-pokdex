<script setup  lang="ts">
    import { defineProps } from 'vue';

    const props = defineProps<{
        imgUrlFront: string | null,
        imgUrlBack: string | null ,
        nameVersion?: string,
        color: string
    }>()
</script>

<template>
    <div class="container-version">
        <p  :style="{color: color}" class="name-version" > {{  nameVersion  }}</p>

        <div class="box-pokemons">
            <div class="pokemons-version">
                <img :src="imgUrlFront as string" alt="">
            </div>
            <div class="pokemons-version">
                <img :src="imgUrlBack as string" alt="">
            </div>
        </div>
    </div>
</template>

<style scoped src="../styles/components/pokemonCardVersion.css" ></style>
