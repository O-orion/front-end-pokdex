<script setup lang="ts">
import { TypesPokemon } from '../types/Types.enum';

    interface PokemonCardProps {
        name: string;
        image: string
        id: number
        types: any[]
    }

    defineProps<PokemonCardProps>()

    const getTypeColor = (typeName: string): string => {
        return TypesPokemon[typeName as keyof typeof TypesPokemon]  || '#000'
    }

</script>

<template>
    <section class="card-pokemon" >
        <img  class="imagem-pokemon" :src="image" :alt="name">

        <div class="informacoes-pokemon">
            <p class="nome-pokemon" >{{ name }}</p>
            <p class="numero-pokemon" >#000{{ id }}</p>
        </div>
        <div class="pokemon-tags">
            <p v-for="type in types" :style="{ backgroundColor: getTypeColor(type.type.name) }">
                {{ type.type.name  }}
            </p>
        </div>
    </section>
</template>

<style src="../styles/components/pokemonCard.css" ></style>
