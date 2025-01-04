# Diagrama de Classes

## Introdução

O diagrama de classes em UML é uma ferramenta utilizada para modelar a estrutura estática de um sistema, representando classes, seus atributos, métodos e os relacionamentos entre elas. Ele mapeia os principais objetos de um sistema, mostrando como eles se conectam e interagem, de forma a estruturar as entidades e suas responsabilidades de maneira organizada. Cada classe é uma abstração de um elemento do domínio do sistema, incluindo características (atributos) e comportamentos (métodos) que descrevem suas funcionalidades.

Atributos correspondem às informações que um objeto armazena. Operações correspondem às ações que um objeto sabe realizar, segundo o livro Análise e Projeto de Sistemas Orientados a Objetos: Com Exemplos em Java (2ª edição, Eduardo Bezerra)[1].

Além das classes, o diagrama destaca os relacionamentos entre elas, como associações, agregações, composições e heranças, permitindo a visualização das dependências e conexões. Esses relacionamentos ajudam a estruturar o sistema em módulos, a identificar possíveis pontos de integração e a definir os papéis de cada entidade no contexto geral. O diagrama de classes é utilizado como base para implementação, documentação e comunicação entre os membros da equipe de desenvolvimento.

## Metodologia

O diagrama de classes foi desenvolvido de forma colaborativa. Inicialmente, identificamos as classes principais e organizamos sua estrutura de acordo com as funcionalidades previstas nos [Requisitos Elicitados](https://unbarqdsw2024-2.github.io/2024.2_G10_Recomendacao_Entrega_02/#/modelagem-estatica/diagrama-de-classes). A partir dessa base, foram definidos atributos e métodos que aparentavam ser necessários para cada classe. Com a progressão do desenvolvimento, as relações entre as classes foram estabelecidas, o que permitiu identificar inconsistências e elementos redundantes. Esse processo resultou na remoção de classes, atributos e métodos desnecessários, culminando no diagrama final.

O modelo final possui uma estrutura clara, com as seguintes classes principais:

- Usuário: Concentra informações relacionadas ao indivíduo e suas interações, como histórico de avaliações.
- Restaurante: Agrega dados relacionadas aos estabelecimentos.
- Avaliação: Representa as interações entre usuários e restaurantes, armazenando informações específicas das avaliações realizadas.
- Categoria: Organiza os tipos de classificação de restaurantes utilizando uma estrutura enumerada.

Este diagrama serviu como base para o desenvolvimento também da Modelagem de Dados, e isso pode ser visto nos documentos de: (Modelo Conceitual)[https://unbarqdsw2024-2.github.io/2024.2_G10_Recomendacao_Entrega_02/#/modelagem-dados/modelo-conceitual], (Modelo Lógico)[https://unbarqdsw2024-2.github.io/2024.2_G10_Recomendacao_Entrega_02/#/modelagem-dados/modelo-logico] e (Modelo Físico)[https://unbarqdsw2024-2.github.io/2024.2_G10_Recomendacao_Entrega_02/#/modelagem-dados/modelo-fisico].

Após a segunda entrega do trabalho, sentimos a necessidade de refatorar e ampliar o diagrama de classes para podermos aplicar padrões de design em nosso projeto para a terceira entrega. Assim, atualizamos essa documentação com o novo diagrama de classes elaborado.

## Diagrama de Classes


<center>
<p style="text-align: center"><b>Figura 1:</b> Novo Diagrama de Classes</p>
<div align="center">
<img src="https://raw.githubusercontent.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/refs/heads/main/docs/imagens/diagrama_classes.png" alt="Novo Diagrama de Classes" >
</div>
<font size="3"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/izabellaalves">Izabella Alves</a>,  2024.</p></font>
</center>

## Legenda

Por padrão utilizamos os seguintes elementos em nosso diagrama:

<center>
<p style="text-align: center"><b>Figura 2:</b>  Legenda Diagrama de Classes</p>
<div align="center">
<div align = "center"><img src="https://github.comUnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/refs/heads/main/docs/imagens/legenda_diagrama_de_classes.png?raw=true" alt="Figura 2: Diagrama de Classes Legenda." height="500" width="450">
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
| `1.3`  | 28/11/2024 | Revisão final | [Zenilda Vieira](https://github.com/ZenildaVieira) |  |
| `1.4`  | 04/01/2025 | Adição do texto da metodologia para entrega 3 | [Zenilda Vieira](https://github.com/ZenildaVieira) | [Izabella Alves](https://github.com/izabellaalves) |
| `1.5`  | 04/01/2025 | Adição do diagrama de classes refatorado |  [Izabella Alves](https://github.com/izabellaalves) | [Lucas Victor](https://github.com/Lucas13032003) |
| `1.6`  | 04/11/2025 | Revisão final | [Lucas Victor](https://github.com/Lucas13032003)  |  |
