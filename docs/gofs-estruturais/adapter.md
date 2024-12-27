# Adapter

## Introdução

O **Adapter** é um padrão de projeto estrutural que permite que objetos e classes com interfaces diferentes e incompatíveis possam interagir. Esse padrão é geralmente utilizado em código legado ou em sistemas onde não é possível alterar a classe de serviço, seja por existir um grande número de dependências com outras partes do código, seja pela impossibilidade de acesso ao código da classe de serviço.

Um exemplo comumente apresentado ao se falar sobre o **Adapter** é o caso do uso de bibliotecas que recebem formatos de dados diferentes. Neste exemplo, temos um código que recebe, da interface, um objeto no formato *x*. Entretanto, a biblioteca que se deseja utilizar trabalha somente com objetos no formato *y*. Para solucionar essa incompatibilidade, cria-se um adaptador que realiza a conversão do objeto de *x* para *y*, permitindo que a biblioteca seja utilizada. Na figura 1, é possível visualizar esse exemplo de forma mais explícita: em uma situação onde é recebida, da interface, uma tabela de dados no formato XML, há uma biblioteca de análise de dados que trabalha somente com dados no formato JSON. Para solucionar o problema, foi criado um adaptador que converte os dados de XML para JSON, possibilitando a comunicação entre a interface e a biblioteca.

<center>
<p style="text-align: center"><b>Figura 1:</b> Exemplo de uso do Adapter </p>
<div align="center">
    <img src="https://raw.githubusercontent.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/refs/heads/main/docs/imagens/exemplo_adapter.png?raw=true" alt="Exemplo de uso do Adapter" >
</div>
<font size="3"><p style="text-align: center"><b>Fonte:</b> <a href="https://refactoring.guru/pt-br/design-patterns/adapter">Refactoring Guru</a>, 2024.</p></font>
</center>

Citando outro exemplo, pode-se ver como o Adapter é representado por meio de um diagrama de classes. Neste caso, tem-se pinos quadrados, pinos redondos, um buraco redondo e uma classe com um método que verifica se o pino cabe no buraco. Entretanto, o método foi construído para trabalhar somente com pinos redondos, de forma que ele não consegue realizar os cálculos caso seja chamado para pinos quadrados. Para solucionar esse problema, é criado um adaptador que mascara os dados do pino quadrado, permitindo que ele atue como um pino redondo.

<center>
<p style="text-align: center"><b>Figura 2:</b> Exemplo do uso do Adapter em um diagrama de classes </p>
<div align="center">
    <img src="https://raw.githubusercontent.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/refs/heads/main/docs/imagens/exemplo2_adapter.png?raw=true" alt="Exemplo de Diagrama de Classes do padrão Adapter" >
</div>
<font size="3"><p style="text-align: center"><b>Fonte:</b> <a href="https://refactoring.guru/pt-br/design-patterns/adapter">Refactoring Guru</a>, 2024.</p></font>
</center>

## Metodologia

## Modelagem

Para o presente projeto, o **Adapter** foi desenvolvido para adaptar os diferentes tipos de formatos de avaliação, de forma que eles possam interagir com a classe `Avaliação`.

No projeto `Chef Indica`, ao realizar uma avaliação, o usuário pode inserir dados em três formatos diferentes: texto, imagem e vídeo. Além disso, os formatos são opcionais, permitindo que o usuário insira apenas o que for mais conveniente para a realização da avaliação. Entretanto, é necessário que esses dados sejam adaptados para que, ao publicar uma avaliação, não ocorra nenhum erro devido à opcionalidade dos dados.

Para solucionar o problema, foi criada uma classe adaptadora que realiza a união dos dados e implementa o método `publicar()`, solucionando os possíveis erros ocasionados pela ausência ou pela diferença nos tipos de dados.


<center>
<p style="text-align: center"><b>Figura 3:</b> Primeira versão do Diagrama de Classes do Padrão Adapter</p>
<div align="center">
    <img src="https://raw.githubusercontent.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/refs/heads/main/docs/imagens/diagrama_adapter.png?raw=true" alt="Diagrama de Classes do Padrão Adapter no Chef Indica" >
</div>
<font size="3"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/maliz30">Maria Alice</a>, 2024.</p></font>
</center>

## Código

## Conclusão

## Referências Bibliográficas

## Bibliografia


REFACTORING GURU. **Adapter - Padrão de Projeto**. Disponível em: <https://refactoring.guru/pt-br/design-patterns/adapter>. Acesso em: 25 dez. 2024.

REFACTORING GURU. **Exemplo de Adapter em TypeScript**. Disponível em: <https://refactoring.guru/pt-br/design-patterns/adapter/typescript/example>. Acesso em: 25 dez. 2024.


## Histórico de Versões

| Versão | Data | Descrição | Autor | Revisor |
| :----: | ---- | --------- | ----- | ------- |
| `1.0`  |25/12/2024| Adição da Modelagem do Adapter | [Maria Alice](https://github.com/maliz30) |[xxxx](xxxx)  |
| `1.1`  |25/12/2024| Adição da Introdução | [Maria Alice](https://github.com/maliz30) |[xxxx](xxxx)  |