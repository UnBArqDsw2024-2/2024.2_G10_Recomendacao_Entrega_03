# Composite

## Introdução

O padrão de projeto Composite é uma solução estrutural amplamente utilizada para representar hierarquias de objetos em forma de árvore, permitindo que um grupo de objetos seja tratado como um único objeto. Ele é particularmente útil em cenários onde há a necessidade de manipular coleções de elementos compostos por subelementos, de maneira uniforme e recursiva (Gamma et al., 1995) [1].

O Composite visa unificar o tratamento de objetos simples e compostos, encapsulando as diferenças de implementação por meio de uma interface comum. Assim, é possível realizar operações de forma uniforme, independentemente de um elemento ser básico ou composto por outros elementos. Isso é especialmente valioso em sistemas que requerem flexibilidade para trabalhar com estruturas de dados aninhadas (Freeman et al., 2004) [2].

O padrão é indicado para aplicações cujo modelo central pode ser representado como uma árvore, como ocorre frequentemente em sistemas de pedidos ou catálogos hierárquicos. Considere um cenário onde há dois tipos de objetos: Produtos e Caixas. Uma Caixa pode conter tanto Produtos quanto outras Caixas menores, gerando um nível arbitrário de aninhamento. 

Para calcular, por exemplo, o preço total de um pedido, seria necessário iterar sobre todos os elementos dessa estrutura. No entanto, realizar esse cálculo diretamente exige o conhecimento prévio das classes específicas envolvidas, do nível de aninhamento e de como processar cada tipo de objeto, resultando em um código altamente acoplado e difícil de manter.

Esse exemplo foi inspirado no material do site Refactoring Guru [3], que utiliza a metáfora de caixas e produtos para ilustrar o problema que o Composite resolve.

O padrão Composite resolve esse problema ao introduzir uma interface comum, como Component, que declara operações que podem ser executadas uniformemente sobre objetos simples e compostos, como é possível ver na figura 1.


<center>
<p style="text-align: center"><b>Figura 1:</b> Exemplo de diagrama UML pro padrão de projeto Composite</p>
<div align="center">
  <img src="https://raw.githubusercontent.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/refs/heads/main/docs/imagens/composite-example.png?raw=true" alt="Imagem do Rich Picture" >
</div>
<font size="3"><p style="text-align: center"><b>Fonte:</b> Vinicius Climaco, 2022</p></font>
</center>

Podemos interpretar as classes descritas na imagem da seguinte forma:

- Component: Interface comum que define as operações para folhas e compostos.
- Leaf: Implementa a interface Component e representa os elementos simples da hierarquia.
- Composite: Implementa a interface Component, mas gerencia filhos e delega operações para eles.

## Metodologia

## Modelagem

A primeira versão do diagrama de classes criado para modelar como o padrão de projeto Composite será utilizado na aplicação Chef Indica está disponível na figura 2. Na figura, temos "ItemCardapio" como interface comum, que vai definir as operações comuns (```getCategoria() e getPreco()```) e as operações utilizadas somente por alguma das classes.

Os elementos Tiramisù, Petit Gâteau e Pudim são os Itens Simples do cardápio e, portanto, implementam a interface ItemCardapio diretamente. Eles são folhas porque não contêm outros itens.

A classe Sobremesas representa um grupo de itens do cardápio. É uma categoria que pode conter tanto itens simples, como o Tiramisù, o Petit Gâteau e o Pudim, e também outras sobremesas não descritas no exemplo.

<center>
<p style="text-align: center"><b>Figura 2:</b> Primeira versão do Diagrama de Classes do Padrão Composite</p>
<div align="center">
  <img src="https://raw.githubusercontent.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/refs/heads/main/docs/imagens/composite-chefindica1.png?raw=true" alt="Imagem do Rich Picture" >
</div>
<font size="3"><p style="text-align: center"><b>Fonte:</b> Izabella Alves, 2024.</p></font>
</center>

## Código

## Conclusão

## Referências Bibliográficas


>
> [1] Gamma, E., Helm, R., Johnson, R., & Vlissides, J. (1995). Design Patterns: Elements of Reusable Object-Oriented Software. Addison-Wesley.
>
> [2] Freeman, E., Robson, E., Bates, B., & Sierra, K. (2004). Head First Design Patterns. O'Reilly Media.
>
> [3] Refactoring Guru. Composite Design Pattern. Disponível em: <https://refactoring.guru/pt-br/design-patterns/composite>. Acessado em 19 de dezembro de 2024.
>

## Bibliografia

>
> Climaco, Vinicius. Design Pattern: Composite (2022). Disponível em: <https://climaco.medium.com/design-pattern-composite-7fcc39c08ff2>. Acessado em 19 de dezembro de 2024.
>

## Histórico de Versões

| Versão | Data | Descrição | Autor | Revisor |
| :----: | ---- | --------- | ----- | ------- |
| `1.0`  |19/12/2024| Adiciona introdução e primeira versao do diagrama de classes |[Izabella Alves](https://github.com/izabellaalves)|[Zenilda Vieira](https://github.com/ZenildaVieira)|