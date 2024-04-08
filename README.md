# Documentação da API Triângulo

## Introdução

 Este projeto foi desenvolvido do zero por mim 😁 para gerenciar informações sobre triângulos. O objetivo principal desta API é fornecer funcionalidades para criar, listar, obter, atualizar e excluir triângulos, além de classificá-los automaticamente com base nos comprimentos de seus lados. O projeto também inclui casos de teste automatizados utilizando o framework Cypress.

## Motivação

A motivação por trás deste projeto foi a necessidade de desenvolver uma API robusta que permitisse a implementação de uma ampla gama de casos de teste automatizados. O objetivo era fornecer funcionalidades abrangentes para manipulação dos dados e garantir a prática dos meus estudos por meio desses testes.
## Arquitetura do Projeto

A API Triângulo foi desenvolvida seguindo uma arquitetura MVC (Model-View-Controller), que é uma abordagem de organização de código amplamente utilizada em projetos web. A arquitetura do projeto é composta por:

- **Modelo (Model):** Representa a estrutura de dados do triângulo e inclui a definição do schema do MongoDB utilizando o [Mongoose](https://mongoosejs.com/).
- **Visão (View):** Não aplicável, pois este é um projeto de API REST, portanto não há uma camada de visualização separada.
- **Controlador (Controller):** Contém a lógica de negócios da aplicação, incluindo a implementação das rotas e das funções para manipulação dos triângulos.

Além disso, a estrutura do projeto segue uma organização modular, com separação clara de responsabilidades entre os diferentes componentes. A integração contínua é realizada por meio do [GitHub Actions](https://github.com/features/actions), garantindo que o código seja construído e testado automaticamente sempre que houver uma alteração.

## Frameworks Utilizados

Os principais frameworks e bibliotecas utilizados neste projeto são:

- [Node.js:](https://nodejs.org/) Ambiente de execução JavaScript do lado do servidor.
- [Express:](https://expressjs.com/) Framework web para Node.js utilizado para criar APIs RESTful de forma rápida e fácil.
- [MongoDB:](https://www.mongodb.com/) Banco de dados NoSQL utilizado para armazenar os dados dos triângulos.
- [Mongoose:](https://mongoosejs.com/) Biblioteca do Node.js para modelar os objetos do MongoDB.
- [Cypress:](https://www.cypress.io/) Framework utilizado para realizar testes automatizados via endpoint.

Além desses, também foram utilizadas outras bibliotecas menores para funcionalidades específicas, como o dotenv para gerenciar variáveis de ambiente e o eslint para garantir a consistência do código.

## Próximos Passos

Os próximos passos para este projeto incluem:

- [ ] Implementação dos casos de teste automatizados para cobrir o máximo dos cenários possíveis.
- [x] Integração com ferramentas de CI/CD (Continuous Integration/Continuous Deployment) para automatizar o processo de implantação.
- [ ] Melhorias na documentação da API, incluindo exemplos de uso e possíveis cenários de erro.
- [ ] Adição de mais funcionalidades, como suporte para cálculos avançados de triângulos.
