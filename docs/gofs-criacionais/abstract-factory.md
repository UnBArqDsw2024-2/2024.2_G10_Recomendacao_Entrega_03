# Abstract Factory

## Introdução

Os padrões GoF (Gang of Four) foram definidos pelos autores Erich Gamma, Richard Helm, Ralph Johnson e John Vlissides no livro Design Patterns: Elements of Reusable Object-Oriented Software [1]. Eles são classificados em três categorias:

* Padrões Criacionais: Lidam com a criação de objetos.
* Padrões Estruturais: Lidam com a composição de classes e objetos.
* Padrões Comportamentais: Lidam com a interação entre objetos.

Destacando os padrões criacionais de design, eles têm como objetivo principal abstrair e otimizar o processo de criação de objetos. Eles ajudam a tornar os sistemas mais independentes de como os objetos são criados, compostos e representados. Em vez de instanciar diretamente objetos concretos, esses padrões promovem o uso de interfaces e classes abstratas, permitindo maior flexibilidade, reuso de código e desacoplamento.

Existem vários padrões criacionais destacados pelos GoF, tais como:

* Factory Method: Define uma interface para criar um objeto, mas permite que as subclasses decidam qual classe será instanciada.
* Abstract Factory: Oferece uma interface para criar famílias de objetos relacionados ou interdependentes sem especificar suas classes concretas.
* Builder: Separa a construção de um objeto complexo de sua representação.
* Prototype: Cria novos objetos copiando uma instância existente.
* Singleton: Garante que uma classe tenha apenas uma instância e fornece um ponto de acesso global.
  
Esse documento trata da implementação do padrão de design *Abstract Factory* devido à escolha feita pelo grupo (conforme é descrito no tópico Metodologia mais abaixo).

### O Padrão Abstract Factory

O Abstract Factory é um padrão criacional que abstrai o processo de criação de famílias de objetos relacionados. Seu principal objetivo é garantir que o código cliente permaneça independente das implementações concretas dos objetos que utiliza e reduzir sua carga de processamento.

Para uma implementação de vários produtos e várias hierarquias, como o exemplo a seguir, o padrão geralmente segue esta estrutura:

* Client: Usa apenas interfaces fornecidas pelas fábricas e produtos abstratos.
* AbstractProductA, AbstractProductB: Define uma interface para cada tipo de produto.
* ProductA1, ProductA2, ProductB1, ProductB2: Implementa a interface de cada produto abstrato.
* AbstractFactory: Declara métodos para criar cada tipo de produto abstrato.
* ConcreteFactory1, ConcreteFactory2: Implementa os métodos declarados, criando produtos concretos.

O uso do padrão de design criacional *Abstract Factory* se justifica principalmente quando a entidade Cliente apresenta baixo desempenho, com sobrecarga de atividades. Assim, a criação de uma hierarquia com a única função de criar as instâncias alivia o processamento da entidade Cliente e traz também outros benefícios:

1. Isolamento de Classes Concretas: Os clientes manipulam objetos através de suas interfaces, sem precisar conhecer as classes concretas.
2. Facilidade de Troca de Famílias de Produtos: Alterar uma família de produtos envolve apenas trocar a fábrica concreta usada pelo sistema.
3. Consistência entre Produtos: Como as fábricas criam objetos interdependentes, garantem que os objetos produzidos sejam compatíveis entre si.
4. Modularidade na inclusão de novas Família de Produtos: Para acrescentar uma família de produtos, basta adicionar a fábrica concreta correspondente e fazer poucas adições aos códigos existentes (basicamente alguns métodos e criações de instâncias).

## Metodologia

### Processo de tomada de decisão para o uso de Abstract Factory 

<p style="text-align: justify; text-indent: 2em;"> Com base no <a href="https://unbarqdsw2024-2.github.io/2024.2_G10_Recomendacao_Entrega_03/#/refatoracoes/diagrama-de-classes">diagrama de classes refatorado</a>, é possível perceber que o sistema Chef Indica lida com uma grande variedade de entidades inter-relacionadas, como Usuários, Restaurantes, Pratos, Avaliações (texto, vídeo, imagem) e seus atributos específicos. Assim, o projeto requer a criação consistente de objetos complexos para suportar:</p>

- Múltiplos tipos de avaliações (texto, vídeo, imagem) e notificações;
- Diferentes categorias de restaurantes e menus personalizados;
- Funcionalidades específicas para clientes e funcionários.

#### Discussões e Divergências

<p style="text-align: justify; text-indent: 2em;"> Nos reunimos presencialmente após a aula de Arquitetura e Desenho de Software no dia 16/12. Durante a reunião do grupo, surgiram debates sobre a melhor abordagem para gerenciar a criação desses objetos:</p>

<b>1. Factory Method</b>

<p style="text-align: justify; text-indent: 2em;">Inicialmente, alguns membros sugeriram o uso do Factory Method para encapsular a lógica de criação de objetos. Essa abordagem parecia viável para a criação de objetos isolados, como Avaliações individuais. Porém, ao analisarmos o diagrama de classes, percebemos que:</p>

