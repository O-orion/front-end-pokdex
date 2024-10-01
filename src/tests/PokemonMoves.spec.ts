import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import PokemonMoves from '../components/PokemonMoves.vue';

describe('PokemonMoves.vue', () => {

  it('renderiza o componente corretamente', () => {
    const wrapper = mount(PokemonMoves, {
      props: {
        moves: [],
        background: '#fff'
      }
    });
    
    expect(wrapper.exists()).toBe(true);
  });

  it('exibe os movimentos corretamente', () => {
    const moves = [
      { move: { name: 'thunderbolt' } },
      { move: { name: 'quick-attack' } }
    ];

    const wrapper = mount(PokemonMoves, {
      props: {
        moves,
        background: '#f5f5f5'
      }
    });

    const moveElements = wrapper.findAll('.box-move p');

     // Deve haver dois movimentos
    expect(moveElements.length).toBe(2);

    // Verifica o nome do primeiro movimento
    expect(moveElements[0].text()).toBe('thunderbolt');

    // Verifica o nome do segundo movimento
    expect(moveElements[1].text()).toBe('quick-attack');
  });

  // Teste para verificar se a cor de fundo é aplicada corretamente
  it('aplica a cor de fundo corretamente', () => {
    const wrapper = mount(PokemonMoves, {
      props: {
        moves: [{ move: { name: 'tackle' } }],
        background: '#00ff00'
      }
    });

    const moveBox = wrapper.find('.box-move');
    expect(moveBox.attributes('style')).toContain('background-color: rgb(0, 255, 0)');
  });
});
