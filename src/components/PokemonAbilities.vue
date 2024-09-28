<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
    abilities: any[] | undefined,
    background: string
}>()

const capitalizeFirstLetter = (name: string): string => {
    if (!name) return '';
    return name.charAt(0).toLocaleUpperCase() + name.slice(1).toLowerCase()
}

</script>

<template>
    <div class="container-abilities">
        <div :style="{backgroundColor: background}" v-for="abilitie in abilities" class="pokemon-abilitie">
            <p> {{ capitalizeFirstLetter(abilitie.ability.name) }} </p>
        </div>
    </div>
</template>

<style src="../styles/components/pokemonAbilities.css"></style>
