<script setup lang="ts" >
    import { defineProps } from 'vue';

    const props = defineProps<{
        titulo: string
    }>()

</script>

<template>
    <h2 class="pokemon-habilities"> {{ titulo }} </h2>
</template>


<style scoped src="../styles/components/pokemonDetailsTitulo.css" ></style>
