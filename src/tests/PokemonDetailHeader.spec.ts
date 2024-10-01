// PokemonDetailHeader.spec.ts
import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import PokemonDetailHeader from "../components/PokemonDetailHeader.vue";
import { PokemonDetailsType } from "../types/PokemonDetails.type";

describe("PokemonDetailHeader.vue", () => {
  let pokemon: PokemonDetailsType;

  beforeEach(() => {
    pokemon = {
      abilities: [
        {
          ability: { name: "static", url: "some-url" },
          is_hidden: false,
          slot: 1,
        },
      ],
      base_experience: 112,
      cries: { latest: "cry.mp3", legacy: "legacy-cry.mp3" },
      froms: [{ name: "pikachu", url: "some-url" }],
      game_indices: [
        { game_index: 1, version: { name: "red", url: "some-url" } },
      ],
      height: 4,
      held_items: [],
      id: 25,
      is_default: true,
      location_area_encounters: "some-location",
      moves: [],
      name: "pikachu",
      order: 35,
      past_abilities: [],
      past_types: [],
      species: { name: "pikachu", url: "some-url" },
      sprites: {
        back_default: "back.png",
        back_shiny: "back-shiny.png",
        front_default: "front.png",
        front_shiny: "front-shiny.png",
      },
      types: [{ type: { name: "electric" } }],
      stats: [{ base_stat: 35, stat: { name: "hp" } }],
    };
  });

  it("Renderiza corretamente o nome do pokémon", () => {
    const wrapper = mount(PokemonDetailHeader, {
      props: {
        pokemon: pokemon,
      },
    });

    expect(wrapper.text()).toContain("Pikachu");
  });

  it("Renderiza corretamente a imagem do pokémon", () => {
    const wrapper = mount(PokemonDetailHeader, {
      props: {
        pokemon: pokemon,
      },
    });

    const img = wrapper.find("img");
    expect(img.exists()).toBe(true);
    expect(img.attributes("src")).toBe(pokemon.sprites.front_default);
  });

  it("Aplica a cor correta de acordo com o tipo do pokémon", () => {
    const wrapper = mount(PokemonDetailHeader, {
      props: {
        pokemon: pokemon,
      },
    });

    const nameElement = wrapper.find("p");
    expect(nameElement.attributes("style")).toContain(
      "color: rgb(248, 208, 48)"
    );
  });

  it("Renderiza o componente PokemonTypes", () => {
    const wrapper = mount(PokemonDetailHeader, {
      props: {
        pokemon: pokemon,
      },
    });

    const pokemonTypesComponent = wrapper.findComponent({
      name: "PokemonTypes",
    });
    expect(pokemonTypesComponent.exists()).toBe(true);
  });
});
