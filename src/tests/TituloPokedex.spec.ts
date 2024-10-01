import { mount } from "@vue/test-utils";
import TituloPokedex from "../components/TituloPokedex.vue";

describe("TituloPokedex.vue", () => {
  it("Verificando se o componente foi renderizado", () => {
    const wrapper = mount(TituloPokedex);

    const element = wrapper.find(".container");

    expect(element.exists()).toBe(true);
  });

  it("Verificando se o titulo está sendo exibido", () => {
    const wrapper = mount(TituloPokedex);

    const textComponent = wrapper.find(".titulo");

    expect(textComponent.exists()).toBe(true);

    expect(textComponent.text()).toBe("Pokédex");
  });
});
