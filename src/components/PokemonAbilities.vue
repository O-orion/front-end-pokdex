<script setup lang="ts">
import { defineProps } from 'vue';
import { capitalizeFirstLetter } from '../utils/methods';

const props = defineProps<{
    abilities: any[] | undefined,
    background: string
}>()

</script>

<template>
    <div class="container-abilities">
        <div :style="{ backgroundColor: background }" v-for="abilitie in abilities" class="pokemon-abilitie">
            <p> {{ capitalizeFirstLetter(abilitie.ability.name) }} </p>
        </div>
    </div>
</template>

<style src="../styles/components/pokemonAbilities.css"></style>
