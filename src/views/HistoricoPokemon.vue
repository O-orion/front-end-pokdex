<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { PokemonDetailsType } from '../types/PokemonDetails.type';

const history = ref<PokemonDetailsType[]>([]);

// Carrega o histórico do localStorage quando o componente é montado
onMounted(() => {
  try {
    const storedHistory = localStorage.getItem('pokemonHistory');
    if (storedHistory) {
      history.value = JSON.parse(storedHistory);
    } else {
      console.log('Nenhum histórico encontrado.');
    }
  } catch (error) {
    console.error('Erro ao carregar o histórico:', error);
  }
});

// Limpar o histórico
const clearHistory = () => {
  localStorage.removeItem('pokemonHistory');
  history.value = [];
};
</script>

<template>
  <section class="history-container">
    <h2>Histórico de Pokémons Visitados</h2>

    <div v-if="history.length === 0" class="no-history">Você ainda não visitou nenhum Pokémon.</div>
    <div v-else class="pokemon-grid">
      <div class="pokemon-card" v-for="pokemon in history" :key="pokemon.id">
        <img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
        <p>{{ pokemon.name }}</p>
      </div>
    </div>

    <button class="clear-btn" @click="clearHistory">Limpar Histórico</button>
  </section>
</template>

<style scoped src="../styles/components/historicoPokemon.css" ></style>
