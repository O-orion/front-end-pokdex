import { mount } from "@vue/test-utils";
import PokemonStatus from "../components/PokemonStatus.vue";

describe('PokemonStatus.vuew', () => {

    it('Deve exibir o nome do status do pokemon', () => {
        const wrapper = mount(PokemonStatus, {
            props: {
                status: [ { stat: { name: "Hp" } }]
            }
        });

        const statusName = wrapper.find('.status-name').text();
        expect(statusName).toBe('Hp')

    })

    it('Deve exibir três status do pokemon', () => {
        const wrapper = mount(PokemonStatus, {
            props: {
                status: [ { stat: { name: "Hp" } }, { stat: { name: "Damage" } }, { stat: { name: "Especial Ataque" } }]
            }
        });

        const statusPokemon = wrapper.findAll('.status-name');
        expect(statusPokemon.length).toBe(3);

        // Verificando nome do primeiro status
        expect(statusPokemon[0].text()).toBe('Hp')

        // Verificando nome do segundo status
        expect(statusPokemon[1].text()).toBe('Damage')

        // Verificando nome do terceiro status
        expect(statusPokemon[2].text()).toBe('Especial Ataque')

    })

    it('Deve renderizar a barra de progresso com a largura correta', () => {
        const wrapper = mount(PokemonStatus, {
            props: {
                status: [{ stat: { name: "Hp" }, base_stat: 128 }]
            }
        });

        const progressBar = wrapper.find('.progress-bar');

        const expectedWidth = `${128 / 255 * 100}%`

        expect(progressBar.attributes('style')).toContain(`width: ${expectedWidth}`)

    })

    it('Deve conter nomes de status acessíveis', () => {
        const wrapper = mount(PokemonStatus, {
            props: {
                status: [{ stat: { name: "Hp" }, base_stat: 100 }]
            }
        });
    
        const statusName = wrapper.find('.status-name');
        expect(statusName.attributes('role')).toBe(undefined);
    });

    it('Deve renderizar corretamente com diferentes status (Snapshot)', () => {
        const wrapper = mount(PokemonStatus, {
            props: {
                status: [
                    { stat: { name: "Hp" }, base_stat: 64 },
                    { stat: { name: "Defense" }, base_stat: 100 }
                ]
            }
        });
    
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('Deve atualizar corretamente ao receber novos status', async () => {
        const wrapper = mount(PokemonStatus, {
            props: {
                status: [{ stat: { name: "Hp" }, base_stat: 64 }]
            }
        });
    
        // Alterando as props
        await wrapper.setProps({
            status: [{ stat: { name: "Speed" }, base_stat: 120 }]
        });
    
        const statusName = wrapper.find('.status-name').text();
        expect(statusName).toBe('Speed');
    });
    
    it('Deve renderizar corretamente sem status', () => {
        const wrapper = mount(PokemonStatus, {
            props: { status: [] }
        });
    
        const statusItems = wrapper.findAll('.box-status');
        expect(statusItems.length).toBe(0);
    });
    

})
