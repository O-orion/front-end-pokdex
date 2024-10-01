import { mount } from "@vue/test-utils";
import PokemonAbilities from "../components/PokemonAbilities.vue";

describe("PokemonAbilities.vue", () => {
  it("Verificando se o componente foi renderizado", () => {
    const wrapper = mount(PokemonAbilities, {
      props: {
        abilities: [{ ability: { name: "voar" } }],
        background: "#cccc",
      },
    });

    const containerAbilities = wrapper.find(".container-abilities");

    expect(containerAbilities.exists()).toBe(true);
  });

  it("Verificando se a abilidade foi renderizada", () => {
    const wrapper = mount(PokemonAbilities, {
      props: {
        abilities: [
          { ability: { name: "voar" } },
          { ability: { name: "nadar" } },
        ],
        background: "#cccc",
      },
    });

    const textAbilidade = wrapper.findAll(".pokemon-abilitie p");

    expect(textAbilidade[0].text()).toBe("Voar");
    expect(textAbilidade[1].text()).toBe("Nadar");
  });

  it("Deve aplicar o backgroundColor corretamente com a prop", () => {
    const wrapper = mount(PokemonAbilities, {
      props: {
        abilities: [
          { ability: { name: "voar" } },
          { ability: { name: "nadar" } },
        ],
        background: "#cccc",
      },
    });

    const elements = wrapper.findAll(".pokemon-abilitie");
    elements.forEach((element) => {
      expect(element.attributes("style")).toContain(
        "background-color: rgba(204, 204, 204, 0.8)"
      );
    });
  });
});
