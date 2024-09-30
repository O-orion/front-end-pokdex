import { mount } from "@vue/test-utils";
import Loading from "../components/Loading.vue";

describe('Loading.vue', () => {
    it('Verificando se o componente foi renderizado', () => {
        const wrapper = mount(Loading);

        const containerLoading = wrapper.find('.container-loading');
        expect(containerLoading.exists()).toBe(true);

    })

    it('Verificando se imagem foi renderizada', () => {
        const wrapper = mount(Loading);

        const image = wrapper.find('.img-pokebola');

        expect(image.exists()).toBe(true)
    })

    it ('Verificando se a imagem da pokebola está sendo exibida', () => {
        const wrapper = mount(Loading);

        const imagePokebola = wrapper.find('.img-pokebola');

        expect(imagePokebola.attributes('src')).toBe('/src/assets/img/pokebola.png')

    })

    it('Verificando se o text foi renderizado', () => {
        const wrapper = mount(Loading);
        
        const textLoading = wrapper.find('.container-loading p');

        expect(textLoading.exists()).toBe(true)
    
    })

    it('Verificando se o texto loading foi exibido', () => {
        const wrapper = mount(Loading);
        
        const textLoading = wrapper.find('.container-loading p');

        expect(textLoading.text()).toBe('Carregando...')
    
    })
})
