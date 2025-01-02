# Iterator

## Introdução

O padrão Iterator é um padrão de projeto comportamental que permite percorrer elementos de uma coleção sem expor sua representação interna. Ele separa a lógica de iteração da própria coleção, fornecendo uma interface uniforme para acessar seus elementos, independentemente do tipo ou estrutura da coleção. O Iterator encapsula os detalhes do percurso, oferecendo métodos para navegar pelos elementos, como acesso ao próximo item ou verificação do término da iteração [1].

Esse padrão é amplamente utilizado para aumentar a flexibilidade e reduzir o acoplamento entre a coleção e o código que interage com ela, promovendo maior aderência ao princípio de responsabilidade única e ao princípio aberto/fechado. No contexto de sistemas complexos, o Iterator simplifica o trabalho com estruturas de dados heterogêneas ou personalizadas, facilitando sua integração e manipulação [2].

## Metodologia

No sistema de recomendação de restaurantes, o padrão de projeto Iterator é utilizado para gerenciar a relação entre as classes Restaurante e Menu, permitindo que itens do menu de um restaurante sejam percorridos de forma encapsulada e uniforme, sem expor detalhes sobre a estrutura interna da coleção de itens.A implementação segue uma abordagem estruturada, onde é definida uma interface de iterador, que contém os métodos necessários para navegar pela coleção, como proximo() e anterior(). Essa interface é implementada por uma classe concreta, que fornece a lógica de iteração sobre os itens do menu.

Simultaneamente, a classe Menu implementa uma interface de coleção que define um método para criar instâncias do iterador, permitindo que os clientes obtenham o iterador sem precisar conhecer os detalhes da coleção. Cada restaurante possui um menu associado, e esse menu pode ser percorrido usando o iterador fornecido. Dessa forma, a lógica de navegação é centralizada, promovendo encapsulamento e flexibilidade, ao mesmo tempo que a estrutura de dados subjacente pode ser alterada sem impactar o código cliente. Essa metodologia garante uma separação clara de responsabilidades, tornando o sistema modular, reutilizável e fácil de manter.

Essa metodologia garante que a lógica de navegação esteja desacoplada da estrutura dos menus, facilitando alterações futuras, como a inclusão de novos tipos ou reorganização das categorias. Além disso, promove modularidade, reutilização e alinhamento com os princípios de design orientado a objetos, como encapsulamento e separação de responsabilidades, tornando o sistema mais robusto e de fácil manutenção.

## Modelagem

No sistema, o padrão de projeto Iterator é implementado para a relação entre as classes Restaurante e Menu. Cada instância de Restaurante possui um conjunto de menus, e o Iterator é responsável por iterar sobre esses menus de forma estruturada.

