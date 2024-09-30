import { mount } from "@vue/test-utils";
import PaginationList from "../components/PaginationList.vue";
import { createPinia, setActivePinia, Pinia } from "pinia";

describe('PaginationList.vuew', () => {

    let pinia: Pinia;

    // Criar uma nova instância do Pinia
    beforeEach(() => {
        pinia = createPinia();
        setActivePinia(pinia);
    });
    
    it ('Verificando se a paginação foi renderizada', () => {
        const wrapper = mount(PaginationList)
        const paginationContainer = wrapper.find('.pagination')

        expect(paginationContainer.exists()).toBe(true);
    })

    it ('Verificando se os botões next e return foram renderizados', () => {
        const wrapper = mount(PaginationList);

        const buttonNext = wrapper.findAll('.icon-pagination span');

        expect(buttonNext.length).toBe(2)

        // Botão de retorno
        expect(buttonNext[0].text()).toBe('chevron_left')

        // Botão para próxima página
        expect(buttonNext[1].text()).toBe('chevron_right')

    })

})
