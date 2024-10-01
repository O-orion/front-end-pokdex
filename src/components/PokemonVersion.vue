<script setup lang="ts">
import { defineProps, computed } from 'vue';
import { PokemonDetailsType } from '../types/PokemonDetails.type';
import PokemonVersionCard from './PokemonVersionCard.vue';
import { getTypeColor } from '../utils/methods';

const props = defineProps<{
    pokemon: PokemonDetailsType | null
}>()

// Function to get all front and back sprite URLs
const getSprites = (pokemon: PokemonDetailsType | null) => {
    if (!pokemon) return [];

    const versions = pokemon.sprites.versions;
    const spriteUrls: { versionName: string, spriteUrlFront: string | null, spriteUrlBack: string | null }[] = [];

    for (const generation in versions) {
      const games = versions[generation as keyof typeof versions];
      for (const game in games) {
            const spriteFront = games[game as keyof typeof games]?.front_default;
            const spriteBack = games[game as keyof typeof games]?.back_default;
            if (spriteFront || spriteBack) {
                spriteUrls.push({
                    versionName: `${generation} - ${game}`,
                    spriteUrlFront: spriteFront,
                    spriteUrlBack: spriteBack
                });
            }
        }
    }

    return spriteUrls;
}

const spriteUrls = computed(() => getSprites(props.pokemon));

</script>

<template>
  <div v-if="pokemon">
    <div class="container-pokemon-versions"  v-for="(sprite, index) in spriteUrls" :key="index">
     <PokemonVersionCard :color="getTypeColor(pokemon.types[0].type.name)"  :imgUrlFront="sprite.spriteUrlFront" :imgUrlBack="sprite.spriteUrlBack" :nameVersion="sprite.versionName"></PokemonVersionCard>
    </div>
  </div>
  <p v-else>
    Sem versões
  </p>
</template>

<style scoped src="../styles/components/pokemonVersion.css"></style>
