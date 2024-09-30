<script setup lang="ts">
import { defineProps } from 'vue';

import { TypesPokemon } from '../types/Types.enum';
import PokemonAbilities from './PokemonAbilities.vue';
import PokemonStatus from './PokemonStatus.vue';
import PokemonMoves from './PokemonMoves.vue';
import PokemonShiny from './PokemonShiny.vue';
import { PokemonDetailsType } from '../types/PokemonDetails.type';
import PokemonTypes from './PokemonTypes.vue';
import { capitalizeFirstLetter } from '../utils/methods';
import { getTypeColor } from '../utils/methods';
import PokemonDetailHeader from './PokemonDetailHeader.vue';

const props = defineProps<{
    pokemon: PokemonDetailsType | null
}>()


</script>

<template>
    <section class="container-details">
        <PokemonDetailHeader :pokemon="pokemon" ></PokemonDetailHeader>

        <section class="pokemon-body">
            <h2 class="pokemon-habilities">Habilidades</h2>
            <div :style="{ backgroundColor: getTypeColor(pokemon?.types[0].type.name) }" class="borda"></div>
            <PokemonAbilities :background="getTypeColor(pokemon?.types[0].type.name)" :abilities="pokemon?.abilities">
            </PokemonAbilities>

            <h2 class="pokemon-habilities">Estatisticas</h2>
            <div :style="{ backgroundColor: getTypeColor(pokemon?.types[0].type.name) }" class="borda"></div>
            <PokemonStatus :status="pokemon?.stats"></PokemonStatus>

            <h2 class="pokemon-habilities">Moves</h2>
            <div :style="{ backgroundColor: getTypeColor(pokemon?.types[0].type.name) }" class="borda"></div>
            <PokemonMoves :background="getTypeColor(pokemon?.types[0].type.name)" :moves="pokemon?.moves"></PokemonMoves>

            <h2 class="pokemon-habilities">Shiny</h2>
            <div :style="{ backgroundColor: getTypeColor(pokemon?.types[0].type.name) }" class="borda"></div>
            <PokemonShiny :shiny="pokemon?.sprites"></PokemonShiny>

        </section>
    </section>
</template>

<style src="../styles/components/pokemonDetail.css"></style>
