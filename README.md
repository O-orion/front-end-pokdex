
# 🎮 Pokémon Explorer 🎮

Esta aplicação foi desenvolvida para oferecer uma experiência envolvente de exploração dos Pokémon utilizando Vue 3 com TypeScript e Vite. A ideia é fornecer uma interface intuitiva, fluida e moderna, utilizando boas práticas de desenvolvimento front-end, incluindo testes unitários, modularização, gerenciamento de estado com Pinia, conexão com a API de Pokémon.


## Tecnologias

🛠️ Tecnologias Utilizadas

Vue 3 - A mais recente versão do Vue, escrita de componentes mais limpa e performática.

TypeScript - Foi utilizado o sistema de tipos do TypeScript para garantir a segurança e escalabilidade do código.

Vite - Ferramenta de build extremamente rápida, que melhora o desempenho durante o desenvolvimento.

Pinia - Gerenciamento de estado global, para facilitar a gestão dos dados da aplicação.

Vue Router - Para gerenciar as rotas e a navegação entre diferentes páginas da aplicação.
API de Pokémon - Consumimos a API pública de Pokémon para buscar todos os dados sobre os personagens e suas características.

Testes Unitários - Implementamos testes com vitest e @vue/test-utils para garantir que cada parte da aplicação funcione corretamente.
## 🎨 Experiência do Usuário (UX)

Interface limpa e responsiva: A aplicação foi projetada com uma interface moderna, leve e fluida, que se adapta a qualquer tipo de dispositivo (mobile, tablet, desktop).

Performance: Graças ao Vite e à modularização, foi obtido uma aplicação rápida e que carrega de forma eficiente, mesmo com grandes quantidades de dados.
## 🔄 Conexão com a API do Pokémon

A aplicação consome dados diretamente da Pokémon API, apresentando os detalhes de cada Pokémon, incluindo:

Nome, habilidades, tipos e estatísticas;
Sprites frontais e traseiros, tanto normais quanto shiny;
## 🧩 Arquitetura Modular

Foi adotado a modularização para tornar o código mais escalável e de fácil manutenção. Cada responsabilidade foi separada em módulos diferentes:

Stores: Pinia para armazenar o estado da aplicação. Aqui, os dados dos Pokémon são armazenados para serem acessados de forma global.

Services: Serviços para centralizar as requisições HTTP à API de Pokémon. Isso facilita a manutenção e o reaproveitamento de código.

Types e Enums: Foi definido claramente os tipos de dados para garantir a segurança e previsibilidade com TypeScript.
## 🧪 Testes Unitários

Os componentes principais da aplicação estão cobertos por testes unitários utilizando vitest e @vue/test-utils. Os testes garantem:

Que os componentes renderizam corretamente com base nas props recebidas;

Que o gerenciamento de estado via Pinia funcione conforme esperado.
## 🏗️ Estrutura do Projeto

```bash
src/
├── components/       # Componentes Vue individuais
├── services/         # Serviços para consumo da API
├── stores/           # Gerenciamento de estado com Pinia
├── types/            # Definições de tipos TypeScript
├── enums/            # Enums utilizados pela aplicação
├── styles/           # Estilos globais e específicos dos componentes
├── tests/            # Testes unitários para os componentes
└── views/            # Páginas e visualizações principais

```
## 🚀 Como rodar o projeto?

1 - Instale as dependências:

```bash
npm install
```

2 - Rode o projeto localmente:
``` bash
npm run dev
```
## Stack utilizada

**Front-end:** Vue, Pinia

**APi:** PokeApi


## Autores

- [@Lucas Viana Torres](https://github.com/o-orion)


## Etiquetas


[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)

[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)

[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)

![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)

![TYPESCRIPT](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
