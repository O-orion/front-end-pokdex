<script setup lang="ts">
import { defineProps } from 'vue';
import PokemonAbilities from './PokemonAbilities.vue';
import PokemonStatus from './PokemonStatus.vue';
import PokemonMoves from './PokemonMoves.vue';
import PokemonShiny from './PokemonShiny.vue';
import { PokemonDetailsType } from '../types/PokemonDetails.type';
import { getTypeColor } from '../utils/methods';
import PokemonDetailHeader from './PokemonDetailHeader.vue';
import PokemonDetailTitulo from './PokemonDetailTitulo.vue';
import PokemonVersion from './PokemonVersion.vue';

const props = defineProps<{
    pokemon: PokemonDetailsType | null
}>()

</script>

<template>
    <section class="container-details">
        <PokemonDetailHeader :pokemon="pokemon"></PokemonDetailHeader>

        <section class="pokemon-body">
            <PokemonDetailTitulo titulo="Habilidades"></PokemonDetailTitulo>
            <div :style="{ backgroundColor: getTypeColor(pokemon?.types[0].type.name) }" class="borda"></div>
            <PokemonAbilities :background="getTypeColor(pokemon?.types[0].type.name)" :abilities="pokemon?.abilities">
            </PokemonAbilities>

            <PokemonDetailTitulo titulo="Estatísticas"></PokemonDetailTitulo>
            <div :style="{ backgroundColor: getTypeColor(pokemon?.types[0].type.name) }" class="borda"></div>
            <PokemonStatus :status="pokemon?.stats"></PokemonStatus>

            <PokemonDetailTitulo titulo="Moves"></PokemonDetailTitulo>
            <div :style="{ backgroundColor: getTypeColor(pokemon?.types[0].type.name) }" class="borda"></div>
            <PokemonMoves :background="getTypeColor(pokemon?.types[0].type.name)" :moves="pokemon?.moves">
            </PokemonMoves>

            <PokemonDetailTitulo titulo="Versão Shiny"></PokemonDetailTitulo>
            <div :style="{ backgroundColor: getTypeColor(pokemon?.types[0].type.name) }" class="borda"></div>
            <PokemonShiny :shiny="pokemon?.sprites"></PokemonShiny>

            <PokemonDetailTitulo titulo="Versões do Pokemon" ></PokemonDetailTitulo>
            <div :style="{ backgroundColor: getTypeColor(pokemon?.types[0].type.name) }" class="borda"></div>
            <PokemonVersion :pokemon="pokemon" ></PokemonVersion>

        </section>
    </section>
</template>

<style src="../styles/components/pokemonDetail.css"></style>
