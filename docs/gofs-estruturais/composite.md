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

A construção do modelo utilizando o padrão de projeto Composite iniciou-se com a identificação da necessidade de representar um cardápio hierárquico. Esse cardápio deveria incluir itens simples, como sobremesas individuais, e itens compostos, como categorias que agrupam várias sobremesas. O objetivo era criar uma solução uniforme para tratar todos os elementos, facilitando operações como cálculo de preços e gerenciamento de itens.

O padrão Composite mostrou-se adequado para resolver problemas de hierarquias uniformes. Ele permite tratar todos os elementos por meio de uma interface comum, suportando aninhamento e extensibilidade. Os requisitos do projeto alinhavam-se diretamente a essas vantagens.

O modelo foi desenvolvido iterativamente, começando pela definição de uma interface comum chamada ItemCardapio. Essa interface incluiu métodos como getCategoria() e getPreco(), além de operações de composição, como Add(), Remove() e GetChild(). Embora métodos de composição não fossem úteis para itens simples, sua inclusão era necessária para manter a uniformidade do modelo.

Para demonstrar o uso do padrão, foram implementados dois tipos principais de componentes:

- Itens simples, como Tiramisu e Pudim, que atuam como folhas na hierarquia, sem conter outros componentes.

- Itens compostos, como a categoria Sobremesas, que agrupam outros itens e oferecem métodos para adicionar, remover e acessar componentes filhos.

Esses exemplos foram escolhidos para ilustrar o modelo, mas poderiam ser substituídos por outros conforme necessário.

Durante o desenvolvimento, diversas ideias foram apresentadas, o que gerou dúvidas naquele momento. No entanto, ao compreendermos melhor o padrão de design, conseguimos esclarecer os pontos:

- Sobre os métodos Add() e Remove() na interface: Questionamos inicialmente se seria necessário implementá-los, considerando que itens simples, que não utilizariam esses métodos, ainda assim teriam acesso a eles. Entendemos, porém, que esses métodos são essenciais para manter a uniformidade da interface, já que o objetivo principal é ter uma única interface padronizada.

- Sobre operações recursivas: Também discutimos como seria a implementação de operações recursivas, como o cálculo do preço total em categorias com múltiplos níveis de itens agrupados. Caso decidíssemos implementar algo assim, percebemos que seria possível navegar pela estrutura dos itens a partir da classe de itens compostos, acessando seus elementos filhos.

Consideramos alternativas, como dividir a interface ItemCardapio ou usar herança múltipla, mas descartamos essas opções por comprometerem a uniformidade e simplicidade do padrão. O modelo final seguiu rigorosamente a definição clássica do Composite, garantindo que itens simples e compostos compartilhassem a mesma interface.

## Modelagem

A primeira versão do diagrama de classes criado para modelar como o padrão de projeto Composite será utilizado na aplicação Chef Indica está disponível na figura 2. Na figura, temos "ItemCardapio" como interface comum, que vai definir as operações comuns (```getCategoria() e getPreco()```) e as operações utilizadas somente por alguma das classes.

Os elementos Tiramisù, Petit Gâteau e Pudim são os Itens Simples do cardápio e, portanto, implementam a interface ItemCardapio diretamente. Eles são folhas porque não contêm outros itens.

A classe Sobremesas representa um grupo de itens do cardápio. É uma categoria que pode conter tanto itens simples, como o Tiramisù, o Petit Gâteau e o Pudim, e também outras sobremesas não descritas no exemplo.

<center>
<p style="text-align: center"><b>Figura 2:</b> Primeira versão do Diagrama de Classes do Padrão Composite</p>
<div align="center">
  <img src="https://raw.githubusercontent.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/refs/heads/main/docs/imagens/composite-chefindica1.png?raw=true" alt="Imagem do Rich Picture" >
</div>
<font size="3"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/izabellaalves">Izabella Alves</a>, 2024.</p></font>
</center>

## Código

