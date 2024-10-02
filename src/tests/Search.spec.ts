import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia, Pinia } from "pinia";
import SearchBar from "../components/SearchBar.vue";

describe("SearchBar.vue", () => {
  let pinia: Pinia;

  // Criar uma nova instância do Pinia
  beforeEach(() => {
    pinia = createPinia();
    setActivePinia(pinia);
  });

  it("Deve renderizar o componente SearchBar", () => {
    const wrapper = mount(SearchBar, {
      global: {
        // Adicionando o Pinia como plugin global
        plugins: [pinia],
      },
    });
    expect(wrapper.exists()).toBe(true);
  });

  it("Deve conter um campo de entrada", () => {
    const wrapper = mount(SearchBar, {
      global: {
        plugins: [pinia],
      },
    });
    const input = wrapper.find(".input-search");
    expect(input.exists()).toBe(true);
  });


  it("Deve ter o placeholder correto", () => {
    const wrapper = mount(SearchBar);
    const input = wrapper.find(".input-search");
    expect(input.attributes("placeholder")).toBe("pesquisar");
  });


});
