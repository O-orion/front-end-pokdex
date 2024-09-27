<script setup lang="ts">
    interface PokemonCardProps {
        name: string;
        image: string
        id: number
    }

    defineProps<PokemonCardProps>()

</script>

<template>
    <section class="card-pokemon" >
        <img  class="imagem-pokemon" :src="image" :alt="name">

        <div class="informacoes-pokemon">
            <p class="nome-pokemon" >{{ name }}</p>
            <p class="numero-pokemon" >#000{{ id }}</p>
        </div>
        <div class="pokemon-tags">
            <p>tags</p>
            <p>tags</p>
            <p>tags</p>
        </div>
    </section>
</template>

<style src="../styles/components/pokemonCard.css" ></style>
