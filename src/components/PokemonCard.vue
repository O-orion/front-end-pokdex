<script setup lang="ts">
import { capitalizeFirstLetter } from '../utils/methods';
import { getTypeColor } from '../utils/methods';

interface PokemonCardProps {
    name: string;
    image: string
    id: number
    types: any[]
}

defineProps<PokemonCardProps>()


</script>

<template>
    <section class="card-pokemon">
        <img class="imagem-pokemon" :src="image" :alt="name">

        <div class="informacoes-pokemon">
            <p class="nome-pokemon">{{ capitalizeFirstLetter(name) }}</p>
            <p class="numero-pokemon">#000{{ id }}</p>
        </div>
        <div class="pokemon-tags">
            <p v-for="type in types" :style="{ backgroundColor: getTypeColor(type.type.name) }">
                {{ capitalizeFirstLetter(type.type.name) }}
            </p>
        </div>
    </section>
</template>

<style src="../styles/components/pokemonCard.css"></style>
