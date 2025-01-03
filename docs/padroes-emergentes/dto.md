# DTO Pattern

## Introdução
O padrão DTO (Data Transfer Object), ou Objeto de Transferência de Dados, é um padrão de projeto amplamente utilizado no desenvolvimento de software, especialmente em aplicações com múltiplas camadas ou arquiteturas distribuídas. Sua principal finalidade é otimizar a transferência de dados entre diferentes partes de um sistema, sejam elas camadas dentro da mesma aplicação (como a camada de apresentação e a camada de domínio) ou aplicações distintas que se comunicam através de APIs ou outros meios de comunicação.

Em essência, um DTO é um objeto simples, cuja única responsabilidade é carregar dados. Ele atua como um contêiner para transportar informações entre as camadas, sem conter nenhuma lógica de negócio. Diferentemente das entidades de domínio, que representam objetos do mundo real e contêm regras de negócio e comportamentos, os DTOs são puramente estruturais, focados na representação dos dados a serem transferidos.


## Metodologia

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

## Conclusão

## Referências Bibliográficas

> [1] Medium. "O Padrão DTO (Objetos de Transferência de Dados)". Disponível em: https://medium.com/@orcunyilmazoy/the-dto-pattern-data-transfer-objects-8146b262636e
>
> [2] Hyperskill. "Data Transfer Object in Spring". Disponível em: https://hyperskill.org/learn/step/25613
>

## Bibliografia

## Histórico de Versões

| Versão | Data | Descrição | Autor | Revisor |
| :----: | ---- | --------- | ----- | ------- |
| `1.0`  |03/01/2025| Criação da Introdução, Modelagem e Referências | [Guilherme Brito](https://github.com/GuilhermeB12) | |