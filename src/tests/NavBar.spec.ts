import { mount } from '@vue/test-utils';
import NavBar from '../components/NavBar.vue';
import { useRouter } from 'vue-router';


describe('NavBar.vue', () => {
    const router = useRouter();

    it('Verificar se a logo está sendo exibida', () => {
        const wrapper = mount(NavBar);

        const logoPokebola = wrapper.find('.logo-menu');

        // Verificando se o elemento existe
        expect(logoPokebola.exists()).toBe(true);

        // Verificando se está exibindo a imagem da pokebola;
        expect(logoPokebola.attributes('src')).toBe('/src/assets/img/pokebola.png')

    })

    it('Verificando se menu contém três links', () => {
        const wrapper = mount(NavBar);

        const linksMenu =  wrapper.findAll('.link-menu')

        // Verificando se contém três links
        expect(linksMenu.length).toBe(3)

        // Verificando se o primeiro link é para interface home
        expect(linksMenu[0].text()).toBe('Home')

    })

    it('Verificando se o icon é o person', () => {
        const wrapper = mount(NavBar);

        const icon = wrapper.find('.icon');

        // Verificando se  o icone de  perfil
        expect(icon.text()).toBe('person')

    })

    it("deve renderizar o componente corretamente (snapshot)", () => {
        const wrapper = mount(NavBar);
      
        expect(wrapper.html()).toMatchSnapshot();
      });

      it('Deve navegar para a Home ao clicar na logo', async () => {
        const wrapper = mount(NavBar);

        await wrapper.find('.logo-menu').trigger('click');

        // Verificando se o método push do router foi acionado
        expect(router.push).toHaveBeenCalledWith({ name: 'Home' })

      })

})
