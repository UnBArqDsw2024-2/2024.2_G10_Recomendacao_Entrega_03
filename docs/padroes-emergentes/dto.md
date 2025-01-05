# DTO Pattern

## Introdução
O padrão DTO (Data Transfer Object), ou Objeto de Transferência de Dados, é um padrão de projeto amplamente utilizado no desenvolvimento de software, especialmente em aplicações com múltiplas camadas ou arquiteturas distribuídas. Sua principal finalidade é otimizar a transferência de dados entre diferentes partes de um sistema, sejam elas camadas dentro da mesma aplicação (como a camada de apresentação e a camada de domínio) ou aplicações distintas que se comunicam através de APIs ou outros meios de comunicação.

Em essência, um DTO é um objeto simples, cuja única responsabilidade é carregar dados. Ele atua como um contêiner para transportar informações entre as camadas, sem conter nenhuma lógica de negócio. Diferentemente das entidades de domínio, que representam objetos do mundo real e contêm regras de negócio e comportamentos, os DTOs são puramente estruturais, focados na representação dos dados a serem transferidos.


## Metodologia

Para implementar o DTO Pattern no projeto, além dos demais padrões, foi realizada uma reunião no dia 17/12/2024. Essa reunião definiu quais seriam os padrões a serem implementados e quem faria cada parte da implementação e da documentação. 

Para o presente padrão, dividimos da seguinte forma: 

- A Introdução (teoria) seria escrita por Guilherme Brito;
- A metodologia seria escrita por Zenilda Vieira;
- A modelagem seria feita por Guilherme Brito;
- O código seria feito em conjunto por Cecília Quaresma, Lucas Queiroz e Zenilda Vieira;
- A conclusão seria escrita por Lucas Queiroz.

## Modelagem
Para o `Chef Indica`, utilizamos o padrão DTO (Data Transfer Object), que desempenha um papel fundamental na otimização da transferência de dados. Especificamente, o DTO atua como uma ponte entre a camada de serviço, onde reside a lógica de negócio da aplicação, e a camada de apresentação, responsável por exibir as informações ao usuário e interagir com ele.

Os DTOs criam uma camada intermediária. A camada de apresentação interage apenas com os DTOs (`RestauranteDTO`), que contêm apenas os dados necessários para a exibição. Assim, mudanças na entidade `Restaurante` não afetam a camada de apresentação, desde que o contrato do DTO seja mantido.

<center>
<p style="text-align: center"><b>Figura 1:</b> Diagrama UML para o DTO Pattenr.</p>
<div align="center">
  <img src="https://raw.githubusercontent.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/refs/heads/main/docs/imagens/docs/imagens/dto-pattern.jpeg" alt="Diagrama do DTO Pattern" >
</div>
<font size="3"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/GuilhermeB12">Guilherme Brito</a>, 2025</p></font>
</center>


## Código

Abaixo está um resumo da implementação do padrão DTO no projeto ChefIndica. A primeira parte age como a main para essa parte do programa, especificado no documento [DTO.java](/backend/api/src/main/java/com/api/API/models/dto-Pattern/Main/DTO.java). As demais classes são utilizadas para estabelecer o padrão de projeto para cada restaurante:<br>
[RecomendacaoService.java](/backend/api/src/main/java/com/api/API/models/dto-Pattern/RecomendacaoService/RecomendacaoService.java);<br>
[Restaurante.java](/backend/api/src/main/java/com/api/API/models/dto-Pattern/Restaurante/Restaurante.java);<br>
[RestauranteController.java](/backend/api/src/main/java/com/api/API/models/dto-Pattern/RestauranteController/RestauranteController.java);<br>
[RestauranteDTO.java](/backend/api/src/main/java/com/api/API/models/dto-Pattern/RestauranteDTO/RestauranteDTO.java) e<br>
[RestauranteMapper.java](/backend/api/src/main/java/com/api/API/models/dto-Pattern/RestauranteMapper/RestauranteMapper.java).<br>