A modelagem apresentada na Figura 1 descreve os métodos e atributos das classes Restaurante, Menu e Prato, além de outras classes representadas no diagrama. Detalhes adicionais sobre a estrutura dessas classes podem ser consultados  no [Diagrama de Classes](https://unbarqdsw2024-2.github.io/2024.2_G10_Recomendacao_Entrega_03/#/refatoracoes/diagrama-de-classes) e no [Modelo lógico do banco de dados](https://unbarqdsw2024-2.github.io/2024.2_G10_Recomendacao_Entrega_03/#/refatoracoes/modelo-logico).

<center>
<p style="text-align: center"><b>Figura 1:</b> Diagrama UML para o Iterator utilizado no projeto.</p>
<div align="center">
  <img src="https://raw.githubusercontent.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/refs/heads/main/docs/imagens/diagrama_iterator.png" alt="Diagrama de classes do Iterator" >
</div>
<font size="3"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/PedroSampaioDias">Pedro Sampaio</a>, 2024</p></font>
</center>

## Código

O código do Iterator encontra-se nos arquivos [RestauranteController](https://github.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/blob/main/backend/api/src/main/java/com/api/API/controllers/RestauranteController.java), [Menu](https://github.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/blob/main/backend/api/src/main/java/com/api/API/models/Menu.java), [Prato](https://github.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/blob/main/backend/api/src/main/java/com/api/API/models/Prato.java), [Restaurante](https://github.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/blob/main/backend/api/src/main/java/com/api/API/models/Restaurante.java), [ColecaoIterador](https://github.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/blob/main/backend/api/src/main/java/com/api/API/models/iterator/ColecaoIterador.java), [Iterador](https://github.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/blob/main/backend/api/src/main/java/com/api/API/models/iterator/Iterador.java) e [IteradorConcreto](https://github.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/blob/main/backend/api/src/main/java/com/api/API/models/iterator/IteradorConcreto.java). 

Abaixo, estão imagens da implementação.

<center>
<p style="text-align: center"><b>Figura 2:</b> Código da interface do iterador </p>
<div align="center">
  <img src="https://raw.githubusercontent.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/refs/heads/main/docs/imagens/iterador-iterator.png" alt="Código da interface de iterator" >
</div>
<font size="3"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/lucasqueiroz23">Lucas Queiroz</a> e <a href="https://github.com/zenildavieira">Zenilda Vieira</a>, 2024</p></font>
</center>

<center>
<p style="text-align: center"><b>Figura 3:</b> Código do Menu para iterador </p>
<div align="center">
  <img src="https://raw.githubusercontent.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/refs/heads/main/docs/imagens/menu-iterator.png" alt="Código do menu para iterator" >
</div>
<font size="3"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/lucasqueiroz23">Lucas Queiroz</a> e <a href="https://github.com/zenildavieira">Zenilda Vieira</a>, 2024</p></font>
</center>

<center>
<p style="text-align: center"><b>Figura 4:</b> Código do Prato para iterador </p>
<div align="center">
  <img src="https://raw.githubusercontent.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/refs/heads/main/docs/imagens/prato-iterator.png" alt="Código do prato para iterator" >
</div>
<font size="3"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/lucasqueiroz23">Lucas Queiroz</a> e <a href="https://github.com/zenildavieira">Zenilda Vieira</a>, 2024</p></font>
</center>

<center>
<p style="text-align: center"><b>Figura 5:</b> Código do Restaurante para iterador </p>
<div align="center">
  <img src="https://raw.githubusercontent.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/refs/heads/main/docs/imagens/restaurante-iterator.png" alt="Código do restaurante para iterator" >
</div>
<font size="3"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/lucasqueiroz23">Lucas Queiroz</a> e <a href="https://github.com/zenildavieira">Zenilda Vieira</a>, 2024</p></font>
</center>

<center>
<p style="text-align: center"><b>Figura 6:</b> Primeira parte do código do iterador concreto </p>
<div align="center">
  <img src="https://raw.githubusercontent.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/refs/heads/main/docs/imagens/iterador-concreto-1-iterator.png" alt="Primeira parte do código do iterador concreto" >
</div>
<font size="3"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/lucasqueiroz23">Lucas Queiroz</a> e <a href="https://github.com/zenildavieira">Zenilda Vieira</a>, 2024</p></font>
</center>


<center>
<p style="text-align: center"><b>Figura 7:</b> Segunda parte do código do iterador concreto </p>
<div align="center">
  <img src="https://raw.githubusercontent.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/refs/heads/main/docs/imagens/iterador-concreto-2-iterator.png" alt="Segunda parte do código do iterador concreto" >
</div>
<font size="3"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/lucasqueiroz23">Lucas Queiroz</a> e <a href="https://github.com/zenildavieira">Zenilda Vieira</a>, 2024</p></font>
</center>

<center>
<p style="text-align: center"><b>Figura 8:</b> Primeira parte do código do RestauranteController</p>
<div align="center">
  <img src="https://raw.githubusercontent.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/refs/heads/main/docs/imagens/restaurante-controller-1-iterator.png" alt="Primeira parte do código do restaurantecontroller" >
</div>
<font size="3"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/lucasqueiroz23">Lucas Queiroz</a> e <a href="https://github.com/zenildavieira">Zenilda Vieira</a>, 2024</p></font>
</center>


<center>
<p style="text-align: center"><b>Figura 9:</b> Segunda parte do código do RestauranteController</p>
<div align="center">
  <img src="https://raw.githubusercontent.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/refs/heads/main/docs/imagens/restaurante-controller-2-iterator.png" alt="Segunda parte do código do restaurantecontroller" >
</div>
<font size="3"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/lucasqueiroz23">Lucas Queiroz</a> e <a href="https://github.com/zenildavieira">Zenilda Vieira</a>, 2024</p></font>
</center>

<center>
<p style="text-align: center"><b>Figura 10:</b> Terceira parte do código do RestauranteController</p>
<div align="center">
  <img src="https://raw.githubusercontent.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/refs/heads/main/docs/imagens/restaurante-controller-3-iterator.png" alt="Terceira parte do código do restaurantecontroller" >
</div>
<font size="3"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/lucasqueiroz23">Lucas Queiroz</a> e <a href="https://github.com/zenildavieira">Zenilda Vieira</a>, 2024</p></font>
</center>

## Conclusão

## Referências Bibliográficas

> [1] Refactoring Guru. "Iterator Design Pattern". Disponível em: https://refactoring.guru/design-patterns/iterator
> 
> [2] GeeksforGeeks. "Iterator Pattern". Disponível em: https://www.geeksforgeeks.org/iterator-pattern/

## Bibliografia

## Histórico de Versões

| Versão | Data       | Descrição                        | Autor                                                                                                   | Revisor                                            |
|:------:| ---------- | -------------------------------- | ------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| `1.0`  | 24/12/2024 | Adição do modelo e da introdução | [Pedro Sampaio](https://github.com/PedroSampaioDias)                                                    | [Guilherme Brito](https://github.com/GuilhermeB12) |
| `1.1`  | 24/12/2024 | Adição da metodologia            | [Guilherme Brito](https://github.com/GuilhermeB12)                                                      | [Lucas Queiroz](https://github.com/lucasqueiroz23) |
| `1.2`  | 02/01/2025 | Adição do código                 | [Lucas Queiroz](https://github.com/lucasqueiroz23) e [Zenilda Vieira](https://github.com/zenildavieira) |                                                    |
