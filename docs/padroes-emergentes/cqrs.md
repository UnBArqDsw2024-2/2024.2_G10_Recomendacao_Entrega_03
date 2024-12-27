# CQRS (Command Query Responsibility Segregation)

## Introdução
O CQRS é um padrão arquitetural que separa as responsabilidades de leitura (queries) e escrita (commands) em um sistema. Em vez de ter um único modelo de dados para lidar com ambos os tipos de operações, o CQRS propõe a utilização de modelos distintos, otimizados para suas respectivas funções. Isso permite maior escalabilidade, flexibilidade e desempenho em sistemas que lidam com grandes volumes de leitura e escrita.

CQRS afirma o fato de que as operações que disparam transições de estado devem ser descritas como comandos e qualquer recuperação de dados que vá além da necessidade da execução do comando deve ser chamada de query. [1]

Um dos padrões arquitetônicos mais eficazes para criar sistemas de software complexos e escaláveis ​​é o Command Query Responsibility Segregation (CQRS). O CQRS permite arquiteturas mais adaptáveis ​​e eficazes ao dividir as tarefas de leitura e gravação de dados, especialmente em campos onde requisitos de alto desempenho e escalabilidade estão presentes.[3]

## Metodologia

## Modelagem
O CQRS pode ser usado para que as avaliações de restaurantes possam ser escritas em um banco de dados relacional, enquanto as consultas de recomendações possam ser otimizadas usando um banco de dados NoSQL.Em aplicações com alta demanda de leitura (ex.: consultas de usuários buscando restaurantes próximos ou mais bem avaliados), o CQRS permite que o sistema escale de forma independente as operações de consulta.

<center>
<p style="text-align: center"><b>Figura 1:</b> Diagrama UML para o CQRS.</p>
<div align="center">
  <img src="https://raw.githubusercontent.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/refs/heads/main/docs/imagens/docs/imagens/diagrama_cqrs.jpeg" alt="Diagrama do CQRS" >
</div>
<font size="3"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/GuilhermeB12">Guilherme Brito</a>, 2024</p></font>
</center>

## Código

## Conclusão

## Referências Bibliográficas

> [1] Kurrent. "Sourcing de eventos e CQRS". Disponível em: https://www.kurrent.io/blog/event-sourcing-and-cqrs
>
> [2] Kurrent. "CQRS(Segregação de Responsabilidade de Comando-Consulta)". Disponível em: https://www.kurrent.io/cqrs-pattern
>
> [3] GeeksforGeeks. "CQRS – Command Query Responsibility Segregation Design Pattern". Disponível em:https://www.geeksforgeeks.org/cqrs-command-query-responsibility-segregation/

## Bibliografia

## Histórico de Versões

| Versão | Data | Descrição | Autor | Revisor |
| :----: | ---- | --------- | ----- | ------- |
| `1.0`  |26/12/2024| Criação da Introdução, Modelagem e Referências | [Guilherme Brito](https://github.com/GuilhermeB12) | |