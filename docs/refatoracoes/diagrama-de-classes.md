# Diagrama de Classes

## Introdução

O diagrama de classes é uma das ferramentas fundamentais da linguagem UML (Unified Modeling Language) para modelar a estrutura estática de sistemas orientados a objetos. Ele ilustra as classes, seus atributos, métodos e os relacionamentos entre elas, permitindo a visualização clara da organização e responsabilidades das entidades do sistema. Essa representação facilita o entendimento das conexões e interações entre os principais objetos, servindo como um guia para implementação, documentação e comunicação entre equipes.

Segundo Eduardo Bezerra em seu livro *Análise e Projeto de Sistemas Orientados a Objetos: Com Exemplos em Java* (2ª edição, 2006), atributos representam as informações armazenadas por um objeto, enquanto métodos ou operações definem as ações que ele pode realizar. Além disso, o diagrama de classes detalha os relacionamentos como associações, agregações, composições e heranças, que são essenciais para estruturar o sistema em módulos e identificar pontos de integração. 

O uso de diagramas de classes é crucial para garantir uma arquitetura bem organizada, promovendo uma base sólida para desenvolvimento e evolução do sistema.

## Metodologia

O desenvolvimento do diagrama de classes seguiu um processo iterativo e colaborativo, envolvendo toda a equipe. O primeiro passo foi identificar as principais classes a partir dos [Requisitos Elicitados](https://unbarqdsw2024-2.github.io/2024.2_G10_Recomendacao_Entrega_02/#/modelagem-estatica/diagrama-de-classes) e organizar suas estruturas iniciais. Cada classe foi analisada em relação às funcionalidades previstas, definindo-se atributos e métodos necessários. Em seguida, foram mapeados os relacionamentos entre as classes, como associações e hierarquias, para identificar redundâncias e inconsistências.

O processo iterativo possibilitou a refatoração contínua do diagrama, eliminando elementos desnecessários e garantindo uma modelagem mais robusta. A estrutura final inclui as seguintes classes principais:

- **Usuário**: Representa os indivíduos do sistema e suas interações, como histórico de avaliações.
- **Restaurante**: Armazena informações relacionadas aos estabelecimentos cadastrados.
- **Avaliação**: Captura as interações entre usuários e restaurantes, registrando dados específicos das avaliações realizadas.
- **Categoria**: Define uma estrutura enumerada para organizar os tipos de classificação de restaurantes.

Este diagrama foi essencial para a modelagem de dados, servindo como base para os [Modelos Conceitual, Lógico e Físico](https://unbarqdsw2024-2.github.io/2024.2_G10_Recomendacao_Entrega_02/#/modelagem-dados/modelo-conceitual). 

Para a terceira entrega do projeto, o diagrama foi revisado e ampliado para incorporar padrões de design e atender às novas demandas do sistema. Esse processo resultou na atualização da documentação e no refinamento do diagrama, que agora reflete as melhores práticas de engenharia de software.


## Diagrama de Classes


<center>
<p style="text-align: center"><b>Figura 1:</b> Novo Diagrama de Classes</p>
<div align="center">
<img src="https://raw.githubusercontent.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/refs/heads/main/docs/imagens/diagrama-classes.png?raw=true" alt="Novo Diagrama de Classes" >
</div>
<font size="3"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/izabellaalves">Izabella Alves</a>,  2024.</p></font>
</center>

## Legenda

Por padrão utilizamos os seguintes elementos em nosso diagrama:

<center>
<p style="text-align: center"><b>Figura 2:</b>  Legenda Diagrama de Classes</p>
<div align="center">
<div align = "center"><img src="https://raw.githubusercontent.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/refs/heads/main/docs/imagens/legenda_diagrama_de_classes.png?raw=true" alt="Figura 2: Diagrama de Classes Legenda." height="500" width="450">
<p style="text-align: center"><b>Fonte:</b> Projeto Mercado Livre, Grupo 2, 2023</p>
</center>

## Referências Bibliográficas

>
> [1] BEZERRA, Eduardo. Análise e Projeto de Sistemas Orientados a Objetos: Com Exemplos em Java. 2. ed. Rio de Janeiro: Campus/Elsevier, [2006]. Capítulo 5: Modelagem de Classes de Análise.
>


## Bibliografia

> Orientações básicas na elaboração de um diagrama de classes. Disponível em: https://www.devmedia.com.br/orientacoes-basicas-na-elaboracao-de-um-diagrama-de-classes/37224. Acesso em: 16 de nov. 2024.
>
> O que é um diagrama de classe UML. Disponível em: https://www.lucidchart.com/pages/pt/o-que-e-diagrama-de-classe-uml. Acesso em: 16 de nov. 2024.
>
> Diagramas de Classes. Disponível em: https://www.ibm.com/docs/pt-br/rsas/7.5.0?topic=structure-class-diagrams. Acesso em: 16 de nov. 2024.
>
> Modelo de Diagrama de Classe UML. Disponível em: https://miro.com/pt/modelos/diagrama-classe-uml. Acesso em: 16 de nov. 2024.
>
>THE UNIFIED MODELING LANGUAGE. UML Package Diagrams Overview. Disponível em: https://www.uml-diagrams.org/package-diagrams-overview.html. Acesso em: 15 nov. 2024.

## Histórico de Versão

| Versão | Data | Descrição | Autor | Revisor |
| :----: | ---- | --------- | ----- | ------- |
| `1.0`  | 16/11/2024 | Adição do diagrama de classes | [Pedro Sampaio](https://github.com/PedroSampaioDias) | [Cecília Quaresma](https://github.com/cqcoding) |
| `1.1`  | 23/11/2024 | Adição legenda e composição | [Mateus Fidelis](https://github.com/MatsFidelis) | [Lucas Queiroz](https://github.com/lucasqueiroz23) |
| `1.2`  | 25/11/2024 | Correção das datas de acesso | [Pedro Sampaio](https://github.com/PedroSampaioDias) | [Cecília Quaresma](https://github.com/cqcoding) |
| `1.3`  | 28/11/2024 | Revisão final | [Zenilda Vieira](https://github.com/ZenildaVieira) |  [Cecília Quaresma](https://github.com/cqcoding) |
| `1.4`  | 04/01/2025 | Adição do texto da metodologia para entrega 3 | [Zenilda Vieira](https://github.com/ZenildaVieira) | [Izabella Alves](https://github.com/izabellaalves) |
| `1.5`  | 04/01/2025 | Adição do diagrama de classes refatorado |  [Izabella Alves](https://github.com/izabellaalves) | [Lucas Victor](https://github.com/Lucas13032003) |
| `1.6`  | 05/01/2025 | Revisão final | [Lucas Victor](https://github.com/Lucas13032003)  |  [Izabella Alves](https://github.com/izabellaalves) |
