# Abstract Factory

## Introdução

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

## Código

## Conclusão

## Referências Bibliográficas

## Bibliografia

## Histórico de Versões

| Versão | Data | Descrição | Autor | Revisor |
| :----: | ---- | --------- | ----- | ------- |
| `1.0`  |25/12/2024| Adição da tomada de decisão | [Júlia Yoshida](https://github.com/juliaryoshida) |[xxxx](xxxx)  |