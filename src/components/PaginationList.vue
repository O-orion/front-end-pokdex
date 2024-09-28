<script setup lang="ts">
import { computed } from 'vue';
import { usePokemonStore } from '../stores/pokemonStore';

const store = usePokemonStore();

// Total de páginas
const totalPages = computed(() => Math.ceil(store.count / store.limit));

// Página atual
const currentPage = computed(() => store.currentPage);

const paginatedPages = computed(() => {
  const visiblePages = [];
  const maxVisiblePages = 5; 
  const startPage = Math.max(currentPage.value - 2, 2); 
  const endPage = Math.min(currentPage.value + 2, totalPages.value - 1);

  for (let i = startPage; i <= endPage && visiblePages.length < maxVisiblePages; i++) {
    visiblePages.push(i);
  }
  return visiblePages;
});

// Ações de paginação
const nextPage = () => store.nextPage();
const previousPage = () => store.previousPage();
const goToPage = (page: number) => store.goToPage(page);

</script>

<template>
  <div class="pagination">

    <!-- Botão de página anterior -->
    <button @click="previousPage" :disabled="!store.previous || store.isLoading" class="icon-pagination pagination-btn">
      <span class="material-symbols-outlined">
        chevron_left
      </span>
    </button>

    <button v-if="currentPage > 3" @click="goToPage(1)" class="pagination-btn">
      1
    </button>

    <span v-if="currentPage > 4">...</span>

    <button v-for="page in paginatedPages" :key="page" @click="goToPage(page)"
      :class="{ active: store.currentPage === page }" class="icon-pagination pagination-btn">
      {{ page }}
    </button>

    <span v-if="currentPage < totalPages - 3">...</span>

    <!-- Última página -->
    <button v-if="currentPage < totalPages - 2" @click="goToPage(totalPages)" class="pagination-btn">
      {{ totalPages }}
    </button>

    <!-- Botão de próxima página -->
    <button @click="nextPage" :disabled="!store.next || store.isLoading" class="icon-pagination pagination-btn">
      <span class="material-symbols-outlined">
        chevron_right
      </span>
    </button>
  </div>
</template>

<style src="../styles/components/pagination.css"></style>
