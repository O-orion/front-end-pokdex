import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import PokemonDetailView from "../views/PokemonDetailView.vue";

// Configurando rotas
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/pokemon/:id",
    name: "pokemonDetails",
    component: PokemonDetailView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
