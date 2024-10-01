<script setup lang="ts">
import { DefineProps } from 'vue';

const props = defineProps<{
  status: any[] | undefined
}>();

</script>

<template>
  <div class="container-status">
    <div class="box-status" v-for="stats in status" :key="stats.stat.name">
      <p class="status-name">{{ stats.stat.name }}</p>
      <div class="progress-container">
        <div class="progress-bar" :style="{ width: `${stats.base_stat / 255 * 100}%` }">
          <span class="progress-number">{{ stats.base_stat }}</span>
        </div>
      </div>
    </div>
  </div>
</template>


<style src="../styles/components/pokemonStatus.css"></style>
