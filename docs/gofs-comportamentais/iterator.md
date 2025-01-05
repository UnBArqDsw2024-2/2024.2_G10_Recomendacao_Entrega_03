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

### Código da interface do iterador 

``` java
package modelo.iterador;

public interface Iterador {
    boolean temProximo();
    int posicaoProximo();
    Object proximo();

    boolean temAnterior();
    int posicaoAnterior();
    Object anterior();

    void reiniciar();
}
```
<font size="2"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/lucasqueiroz23">Lucas Queiroz</a> e <a href="https://github.com/zenildavieira">Zenilda Vieira</a>, 2024</p></font>

### Código do Menu para iterador 

``` java
package com.api.API.models;

import modelo.iterador.ColecaoIterador;
import modelo.implementacao.IteradorConcreto;

public class Menu implements ColecaoIterador {
    private Prato[] pratos;
    private int totalPratos;

    public Menu(int capacidade) {
        this.pratos = new Prato[capacidade];
        this.totalPratos = 0;
    }

    public void adicionarPrato(Prato prato) {
        if (totalPratos < pratos.length) {
            pratos[totalPratos++] = prato;
        } else {
            System.out.println("Menu esta cheio. Nao e possivel adicionar mais pratos.");
        }
    }

    public Prato[] getPratos() {
        return pratos;
    }

    public int getTotalPratos() {
        return totalPratos;
    }

    @Override
    public IteradorConcreto criarIterador() {
        return new IteradorConcreto(this);
    }
}
```
<font size="2"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/lucasqueiroz23">Lucas Queiroz</a> e <a href="https://github.com/zenildavieira">Zenilda Vieira</a>, 2024</p></font>

### Código do Prato para iterador 

``` java
package com.api.API.models;

public class Prato {
    private String nome;
    private double preco;

    public Prato(String nome, double preco) {
        this.nome = nome;
        this.preco = preco;
    }

    public String getNome() {
        return nome;
    }

    public double getPreco() {
        return preco;
    }

    @Override
    public String toString() {
        return nome + " - R$ " + preco;
    }
}
```
<font size="2"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/lucasqueiroz23">Lucas Queiroz</a> e <a href="https://github.com/zenildavieira">Zenilda Vieira</a>, 2024</p></font>

### Código do Restaurante para iterador

``` java
package com.api.API.models;

public class Restaurante {
    private String nome;
    private Menu menu;

    public Restaurante(String nome, int capacidadeMenu) {
        this.nome = nome;
        this.menu = new Menu(capacidadeMenu);
    }

    public String getNome() {
        return nome;
    }

    public Menu getMenu() {
        return menu;
    }
}
```
<font size="2"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/lucasqueiroz23">Lucas Queiroz</a> e <a href="https://github.com/zenildavieira">Zenilda Vieira</a>, 2024</p></font>

### Código do iterador concreto 

``` java
package modelo.implementacao;

import com.api.API.models.Menu;
import com.api.API.models.Prato;
import modelo.iterador.Iterador;

public class IteradorConcreto implements Iterador {
    private Menu menu;
    private int posicaoAtual;

    public IteradorConcreto(Menu menu) {
        this.menu = menu;
        this.posicaoAtual = 0;
    }

    @Override
    public boolean temProximo() {
        return posicaoAtual < menu.getTotalPratos();
    }

    @Override
    public boolean temAnterior() {
        return posicaoAtual > 0;
    }

    @Override
    public int posicaoAnterior() {

        if(temAnterior()) 
            return posicaoAtual - 1;
        
        return -1;
    }

    @Override
    public int posicaoProximo() {

        if(temProximo()) 
            return posicaoAtual + 1;
        
        return -1;
    }

    @Override
    public Prato proximo() {
        if (temProximo()) {
            return menu.getPratos()[posicaoAtual++];
        }
        return null;
    }

    @Override
    public Prato anterior() {
        if (temAnterior()) {
            return menu.getPratos()[--posicaoAtual];
        }
        return null;
    }

    @Override
    public void reiniciar() {
        posicaoAtual = 0;
    }
}

```
<font size="2"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/lucasqueiroz23">Lucas Queiroz</a> e <a href="https://github.com/zenildavieira">Zenilda Vieira</a>, 2024</p></font>

### Código do RestauranteController

