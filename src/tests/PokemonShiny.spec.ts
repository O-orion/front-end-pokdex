import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import PokemonShiny from "../components/PokemonShiny.vue";

describe("PokemonShiny.vue", () => {
  // Teste para garantir que o componente é renderizado corretamente
  it("renderiza o componente corretamente", () => {
    const wrapper = mount(PokemonShiny, {
      props: {
        shiny: null,
      },
    });

    expect(wrapper.exists()).toBe(true);
  });

  // Teste para verificar se as imagens são exibidas corretamente
  it("exibe as imagens shiny corretamente", () => {
    const shinyData = {
      front_shiny: "front-shiny.png",
      back_shiny: "back-shiny.png",
    };

    const wrapper = mount(PokemonShiny, {
      props: {
        shiny: shinyData,
      },
    });

    const images = wrapper.findAll("img");

    // Deve haver duas imagens
    expect(images.length).toBe(2);

    // Verifica a imagem frontal
    expect(images[0].attributes("src")).toBe(shinyData.front_shiny);

    // Verifica a imagem traseira
    expect(images[1].attributes("src")).toBe(shinyData.back_shiny);
  });
});