```
Java

package MainDTO;

import java.util.List;

public class DTO {
    public List<RestauranteDTO> obterRecomendacoes() {
        // Instanciando o servico de recomendacao
        RecomendacaoService recomendacaoService = new RecomendacaoService();

        // Criando o controller com o servico injetado
        RestauranteController restauranteController = new RestauranteController(recomendacaoService);

        // Chamando o metodo de recomendacao de restaurantes no controller
        List<RestauranteDTO> response = restauranteController.recomendarRestaurantes();

        // Exibindo os resultados
        System.out.println("Lista de Restaurantes Recomendados:");
        for (RestauranteDTO restaurante : response) {
            System.out.println("--------------------------------------");
            System.out.println("Nome: " + restaurante.getNome());
            System.out.println("Tipo de Cozinha: " + restaurante.getTipoCozinha());
            System.out.println("Avaliacao: " + restaurante.getAvaliacao());
            System.out.println("Preco Medio: R$ " + restaurante.getPrecoMedio());
        }

        return response;
    }
}


package MainDTO;

import java.util.ArrayList;
import java.util.List;

public class RecomendacaoService {
    public List<RestauranteDTO> recomendarRestaurantes() {
        List<Restaurante> restaurantes = obterRestaurantesDoBanco();
        return RestauranteMapper.toDTOs(restaurantes);
    }

    private List<Restaurante> obterRestaurantesDoBanco() {
        List<Restaurante> restaurantes = new ArrayList<>();
        restaurantes.add(new Restaurante(1L, "Bistro Gourmet", "Descricao 1", "Endereco 1", "Francesa", 4.8, 120.0));
        restaurantes.add(new Restaurante(2L, "Sushi Bar", "Descricao 2", "Endereco 2", "Japonesa", 4.5, 80.0));
        return restaurantes;
    }
}


package MainDTO;

public class Restaurante {
    private Long id;
    private String nome;
    private String descricao;
    private String endereco;
    private String tipoCozinha;
    private double avaliacao;
    private double precoMedio;

    public Restaurante(Long id, String nome, String descricao, String endereco, String tipoCozinha, double avaliacao, double precoMedio) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.endereco = endereco;
        this.tipoCozinha = tipoCozinha;
        this.avaliacao = avaliacao;
        this.precoMedio = precoMedio;
    }

    public Long getId() { return id; }
    public String getNome() { return nome; }
    public String getDescricao() { return descricao; }
    public String getEndereco() { return endereco; }
    public String getTipoCozinha() { return tipoCozinha; }
    public double getAvaliacao() { return avaliacao; }
    public double getPrecoMedio() { return precoMedio; }
}



package MainDTO;

import java.util.List;

public class RestauranteController {
    private final RecomendacaoService recomendacaoService;

    public RestauranteController(RecomendacaoService recomendacaoService) {
        this.recomendacaoService = recomendacaoService;
    }

    public List<RestauranteDTO> recomendarRestaurantes() {
        return recomendacaoService.recomendarRestaurantes();
    }
}


package MainDTO;

public class RestauranteDTO {
    private String nome;
    private String tipoCozinha;
    private double avaliacao;
    private double precoMedio;

    public RestauranteDTO(String nome, String tipoCozinha, double avaliacao, double precoMedio) {
        this.nome = nome;
        this.tipoCozinha = tipoCozinha;
        this.avaliacao = avaliacao;
        this.precoMedio = precoMedio;
    }

    public String getNome() { return nome; }
    public String getTipoCozinha() { return tipoCozinha; }
    public double getAvaliacao() { return avaliacao; }
    public double getPrecoMedio() { return precoMedio; }
}



package MainDTO;

import java.util.List;
import java.util.stream.Collectors;

public class RestauranteMapper {
    public static RestauranteDTO toDTO(Restaurante restaurante) {
        return new RestauranteDTO(
            restaurante.getNome(),
            restaurante.getTipoCozinha(),
            restaurante.getAvaliacao(),
            restaurante.getPrecoMedio()
        );
    }

    public static List<RestauranteDTO> toDTOs(List<Restaurante> restaurantes) {
        return restaurantes.stream().map(RestauranteMapper::toDTO).collect(Collectors.toList());
    }
}

```

## Conclusão

A implementação do padrão DTO no ChefIndica foi essencial para otimizar a transferência de dados entre as camadas do sistema e garantir um maior desacoplamento entre a lógica de negócio e a interface de usuário. Com os DTOs, conseguimos simplificar a comunicação, tornando o sistema mais organizado e flexível a mudanças.

Além disso, essa abordagem contribuiu para uma arquitetura mais limpa e fácil de manter, permitindo que alterações nas entidades de domínio não afetassem diretamente outras partes do sistema. 

## Referências Bibliográficas

> [1] Medium. "O Padrão DTO (Objetos de Transferência de Dados)". Disponível em: https://medium.com/@orcunyilmazoy/the-dto-pattern-data-transfer-objects-8146b262636e
>
> [2] Hyperskill. "Data Transfer Object in Spring". Disponível em: https://hyperskill.org/learn/step/25613
>

## Bibliografia

## Histórico de Versões

| Versão | Data | Descrição | Autor | Revisor |
| :----: | ---- | --------- | ----- | ------- |
| `1.0`  |03/01/2025| Criação da Introdução, Modelagem e Referências | [Guilherme Brito](https://github.com/GuilhermeB12) | [Cecília Quaresma](https://github.com/cqcoding) |
| `1.1`  | 04/01/2025 | Adição do código e conclusão | [Cecília Quaresma](https://github.com/cqcoding) | |