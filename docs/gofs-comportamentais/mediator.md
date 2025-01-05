# Mediator

## Introdução

No projeto Chef Indica, utilizamos o padrão de projeto Mediator, um dos padrões comportamentais descritos por Gamma et al. (1994) [1], como uma solução eficaz para organizar a comunicação entre diferentes componentes do sistema. Esse padrão tem como principal objetivo encapsular a interação entre objetos, promovendo um design mais limpo e desacoplado, onde as classes deixam de depender diretamente umas das outras.

A aplicação do Mediator é particularmente relevante para a implementação de funcionalidades complexas, como os fóruns de restaurantes. Nesse contexto, diferentes entidades, como usuários, tópicos e mensagens, precisam interagir de maneira coordenada. O Mediator atua como um ponto central de comunicação, simplificando a troca de informações e garantindo que cada componente permaneça focado em suas responsabilidades individuais (Freeman & Robson, 2020) [2].

Esse padrão contribui significativamente para a manutenção e escalabilidade do sistema, reduzindo a complexidade das interações e facilitando futuras expansões ou alterações no comportamento das classes (Fowler, 2003) [3].

## Metodologia

Antes de iniciar o desenvolvimento do padrão **Mediator**, a equipe realizou uma chamada em grupo, conforme documentado na [ata de reunião](https://unbarqdsw2024-2.github.io/2024.2_G10_Recomendacao_Entrega_03/#/atas-reuniao/ata-reuniao-17-12) do dia 17 de dezembro de 2024. Durante a discussão, identificamos que o Mediator seria uma escolha estratégica de padrão de projeto para resolver alguns desafios específicos no nosso código, como a redução do acoplamento entre componentes e a melhoria da organização geral.

Após a decisão, foram definidas quatro pessoas da equipe para trabalhar neste padrão e foram definidades responsabilidades entre os mesmos quatro membros da equipe:

- **Luana de Lima Medeiros**: responsável pela modelagem do padrão e pela elaboração da introdução do artefato.  
- **Lucas Víctor Ferreira de Araújo**: encarregado do desenvolvimento do código, implementando as funcionalidades do Mediator na aplicação.  
- **Izabella Alves Pereira**: responsável pela documentação da metodologia, descrevendo os passos seguidos para a adoção do padrão.  
- **Caio Mesquita Vieira**: encarregado pela conclusão do artefato e a consolidação dos aprendizados da equipe.

O trabalho teve início com a criação do diagrama de classes, que foi modelado com base nos requisitos identificados. O diagrama reflete a estrutura principal do padrão Mediator, contendo a interface que define a comunicação entre os componentes, uma implementação concreta do Mediator que centraliza a lógica de interação e diversos componentes como UserComponent, FilterComponent e RestaurantComponent, que interagem por meio do Mediator para manterem-se desacoplados.

## Modelagem

O diagrama apresentado ilustra a aplicação do padrão comportamental Mediator no contexto de um sistema de recomendação de restaurantes. O objetivo principal do Mediator é centralizar e organizar a comunicação entre diferentes componentes do sistema, reduzindo o acoplamento e facilitando a manutenção. 

Os principais elementos do diagrama incluem a interface Mediator, que gerencia a comunicação entre os componentes, e a interface Component, que define as operações básicas que cada componente deve implementar. O ConcreteMediator coordena os componentes concretos, como UserComponent, RestaurantComponent e FilterComponent, representando funcionalidades específicas como envio de feedback, atualização de detalhes e aplicação de filtros. 

<center>
<p style="text-align: center"><b>Figura 1:</b> Diagrama UML para o Mediator utilizado no projeto.</p>
<div align="center">
  <img src="https://raw.githubusercontent.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/refs/heads/main/docs/imagens/Diagrama_Mediator.jpeg?raw=true" alt="Diagrama de classes do Mediator" >
</div>
<font size="3"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/LuaMedeiros">Luana Medeiros</a>, 2024</p></font>
</center>


## Código

## Conclusão

## Referências Bibliográficas

> [1] Gamma, E., Helm, R., Johnson, R., & Vlissides, J. (1994). Design Patterns: Elements of Reusable Object-Oriented Software. Addison-Wesley.
>
> [2] Freeman, E., & Robson, E. (2020). Head First Design Patterns: A Brain-Friendly Guide (2nd ed.). O'Reilly Media.
>
> [3] Fowler, M. (2003). Patterns of Enterprise Application Architecture. Addison-Wesley.

## Bibliografia

## Histórico de Versões

| Versão | Data | Descrição | Autor | Revisor |
| :----: | ---- | --------- | ----- | ------- |
| `1.0`  |24/12/2024| Adiciona metodologia | [Izabella Alves](https://github.com/izabellaalves)|[Caio Mesquita](https://github.com/Caiomesvie)|
| `1.1`  |27/12/2024| Adição Introdução e Modelagem | [Luana Medeiros](https://github.com/LuaMedeiros)||
