# Modelagem Lógica

## Introdução

O modelo físico é a etapa da modelagem de banco de dados que define como os dados serão efetivamente armazenados em um sistema de gerenciamento de banco de dados (SGBD). Nessa fase, traduzem-se os elementos do modelo lógico para estruturas específicas do SGBD, como tabelas, índices, restrições e relacionamentos, considerando as particularidades de desempenho e restrições tecnológicas do ambiente. Segundo Elmasri e Navathe (2017) [1], no livro Fundamentals of Database Systems, o modelo físico "detalha como os dados são representados em termos de arquivos, registros e estruturas de armazenamento, além de definir estratégias de acesso para melhorar a eficiência das consultas e operações de manipulação de dados".

## Metodologia


Devido à necessidade de ajustar o escopo do projeto, o [modelo físico criado na entrega 2](https://unbarqdsw2024-2.github.io/2024.2_G10_Recomendacao_Entrega_02/#/modelagem-dados/modelo-fisico) foi revisado e modificado para atender aos novos requisitos da terceira entrega. Essas alterações foram realizadas para incorporar funcionalidades adicionais e alinhar o modelo com os padrões de projeto que serão implementados no sistema.

A base para a construção deste modelo físico foi o [Diagrama de Classes](https://unbarqdsw2024-2.github.io/2024.2_G10_Recomendacao_Entrega_03/#/refatoracoes/diagrama-de-classes), que passou por revisão e atualização pela equipe nesta fase. Com isso, o [Modelo Conceitual](https://unbarqdsw2024-2.github.io/2024.2_G10_Recomendacao_Entrega_03/#/refatoracoes/modelo-conceitual) e o [Modelo Lógico](https://unbarqdsw2024-2.github.io/2024.2_G10_Recomendacao_Entrega_03/#/refatoracoes/modelo-logico) também foram ajustados, culminando em um modelo físico mais alinhado aos objetivos do projeto. Entre as principais mudanças destacam-se o estabelecimento de relacionamentos entre menus e pratos, além da inclusão de colunas específicas para acomodar diferentes perfis de usuário. 

Comparando as duas versões do modelo físico, as diferenças são notáveis. Na versão anterior, o modelo era composto por 5 tabelas principais: Restaurante, Usuario, Categoria, Pertence e Avalia. Já na versão atual, o modelo foi ampliado para 15 tabelas, com a adição de novas entidades, como Cliente, Funcionario, Menu, Prato, Tag, Favorita, Like e Dislike, que não estavam presentes na versão anterior. Além disso, novas relações foram estabelecidas entre as tabelas, como a relação entre menus e pratos, categorias e restaurantes, e a inclusão de avaliações associadas a tags, ampliando a funcionalidade do sistema e tornando-o mais flexível para diferentes tipos de interação dos usuários.

## Modelo Físico


## Referências Bibliográficas

>
> [1] Elmasri, R., & Navathe, S. B. (2017). Fundamentals of Database Systems. Pearson.
>

## Histórico de Versão

| Versão | Data | Descrição | Autor | Revisor |
| :----: | ---- | --------- | ----- | ------- |
| `1.0`  |25/12/2024| Adiciona introdução e metodologia  |[Izabella Alves](https://github.com/izabellaalves) |[Larissa Vieira](https://github.com/VieiraLaris) | 