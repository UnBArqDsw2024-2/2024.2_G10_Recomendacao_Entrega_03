# Observer

## Introdução

O Observer é um padrão de projeto comportamental que tem como principal objetivo definir uma dependência um-para-muitos entre objetos, de forma que quando um objeto muda de estado, todos os seus dependentes são notificados e atualizados automaticamente. Os principais objetos que participam desse padrão são o subject(assunto) e observer(observador), sendo que um subject pode ter uma quantidade qualquer de observadores dependentes e todos os observadores são notificados quando o subject sofre uma mudança. (Gamma et al., 1995) [1]

Segundo o site Refactoring Guru [2], esse mecanismo consiste em armazenar uma lista de referências aos objetos do observador e alguns métodos públicos que permitem adicionar e remover observadores da lista. Dessa maneira, sempre que um evento importante acontece com o sujeito, ele passa para seus observadores e chama um método específico de notificação em seus objetos.

Geralmente, o Observer é aplicado quando alterações no estado de um objeto precisam ser refletidas em outros objetos, especialmente em cenários onde o conjunto de objetos é desconhecido previamente ou pode variar dinamicamente.

Na figura 1, é possível observar a estrutura geral desse padrão, oferecendo uma visão mais clara de sua organização.

<center>
<p style="text-align: center"><b>Figura 1:</b> Exemplo de diagrama UML para o padrão de projeto Observer</p>
<div align="center">
  <img src="https://raw.githubusercontent.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/refs/heads/main/docs/imagens/observer_estrutura.png?raw=true" >
</div>
<font size="3"><p style="text-align: center"><b>Fonte:</b> Gamma et al., 1995 [1].</p></font>
</center>


## Metodologia

## Modelagem
No diagrama de classes desenvolvido, o Subject é representado pela classe **Restaurante**, enquanto os Observers são instâncias da classe **Favoritos**. Quando um usuário adiciona um restaurante aos seus favoritos, este é incluído na lista correspondente, gerenciada pela classe **Favoritos**.

A classe **Restaurante** possui um atributo chamado `observadores`, que armazena a lista de objetos **Favoritos** associados (indicando os usuários interessados). Além disso, ela implementa os métodos `addObservador()`, `removeObservador()` e `notifica()`, que permitem gerenciar os observadores e notificá-los. Já a classe **Favoritos** pode implementar os métodos definidos na interface **Observador**.

Com essa estrutura, a classe **Favoritos** é informada sempre que ocorrem atualizações relevantes, como mudanças no menu ou a publicação de uma nova avaliação de um restaurante favorito do usuário.

<center>
<p style="text-align: center"><b>Figura 2:</b> Primeira versão do Diagrama de Classes do Padrão Observer</p>
<div align="center">
  <img src="https://raw.githubusercontent.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/refs/heads/main/docs/imagens/diagrama_observer.png?raw=true" alt="Diagrama de classes observer" >
</div>
<font size="3"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/VieiraLaris">Larissa Vieira</a>, 2024.</p></font>
</center>

## Código

## Conclusão

## Referências Bibliográficas

>
> [1] Gamma, E., Helm, R., Johnson, R., & Vlissides, J. (1995). Design Patterns: Elements of Reusable Object-Oriented Software. Addison-Wesley.
>
> [2] Refactoring Guru. Composite Design Pattern. Disponível em: <https://refactoring.guru/pt-br/design-patterns/observer>. Acessado em 22 de dezembro de 2024.
>

## Bibliografia

## Histórico de Versões

| Versão | Data | Descrição | Autor | Revisor |
| :----: | ---- | --------- | ----- | ------- |
| `1.0`  |22/12/2024| Adiciona introdução e primeira versao do diagrama de classes | [Larissa Vieira](https://github.com/VieiraLaris) | [Izabella Alves](https://github.com/izabellaalves) |