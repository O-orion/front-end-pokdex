<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const goToHome = () => {
    router.push({ name: 'Home' })
}

const goToHistorico = () => {
    router.push({ name: 'History' })
}

</script>

<template>
    <section class="container-menu">
        <img @click="goToHome" class="logo-menu" src="../assets/img/pokebola.png" alt="logo pokedex"></img>
        <nav class="links-menu">
            <a @click="goToHome" class="link-menu">
                <span class="material-symbols-outlined">
                    home
                </span>
            </a>
            <a class="link-menu">
                <span class="material-symbols-outlined">
                    grade
                </span>
            </a>
            <a class="link-menu">
                <span @click="goToHistorico" class="material-symbols-outlined">
                    manage_search
                </span>
            </a>
        </nav>

        <div class="profile-icon">
            <span class="icon material-symbols-outlined">
                person
            </span>
        </div>
    </section>
</template>

<style src="../styles/components/navbar.css"></style>