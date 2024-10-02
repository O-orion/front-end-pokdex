import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import PokemonDetailView from "../views/PokemonDetailView.vue";
import HistoricoPokemon from "../views/HistoricoPokemon.vue";

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
  {
    path: "/history",
    name: "History",
    component: HistoricoPokemon,
    props: true,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
