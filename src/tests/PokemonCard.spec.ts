import { mount } from "@vue/test-utils";
import PokemonCard from "../components/PokemonCard.vue";

describe("PokemonCard.vue", () => {
  it("deve exibir o nome do pokémon corretamente", () => {
    const wrapper = mount(PokemonCard, {
      props: {
        name: "pikachu",
        image: "https://example.com/pikachu.png",
        id: 25,
        types: [{ type: { name: "electric" } }],
      },
    });

    const pokemonName = wrapper.find(".nome-pokemon").text();
    expect(pokemonName).toBe("Pikachu");
  });

  // Testando se o ID do Pokémon é exibido
  it("deve renderizar a númeração do pokemon", () => {
    const wrapper = mount(PokemonCard, {
      props: {
        name: "bulbasaur",
        image: "https://example.com/pikachu.png",
        id: 1,
        types: [{ type: { name: "grass" } }, { type: { name: "poison" } }],
      },
    });

    const pokemonNumeracao = wrapper.find(".numero-pokemon").text();
    expect(pokemonNumeracao).toBe("#0001");
  });

  // Testando se o tipo do pokemon é renderizado com a cor correta
  it("deve renderizar o tipo do pokemon com a cor correta", () => {
    const wrapper = mount(PokemonCard, {
      props: {
        name: "charmander",
        image: "https://example.com/charmander.png",
        id: 4,
        types: [{ type: { name: "fire" } }],
      },
    });

    const typeTag = wrapper.find(".pokemon-tags p");
    const typeStyle = typeTag.attributes("style");

    expect(typeStyle).toContain("background-color: rgb(240, 128, 48)");
  });

  // Testando se os tipos estão sendo renderizados
  it("deve renderizar múltiplos tipos de Pokémon corretamente", () => {
    const wrapper = mount(PokemonCard, {
      props: {
        name: "venusaur",
        image: "https://example.com/venusaur.png",
        id: 3,
        types: [{ type: { name: "grass" } }, { type: { name: "poison" } }],
      },
    });

    const pokemonTypes = wrapper.findAll(".pokemon-tags p");

    // Verificando se possui dois tipos
    expect(pokemonTypes.length).toBe(2);

    // Primeiro tipo
    expect(pokemonTypes[0].text()).toBe("Grass");

    // Segundo tipo
    expect(pokemonTypes[1].text()).toBe("Poison");
  });

  it("deve renderizar o componente corretamente (snapshot)", () => {
    const wrapper = mount(PokemonCard, {
      props: {
        name: "squirtle",
        image: "https://example.com/squirtle.png",
        id: 7,
        types: [{ type: { name: "water" } }],
      },
    });
  
    expect(wrapper.html()).toMatchSnapshot();
  });
  

});
