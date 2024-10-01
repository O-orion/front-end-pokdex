<script setup lang="ts">
import { capitalizeFirstLetter } from '../utils/methods';
import { getTypeColor } from '../utils/methods';
import { defineProps } from 'vue';

const props = defineProps<{
    types: any[] | undefined
}>()

</script>

<template>
    <div class="types-pokemon">
        <p class="type" v-for="type in types" :style="{ backgroundColor: getTypeColor(type.type.name) }">
            {{ capitalizeFirstLetter(type.type.name) }}
        </p>
    </div>
</template>

<style src="../styles/components/pokemonTypes.css" scoped></style>