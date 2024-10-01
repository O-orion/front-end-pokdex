<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
    moves: any[] | undefined,
    background: string
}>();


</script>

<template>
    <section class="container-moves">
        <div class="moves-pokemon">
            <div :style="{ backgroundColor: background }" class="box-move" v-for="move in moves">
                <p> {{ move.move.name }} </p>
            </div>
        </div>
    </section>
</template>

<style src="../styles/components/pokemonMove.css"></style>
