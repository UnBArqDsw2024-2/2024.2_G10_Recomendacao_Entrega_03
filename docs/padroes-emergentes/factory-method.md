# Factory Method

## Introdução   
O Factory Method é um dos padrões de projeto criacionais definidos por Gang of Four (GoF), cujo objetivo principal é fornecer uma interface para criar objetos em uma classe-mãe, permitindo que as subclasses decidam qual objeto será instanciado. Em outras palavras, ele delega a lógica de criação de objetos para subclasses ou métodos especializados, promovendo flexibilidade e encapsulamento.

O padrão Factory Method é utilizado principalmente para resolver problemas relacionados à criação de objetos em situações onde a lógica de instanciamento pode ser complexa, variar em diferentes contextos, ou quando há a necessidade de desacoplar a criação do objeto da sua utilização. Ele oferece uma maneira flexível de criar objetos, sem expor a lógica de instanciamento ao cliente, permitindo que as subclasses ou métodos especializados decidam qual tipo de objeto será criado.

## Metodologia

## Modelagem
No diagrama de classes desenvolvido, utilizamos o factory method para a construção de um sistema de recomendação de restaurantes. A estrutura modular permite a adição de novos tipos de recomendação e a personalização dos algoritmos de acordo com as necessidades específicas.

A introdução da classe **RecommendationFactory** unifica a lógica comum a todos os tipos de recomendação, como a obtenção de restaurantes e a aplicação de filtros. As classes concretas, como **RecommendationByLocation**, **RecommendationByCuisine** e **RecommendationByRating**, herdam dessa classe base e implementam a lógica específica para cada critério.

<center>
<p style="text-align: center"><b>Figura 1:</b> Exemplo de diagrama UML pro padrão de factory method</p>
<div align="center">
  <img src="https://raw.githubusercontent.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/refs/heads/main/docs/imagens/docs/imagens/diagrama_factory-method.jpeg?raw=true" alt="Imagem do Factory Method" >
</div>
<font size="3"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/GuilhermeB12">Guilherme Brito</a>, 2024.</p></font>
</center>

## Código

## Conclusão

## Referências Bibliográficas

> [1] Baeldung. "Design Patterns in the Spring Framework". Disponível em: https://www.baeldung.com/spring-framework-design-patterns
>
> [2] Medium. "Exploring the Factory Method Design Pattern". Disponível em: https://medium.com/@eshikashah2001/exploring-the-factory-method-design-pattern-4d270b6ff935
>
> [3] Devmedia. "Design Patterns: Padrões “GoF”". Disponível em: https://www.devmedia.com.br/design-patterns-padroes-gof/16781

## Bibliografia

## Histórico de Versões

| Versão | Data | Descrição | Autor | Revisor |
| :----: | ---- | --------- | ----- | ------- |
| `1.0`  |25/12/2024| Criação da introdução e da Modelagem| [Guilherme Brito](https://github.com/GuilhermeB12) | |
| `1.1`  |25/12/2024| Adição das referências bibliográficas| [Guilherme Brito](https://github.com/GuilhermeB12) | |