- As entidades AvaliaçãoTexto, AvaliaçãoImagem e AvaliaçãoVídeo pertencem à mesma família de objetos e compartilham características comuns.
- <p style="text-align: justify;">O Factory Method não seria suficiente para gerenciar a criação de famílias inteiras de objetos relacionados (ex.: Avaliações e Notificações), levando a duplicidade de código ao lidar com essas dependências.</p>

<b>2. Builder</b>
<p style="text-align: justify; text-indent: 2em;">Outros sugeriram o uso do Builder, que é eficiente para construir objetos complexos com muitos atributos opcionais. Durante a análise, consideramos sua utilização para:</p>

- Configurar objetos detalhados, como Menus personalizados para restaurantes.

<p style="text-align: justify; text-indent: 2em;">No entanto, identificamos uma limitação crítica: o Builder é projetado para a construção passo a passo de um único objeto por vez. Isso não atenderia à necessidade de criar grupos consistentes de objetos interconectados, como as diferentes variações de Avaliação e Notificação que precisam ser tratadas em conjunto.</p>

<b>3. Abstract Factory</b>

<p style="text-align: justify; text-indent: 2em;">Por fim, alguns membros propuseram o uso do Abstract Factory, destacando sua capacidade de:</p>

- Criar famílias de objetos relacionados, como as variações de Avaliação (Texto, Imagem e Vídeo) e as Notificações, de forma consistente.
- Promover a extensibilidade e modularidade do sistema, permitindo integrações futuras sem impacto nas implementações existentes.

#### Escolha

<p style="text-align: justify; text-indent: 2em;">A escolha pelo Abstract Factory foi definida em consenso após considerar:</p>

<b>1. Consistência com o diagrama de classes</b>

- Entidades como AvaliaçãoTexto, AvaliaçãoImagem e AvaliaçãoVídeo pertencem à mesma família de objetos e compartilham características comuns.
- O uso de fábricas permite criar diferentes variações de Avaliação ou Notificação sem duplicação de código.

<b>2. Modularidade e Escalabilidade</b>
- <p style="text-align: justify;">A arquitetura proposta requer módulos independentes para funcionalidades como Favoritos, Destaques e Notificações. O Abstract Factory garante que novos tipos de módulos possam ser adicionados sem impactar o restante do sistema.</p>

<b>3. Requisitos de extensibilidade</b>
- O padrão atende ao princípio Open/Closed, facilitando a adição de novos tipos de avaliações ou categorias de restaurantes sem alterar implementações existentes.

## Modelagem

Após a escolha do grupo, ficou decidido que o padrão de design *Abstract Factory* seria aplicado à criação de objetos relacionados aos tipos de avaliação do sistema Chef Indica, pois cada tipo de avaliação possui características distintas (texto, vídeo, imagem), mas compartilham a mesma interface base. Observou-se que se o sistema precisasse trocar o tipo de avaliação (por exemplo, migrar para avaliações exclusivamente por vídeo), bastaria mudar a fábrica utilizada, sem alterar o código cliente.

* Implementação:
    - Client: Avaliacao
    - AbstractProducts:
        . AvaliaçaoTexto, AvaliaçaoVideo, AvaliaçaoImagem.
    - AbstractFactory: AvaliacaoFactory
        . Métodos: criarAvaliacaoTexto(), criarAvaliacaoVideo(), criarAvaliacaoImagem()
    - ConcreteFactories:
        . AvaliacaoCompletaFactory - fábrica que cria instâncias de todos os tipos.
        . AvaliacaoTextoFactory - fábrica que cria instâncias apenas de textos, para ambientes com foco textual.

Na figura 1 é possível observar o modelo de domínio criado:

<p style="text-align: center"><b>Figura 1:</b> Modelo de domínio do Abstract Factory utilizado no projeto.</p>
<div align="center">
  <img src="https://raw.githubusercontent.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/refs/heads/main/docs/imagens/diagrama-abstract-factory2.png?raw=true" alt="Modelo de domínio do Abstract Factory" >
</div>
<font size="3"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/zenildavieira">Zenilda Vieira</a>, 2024</p></font>


## Código

## Conclusão

## Referências Bibliográficas
> [1] GAMMA, Erich; HELM, Richard; JOHNSON, Ralph; VLISSIDES, John. Design Patterns: Elements of Reusable Object-Oriented Software. Addison-Wesley, 1994.
>
> 
## Bibliografia

## Histórico de Versões

| Versão | Data | Descrição | Autor | Revisor |
| :----: | ---- | --------- | ----- | ------- |
| `1.0`  |25/12/2024| Adição da tomada de decisão | [Júlia Yoshida](https://github.com/juliaryoshida) |[Zenilda Vieira](https://github.com/zenildavieira)  |
| `1.1`  |27/12/2024| Adição da introdução teórica e modelagem | [Júlia Yoshida](https://github.com/juliaryoshida) |[Zenilda Vieira](https://github.com/zenildavieira)  |