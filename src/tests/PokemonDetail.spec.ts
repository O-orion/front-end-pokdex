import { mount } from "@vue/test-utils";
import PokemonDetail from "../components/PokemonDetail.vue";
import { PokemonDetailsType } from "../types/PokemonDetails.type";

describe("PokemonDetail.vuew", () => {
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

  it("Renderizar nome do pokemon com a primeira letra maiúscular", () => {
    const wrapper = mount(PokemonDetail, {
      props: {
        pokemon,
      },
    });

    const nameElement = wrapper.find(".pokemon-info p");
    expect(nameElement.text()).toBe("Pikachu");
  });

  it("Deve aplicar corretamente a cor de acordo com tipo do pokemon", () => {
    const wrapper = mount(PokemonDetail, {
      props: {
        pokemon,
      },
    });

    const nameElement = wrapper.find(".pokemon-info p");
    expect(nameElement.attributes("style")).toContain(
      "color: rgb(248, 208, 48)"
    );
  });

  it("Renderizando os tipos com a cor correta", () => {
    const wrapper = mount(PokemonDetail, {
      props: {
        pokemon,
      },
    });

    const typeElements = wrapper.findAll(".type");
    expect(typeElements.length).toBe(1);

    expect(typeElements[0].text()).toBe("Electric");

    expect(typeElements[0].attributes("style")).toContain(
      "background-color: rgb(248, 208, 48)"
    );
  });

  it("Deve renderizar Corretamente o componente PokemonStatus", () => {
    const wrapper = mount(PokemonDetail, {
      props: {
        pokemon,
      },
    });

    const statsSection = wrapper.findComponent({ name: "PokemonStatus" });

    expect(statsSection.exists()).toBe(true);
    expect(statsSection.props("status")).toEqual(pokemon.stats);
  });

  it("Deve renderizar corretamente o componente MovesPokemon", () => {
    const wrapper = mount(PokemonDetail, {
      props: { pokemon },
    });

    const moveSection = wrapper.findComponent({ name: "PokemonMoves" });
    expect(moveSection.exists()).toBe(true);

    expect(moveSection.props("background")).toBe("#F8D030");
  });

  it("Deve renderizar corretamente o componente ShinyPokemon", () => {
    const wrapper = mount(PokemonDetail, {
      props: { pokemon },
    });

    const shinySection = wrapper.findComponent({ name: "PokemonShiny" });

    expect(shinySection.exists()).toBe(true);
    expect(shinySection.props("shiny")).toEqual(pokemon.sprites);
  });

  it("Deve renderizar corretamente a imagem do pokemon", () => {
    const wrapper = mount(PokemonDetail, {
      props: { pokemon },
    });

    const img = wrapper.find("img");

    expect(img.attributes("src")).toBe(pokemon.sprites.front_default);
  });
});
