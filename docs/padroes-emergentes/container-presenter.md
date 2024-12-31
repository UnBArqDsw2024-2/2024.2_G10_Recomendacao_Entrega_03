# Container Presenter Pattern

## Introdução

<p style="text-align: justify; text-indent: 2em;"> No desenvolvimento de aplicações React, a modularidade e a separação de responsabilidades são princípios centrais para criar soluções escaláveis e fáceis de manter. O padrão Container-Presenter surge como uma abordagem arquitetural prática que organiza componentes ao dividir suas responsabilidades em duas camadas principais: </p>

- Container (Contêiner): É responsável por gerenciar a lógica de negócios, como buscar dados, manipular estado e gerenciar eventos.
- Presenter (Apresentador): É dedicado exclusivamente à exibição da interface de usuário, sendo desacoplado de qualquer lógica de negócios e recebendo informações por meio de props.

<p style="text-align: justify; text-indent: 2em;"> Esse padrão foi popularizado por Dan Abramov, criador do Redux<sup>1</sup>, que destacou a importância de dividir componentes entre aqueles que gerenciam dados e aqueles que apresentam a interface (Abramov, 2015)[1]. Em seu artigo Presentational and Container Components, ele aponta que essa separação melhora a clareza do código, facilita a manutenção e promove a reutilização de componentes.</p>

<p style="text-align: justify; text-indent: 2em;"> Autores como Michele Bertoli em React Design Patterns and Best Practices (2017)[2] e Alex Banks e Eve Porcello em Learning React (2020)[3] também exploram a importância desse padrão. Eles reforçam que o Container-Presenter não apenas organiza o código, mas também reflete os princípios do React, como composição e unidirecionalidade de dados.</p>

### Benefícios do Padrão Container-Presenter

- Modularidade: Cada componente tem uma responsabilidade clara, facilitando a leitura e manutenção do código.
- Reutilização: Componentes de apresentação podem ser usados em diferentes contextos, já que não dependem diretamente de lógica ou estado.
- Testabilidade: A separação facilita a criação de testes específicos para lógica de negócios e para a interface de usuário.
- Manutenibilidade: Alterações na lógica de negócios ou na apresentação podem ser feitas sem impactar a outra camada.

## Metodologia

## Modelagem

## Código

## Conclusão


#### Conceitos

<p id="conceito1" style="text-align: justify;"><sup>1</sup>: O <b>Redux</b> é uma biblioteca JavaScript de gerenciamento de estado previsível, criada por Dan Abramov e Andrew Clark em 2015. Ele centraliza o estado da aplicação em uma única store, garantindo que mudanças sejam controladas por ações e reducers, facilitando a depuração, a escalabilidade e a manutenção.</p>

## Referências Bibliográficas

> [1] ABRAMOV, Dan. Presentational and Container Components. Medium, 2015. Disponível em: https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0. Acesso em: 31 dez. 2024.
>
> [2] BANKS, Alex; PORCELLO, Eve. Learning React: modern patterns for developing React apps. Sebastopol: O'Reilly Media, 2020.
>
> [3] BERTOLI, Michele. React Design Patterns and Best Practices. Birmingham: Packt Publishing, 2017.


## Histórico de Versões

| Versão | Data | Descrição | Autor | Revisor |
| :----: | ---- | --------- | ----- | ------- |
| `1.0`  |31/12/2024| Adição da introdução do documento |[Júlia Yoshida](https://github.com/juliaryoshida)|--|