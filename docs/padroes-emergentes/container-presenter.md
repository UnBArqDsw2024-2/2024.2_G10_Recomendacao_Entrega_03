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


Durante a reunião pré-desenvolvimento da entrega, do dia 17/12/2024 com mais informações na [Ata da Reunião](https://unbarqdsw2024-2.github.io/2024.2_G10_Recomendacao_Entrega_03/#/atas-reuniao/ata-reuniao-17-12), foi definido que o padrão Container-Presenter seria uma boa opção de padrão para complementar nosso trabalho sendo aplicado ao Front-End. Após definido o Padrão, foram atribuidas as tarefas da seguinte maneira:

- **Júlia Rodrigues Yoshida**: Encarregada do texto de introdução ao padrão e a modelagem do diagrama de classes.  
- **Caio Mesquita Vieira**: Encarregado do desenvolvimento da metodologia.  
- **Luana de Lima Medeiros**: Encarregada da implementação do código modelado do padrão.  
- **Izabella Alves Pereira**: Encarregada pela conclusão do artefato e a consolidação dos aprendizados da equipe.

Feita a divisão, Seguimos para a introdução, modelagem e implementação do código por seus responsáveis.

## Modelagem

<p style="text-align: justify; text-indent: 2em;"> Com base no <a href="https://unbarqdsw2024-2.github.io/2024.2_G10_Recomendacao_Entrega_03/#/refatoracoes/diagrama-de-classes">diagrama de classes</a> e no <a href="https://unbarqdsw2024-2.github.io/2024.2_G10_Recomendacao_Entrega_03/#/refatoracoes/modelo-logico">modelo lógico de</a>, criamos o diagrama UML a seguir que mostra como o padrão Container-Presenter poderia ser aplicado no Chef Indica, considerando, por exemplo, a funcionalidade de gerenciamento de avaliações de restaurantes.</p>

<center>
<p style="text-align: center"><b>Figura 1:</b> Diagrama UML do Container Presenter.</p>
<div align="center">
  <img src="./imagens/containerpresenter.png" alt="Diagrama UML do Container Presenter" >
</div>
<font size="3"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/juliaryoshida">Júlia Yoshida</a>, 2024</p></font>
</center>

<p style="text-align: justify; text-indent: 2em;">  Como o foco do diagrama é demonstrar como utilizamos o padrão Container-Presenter no projeto Chef Indica, optamos por não incluir diretamente outras classes, como Restaurante, Avaliação e Usuário, no diagrama. No entanto, essas classes desempenham um papel importante no funcionamento da funcionalidade representada. Por exemplo, o Container interage com essas classes para buscar os dados necessários, como as informações do restaurante (classe Restaurante), as avaliações associadas (classe Avaliação) e os detalhes do cliente (classe Cliente, que está associada à classe Usuário). O Presenter, por sua vez, utiliza essas informações para exibi-las na interface, mas de forma indireta, acessando-as através de suas propriedades (props). Assim, enquanto as classes mencionadas não estão explicitamente representadas no diagrama, elas são utilizadas nos atributos e métodos do Container e do Presenter, mostrando sua importância na implementação da funcionalidade.</p>

<b>RestauranteAvaliacaoContainer</b>

<p style="text-align: justify; text-indent: 2em;"> Esta classe atua como o controlador da aplicação, sendo responsável pela lógica de negócio e manipulação dos dados relacionados ao restaurante e suas avaliações.</p>

- Atributos:
    - restaurante: Representa um objeto da classe Restaurante, contendo informações como nome, endereço, e outros atributos relacionados ao restaurante.
    - cliente: Representa o cliente (usuário autenticado) que está interagindo com o sistema.
    - avaliacoes: Um array de objetos da classe Avaliacao, que armazena as avaliações associadas ao restaurante.

- Métodos:
    - buscarDadosRestaurante(idRestaurante: int): void: Este método busca os dados do restaurante no banco de dados, utilizando o identificador do restaurante (idRestaurante) para carregar informações relacionadas.
    - publicarAvaliacao(dadosAvaliacao: Avaliacao): void: Responsável por processar e enviar uma nova avaliação do cliente para o restaurante.
    - arquivarAvaliacao(idAvaliacao: int): void: Método que atualiza o estado de uma avaliação específica para "arquivada", usando o identificador da avaliação (idAvaliacao).

Essa classe centraliza a lógica de interação com o banco de dados e manipulação dos dados, sendo uma ponte entre as camadas de apresentação e persistência.

<b>RestauranteAvaliacaoPresenter</b>

<p style="text-align: justify; text-indent: 2em;"> Essa classe é responsável pela apresentação dos dados gerenciados pelo Container. Sua principal função é renderizar as informações de forma adequada e delegar ações ao Container através de callbacks.</p>

- Atributos (props):
    - props.restaurante: Recebe os dados do restaurante fornecidos pelo Container.
    - props.cliente: Recebe os dados do cliente autenticado.
    - props.avaliacoes: Recebe a lista de avaliações carregadas pelo Container.
    - props.onPublicarAvaliacao: Callback que permite que o Presenter informe ao Container sobre uma nova avaliação a ser enviada.
    - props.onArquivarAvaliacao: Callback que permite que o Presenter solicite ao Container que uma avaliação seja arquivada.

- Métodos de renderização:
    - renderizarDetalhesRestaurante(): JSX: Renderiza os detalhes do restaurante, como nome, endereço e informações complementares.
    - renderizarFormularioAvaliacao(): JSX: Renderiza um formulário para o cliente inserir uma nova avaliação do restaurante.
    - renderizarAvaliacoes(): JSX: Renderiza a lista de avaliações existentes para o restaurante, incluindo opções para arquivar uma avaliação, se aplicável.

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
| `1.0`  |31/12/2024| Adição da introdução do documento |[Júlia Yoshida](https://github.com/juliaryoshida)|[Caio Mesquita](https://github.com/Caiomesvie)|
| `1.1`  |31/12/2024| Adição da modelagem do documento |[Júlia Yoshida](https://github.com/juliaryoshida)|[Caio Mesquita](https://github.com/Caiomesvie)|
| `1.2`  |31/12/2024| Adição da modelagem do documento |[Caio Mesquita](https://github.com/Caiomesvie)|[Júlia Yoshida](https://github.com/juliaryoshida)|