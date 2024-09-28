<script setup lang="ts">
import { defineProps } from 'vue';
import { PokemonDetailsType } from '../types/PokemonDetails.type';
import { TypesPokemon } from '../types/Types.enum';
import PokemonAbilities from './PokemonAbilities.vue';
import PokemonStatus from './PokemonStatus.vue';
import PokemonMoves from './PokemonMoves.vue';
import PokemonShiny from './PokemonShiny.vue';

const props = defineProps<{
    pokemon: PokemonDetailsType | null
}>()

const capitalizeFirstLetter = (name: string): string => {
    if (!name) return ''; // Retorna uma string vazia se name for undefined
    return name.charAt(0).toLocaleUpperCase() + name.slice(1).toLowerCase()
}

const getTypeColor = (typeName: string): string => {
    return TypesPokemon[typeName as keyof typeof TypesPokemon] || '#000'
}
</script>

<template>
    <section class="container-details">
        <section class="pokemon-header">
            <section class="pokemon-details">
                <div class="pokemon-image">
                    <img :src="pokemon?.sprites.front_default" alt="">
                </div>
                <div class="pokemon-info">
                    <p :style="{ color: getTypeColor(pokemon?.types[0].type.name) }">{{
                        capitalizeFirstLetter(pokemon?.name as string) }}</p>
                    <div class="types-pokemon">
                        <p class="type" v-for="type in pokemon?.types"
                            :style="{ backgroundColor: getTypeColor(type.type.name) }">
                            {{ capitalizeFirstLetter(type.type.name) }}
                        </p>
                    </div>
                </div>
            </section>
        </section>

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