``` java
package com.api.API.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;

import com.api.API.models.Restaurante;
import com.api.API.models.Prato;
import modelo.iterador.Iterador;

@RestController
@RequestMapping("/restaurantes")
public class RestauranteController {

    // método auxiliar para preencher o menu de um restaurante
    void preencherMenu(Restaurante restaurante) {
        restaurante.getMenu().adicionarPrato(new Prato("Spaghetti Carbonara", 35.50));
        restaurante.getMenu().adicionarPrato(new Prato("Risoto de Cogumelos", 42.00));
        restaurante.getMenu().adicionarPrato(new Prato("File Mignon ao Molho Madeira", 65.90));
        restaurante.getMenu().adicionarPrato(new Prato("Salmao Grelhado", 58.00));
        restaurante.getMenu().adicionarPrato(new Prato("Tiramisu", 25.00));
    }

    @GetMapping("/menu")
    public ResponseEntity<ArrayList<String>> obterMenu() {
        // Criando restaurante e menu
        Restaurante restaurante = new Restaurante("Restaurante Chef Indica", 5);
        preencherMenu(restaurante);

        // Obtendo iterador do menu
        Iterador iterador = restaurante.getMenu().criarIterador();

        ArrayList<String> pratos = new ArrayList<String>();

        // Percorrendo o menu com o iterador
        System.out.println("Menu do Restaurante " + restaurante.getNome() + ":");
        while (iterador.temProximo()) {
            Prato prato = (Prato) iterador.proximo();
            pratos.add(prato.toString());
            System.out.println("- " + prato);
        }

        // Reiniciando o iterador
        iterador.reiniciar();
        System.out.println("\nIteracao reiniciada:");
        while (iterador.temProximo()) {
            Prato prato = (Prato) iterador.proximo();
            System.out.println("- " + prato);
        }

        return ResponseEntity.ok(pratos);
    }

    @GetMapping("/menu/reverso")
    public ResponseEntity<ArrayList<String>> obterMenuReverso() {
        // Criando restaurante e menu
        Restaurante restaurante = new Restaurante("Restaurante Chef Indica", 5);
        preencherMenu(restaurante);

        // Obtendo iterador do menu
        Iterador iterador = restaurante.getMenu().criarIterador();

        ArrayList<String> pratos = new ArrayList<String>();

        // Percorrendo o menu com o iterador
        while (iterador.temProximo()) {
            Prato prato = (Prato) iterador.proximo();
            System.out.println("- " + prato);
        }

        System.out.println("Menu do Restaurante " + restaurante.getNome() + " (em ordem reversa):");

        // obtendo os pratos na ordem reversa
        while (iterador.temAnterior()) {
            Prato prato = (Prato) iterador.anterior();
            pratos.add(prato.toString());
            System.out.println("- " + prato);
        }

        return ResponseEntity.ok(pratos);
    }
}

```
<font size="2"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/lucasqueiroz23">Lucas Queiroz</a> e <a href="https://github.com/zenildavieira">Zenilda Vieira</a>, 2024</p></font>

## Conclusão

A adoção do padrão de design Iterator no sistema de recomendação de restaurantes do ChefIndica, foi essencial para resolver o desafio de percorrer as coleções de itens de menu associadas a cada restaurante de maneira eficiente e organizada. A partir desta implementação, foi possível encapsular a lógica de iteração em uma estrutura dedicada, permitindo que o código cliente navegasse pelos itens do menu sem expor os detalhes de sua organização interna. Esta implementação foi especialmente relevante em um sistema que lida com menus dinâmicos e potencialmente heterogêneos, onde cada restaurante pode ter diferentes categorias e estruturas de itens. O iterador garantiu uma navegação uniforme, possibilitando que funcionalidades, como filtros de busca ou classificações personalizadas, fossem integradas sem complicações ou reestruturações complexas.

Além disso, a implementação do Iterator promoveu maior flexibilidade ao permitir alterações na estrutura dos menus sem impactos no restante do sistema. A lógica encapsulada no iterador garantiu que o sistema pudesse lidar com menus de diferentes tamanhos ou formatos, como menus sazonais ou personalizados para cada usuário, sem necessidade de reescrever código. Essa abordagem trouxe não apenas eficiência no acesso aos dados, mas também assegurou uma melhor manutenção e escalabilidade do sistema, alinhando-se diretamente com os requisitos de um ambiente voltado à recomendação personalizada de restaurantes e pratos. Assim, o padrão Iterator mostrou-se indispensável para a evolução e sustentabilidade do sistema.

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
| `1.3`  | 03/01/2025 | Adcionando Conclusão             | [Mateus Fidelis](https://github.com/MatsFidelis)                                                        |[Izabella Alves](https://github.com/izabellaalves)  |
| `1.4`  | 03/01/2025 | Corrigindo formatação dos Códigos | [Mateus Fidelis](https://github.com/MatsFidelis)                                                       |[Izabella Alves](https://github.com/izabellaalves)  |