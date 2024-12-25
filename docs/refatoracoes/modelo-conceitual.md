# Modelagem Conceitual

## Introdução

Segundo Abraham Silberchatz, Henry Korth e S. Sudarshan [1], o diagrama Entidade-Relacionamento tem como objetivo facilitar o projeto de banco de dados, permitindo a especificação de um esquema de empresa que representa a estrutura lógica geral de um banco de dados. É muito útil no mapeamento dos significados e interações de empresas reais para um esquema conceitual. 

## Metodologia
Houve a necessidade de refatorar o escopo do projeto, o que também impactou sua modelagem. Dessa forma, foi elaborada uma primeira versão da modelagem conceitual do banco de dados, disponível no repositório da [Entrega 2](https://unbarqdsw2024-2.github.io/2024.2_G10_Recomendacao_Entrega_02/#/modelagem-dados/modelo-conceitual) do projeto.

A segunda versão do Diagrama Entidade-Relacionamento(DER) foi desenvolvida com base na refatoração do [Diagrama de Classes](https://unbarqdsw2024-2.github.io/2024.2_G10_Recomendacao_Entrega_03/#/refatoracoes/diagrama-de-classes), refletindo a estrutura e os relacionamentos definidos.

Para sua criação, utilizou-se a ferramenta [BrModelo](http://www.sis4.com/brModelo/), reconhecida pela facilidade de uso e pela eficiência na conversão entre diferentes níveis de abstração de diagramas. Uma das principais vantagens do BrModelo é a possibilidade de modelar o DER e, a partir dele, derivar o [Diagrama Lógico de Dados](https://unbarqdsw2024-2.github.io/2024.2_G10_Recomendacao_Entrega_03/#/refatoracoes/modelo-l%C3%B3gico) e o Modelo Físico do banco de dados, promovendo uma integração contínua.

## Modelo Conceitual
<center>
<p style="text-align: center"><b>Figura 1:</b> Versão 1 - Diagrama Entidade-Relacionamento</p>
<div align="center">
  <img src="https://raw.githubusercontent.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/refs/heads/main/docs/imagens/modelo-conceitual.png?raw=true" >
</div>
<font size="3"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/izabellaalves">Izabella Alves</a>, <a href="https://github.com/PedroSampaioDias">Pedro Sampaio</a>, <a href="https://github.com/lucasqueiroz23">Lucas Queiroz</a> e <a href="https://github.com/VieiraLaris">Larissa Vieira</a>, 2024.</p></font>
</center>

<center>
<p style="text-align: center"><b>Figura 2:</b> Versão 2 - Diagrama Entidade-Relacionamento</p>
<div align="center">
  <img src="https://raw.githubusercontent.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/refs/heads/main/docs/imagens/diagConceitual.png?raw=true" >
</div>
<font size="3"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/VieiraLaris">Larissa Vieira</a>, 2024.</p></font>
</center>

## Referências Bibliográficas

>
> [1] SILBERSCHATZ, Abraham; KORTH, Henry F.; SUDARSHAN, S. Sistemas de Banco de Dados. 5. ed. Pearson, 2011.
>

## Histórico de Versão

| Versão | Data | Descrição | Autor | Revisor |
| :----: | ---- | --------- | ----- | ------- |
| `1.0`  |21/12/2024| Adição do diagrama entidade-relacionamento e informações atreladas | [Larissa Vieira](https://github.com/VieiraLaris) | |