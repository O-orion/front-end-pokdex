<script setup lang="ts">
import { defineProps, onMounted, watch } from 'vue';
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

// Adiciona um Pokémon ao histórico (localStorage)
const addToHistory = (pokemon: PokemonDetailsType | null) => {
  if (!pokemon) return;

  const history = JSON.parse(localStorage.getItem('pokemonHistory') || '[]');

  // Verifica se o Pokémon já está no histórico
  const existingPokemon = history.find((p: PokemonDetailsType) => p.id === pokemon.id);

  if (!existingPokemon) {
    history.push(pokemon);
    localStorage.setItem('pokemonHistory', JSON.stringify(history));
    console.log('Pokémon adicionado ao histórico:', pokemon);
  } else {
    console.log('Pokémon já existe no histórico:', pokemon);
  }
};

// Verifica quando o componente é montado
onMounted(() => {
  if (props.pokemon) {
    addToHistory(props.pokemon);
  }
});

// Monitora mudanças na prop pokemon e chama addToHistory quando os dados chegam
watch(() => props.pokemon, (newPokemon) => {
  if (newPokemon) {
    addToHistory(newPokemon);
  }
});

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
