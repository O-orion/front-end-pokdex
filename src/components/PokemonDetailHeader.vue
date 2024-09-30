<script setup lang="ts">
    import { PokemonDetailsType } from '../types/PokemonDetails.type';
    import { capitalizeFirstLetter } from '../utils/methods';
    import { getTypeColor } from '../utils/methods';
    import { defineProps } from 'vue';
    import PokemonTypes from './PokemonTypes.vue';

    const props = defineProps<{
        pokemon: PokemonDetailsType | null
    }>()

</script>

<template>
<section class="pokemon-header">
    <section class="pokemon-details">
        <div class="pokemon-image">
            <img :src="pokemon?.sprites.front_default" alt="">
        </div>
        <div class="pokemon-info">
            <p :style="{ color: getTypeColor(pokemon?.types[0].type.name) }">
                {{ capitalizeFirstLetter(pokemon?.name as string) }}
            </p>
            <PokemonTypes :types="pokemon?.types" ></PokemonTypes>
        </div>
    </section>
</section>
</template>

<style scoped src="../styles/components/pokemonDetailHeader.css" ></style>