As classes utilizadas para implementar o Composite Method em Java foram os itens simples [Tiramisu](https://github.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/blob/main/backend/api/src/main/java/com/api/API/models/compositeMethod/TiramisuComposite.java), [Pudim](https://github.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/blob/main/backend/api/src/main/java/com/api/API/models/compositeMethod/PudimComposite.java), [PetitGateau](https://github.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/blob/main/backend/api/src/main/java/com/api/API/models/compositeMethod/PetitComposite.java) que implementam a interface [ItemCardapio](https://github.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/blob/main/backend/api/src/main/java/com/api/API/models/compositeMethod/ItemCardapioComposite.java), com a classe [Sobremesa](https://github.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/blob/main/backend/api/src/main/java/com/api/API/models/compositeMethod/SobremesaComposite.java). A controladora fica definida pela [menuController](https://github.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/blob/main/backend/api/src/main/java/com/api/API/controllers/MenuController.java). O código abaixo é uma adaptação para demonstrar a utilização do padrão de projeto Estrutural Composite Method no projeto Chef Indica.

### Controller Menu

``` java
package com.api.controllers;

import com.api.models.*;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/menu")
public class MenuController {
    @GetMapping("/preco-total")
    public double getPrecoTotal() {
        Sobremesas sobremesas = new Sobremesas();
        sobremesas.add(new Tiramisu());
        sobremesas.add(new Pudim());
        return sobremesas.getPreco();
    }
}
```
<font size="2"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/MatsFidelis">Mateus Fidelis</a>, 2025</p></font>

### Interface itemCardapio

``` java
package com.api.models;

public interface ItemCardapio {
    String getCategoria();
    double getPreco();

    default void add(ItemCardapio item) {
        throw new UnsupportedOperationException("Operação não suportada.");
    }

    default void remove(ItemCardapio item) {
        throw new UnsupportedOperationException("Operação não suportada.");
    }

    default ItemCardapio getChild(int index) {
        throw new UnsupportedOperationException("Operação não suportada.");
    }
}
```
<font size="2"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/MatsFidelis">Mateus Fidelis</a>, 2025</p></font>

### Classe Sobremesas

``` java
import java.util.ArrayList;
import java.util.List;

// Classe Composite Sobremesas
public class Sobremesas implements ItemCardapio {
    private List<ItemCardapio> itens = new ArrayList<>();

    @Override
    public String getCategoria() {
        return "Sobremesas";
    }

    @Override
    public double getPreco() {
        return itens.stream().mapToDouble(ItemCardapio::getPreco).sum();
    }

    @Override
    public void add(ItemCardapio item) {
        itens.add(item);
    }

    @Override
    public void remove(ItemCardapio item) {
        itens.remove(item);
    }

    @Override
    public ItemCardapio getChild(int index) {
        return itens.get(index);
    }
}
```
<font size="2"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/MatsFidelis">Mateus Fidelis</a>, 2025</p></font>

### Classe Tiramisu

``` java
package com.api.models;

// Clase Tiramisu
public class Tiramisu implements ItemCardapio {
    @Override
    public String getCategoria() {
        return "Sobremesa";
    }

    @Override
    public double getPreco() {
        return 15.00;
    }
}
```
<font size="2"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/MatsFidelis">Mateus Fidelis</a>, 2025</p></font>

### Classe Pudim

``` java
package com.api.models;

// Classe Pudim
public class Pudim implements ItemCardapio {
    @Override
    public String getCategoria() {
        return "Sobremesa";
    }

    @Override
    public double getPreco() {
        return 10.00;
    }
}
```
<font size="2"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/MatsFidelis">Mateus Fidelis</a>, 2025</p></font>

### Classe PetitGateau

``` java
package com.api.models;

// Classe PetitGateau
public class PetitGateau implements ItemCardapio {
    @Override
    public String getCategoria() {
        return "Sobremesa";
    }

    @Override
    public double getPreco() {
        return 20.00;
    }
}
```
<font size="2"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/MatsFidelis">Mateus Fidelis</a>, 2025</p></font>

## Conclusão
A implementação do padrão estrutural Composite no projeto Chef Indica demonstrou ser uma abordagem eficiente para organizar e gerenciar itens do cardápio de maneira estruturada e flexível. O diagrama de classes e a codificação detalharam como a interface ItemCardapio e suas implementações (itens simples, como Tiramisu, Pudim, e PetitGateau, e a classe composta Sobremesas) foram utilizadas para modelar a hierarquia de itens no cardápio. O padrão Composite proporcionou uma abstração que facilita a manipulação de elementos individuais e agrupamentos de itens de maneira uniforme, simplificando a lógica de operações como cálculo de preços totais ou categorização. A interface ItemCardapio centralizou as operações principais, enquanto métodos opcionais, como add() e remove(), foram sobrescritos apenas nas classes que necessitam desses comportamentos. No código, a implementação da classe controladora MenuController demonstrou como o padrão pode ser utilizado para criar dinamicamente a estrutura de cardápios e calcular valores de forma eficiente. Essa separação clara de responsabilidades entre componentes contribui para a manutenção e escalabilidade do sistema.

Por fim, o uso do padrão Composite no Chef Indica não apenas facilitou a organização dos elementos do cardápio, mas também estabeleceu uma base robusta para futuras expansões, como a inclusão de novas categorias ou funcionalidades mais complexas. 

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
| `1.1`  |24/12/2024| Adiciona metodologia |[Pedro Sampaio](https://github.com/PedroSampaioDias)|[Zenilda Vieira](https://github.com/ZenildaVieira)|
| `1.2`  |02/01/2025| Adcionando Código do Composite Method |[Mateus Fidelis](https://github.com/MatsFidelis)|[Izabella Alves](https://github.com/izabellaalves)|
| `1.3`  |03/01/2025| Adcionando Correções nos links |[Mateus Fidelis](https://github.com/MatsFidelis)|[Izabella Alves](https://github.com/izabellaalves)|
| `1.4`  |03/01/2025| Adição da Conclusão |[Luana Medeiros](https://github.com/LuaMedeiros)||
