# Mediator

## Introdução
No projeto Chef Indica, focamos na aplicação do padrão de projeto Mediator, um dos padrões comportamentais do GoF, para organizar a comunicação entre diferentes componentes do sistema. Nosso objetivo é criar uma estrutura que facilite a troca de informações entre classes, promovendo um design mais limpo e desacoplado. Essa abordagem é fundamental para implementar funcionalidades como os fóruns de restaurantes, onde diferentes entidades interagem, como usuários, tópicos e mensagens.

## Metodologia

Antes de iniciar o desenvolvimento do padrão **Mediator**, a equipe realizou uma chamada em grupo, conforme documentado na [ata de reunião](https://unbarqdsw2024-2.github.io/2024.2_G10_Recomendacao_Entrega_03/#/atas-reuniao/ata-reuniao-17-12) do dia 17 de dezembro de 2024. Durante a discussão, identificamos que o Mediator seria uma escolha estratégica de padrão de projeto para resolver alguns desafios específicos no nosso código, como a redução do acoplamento entre componentes e a melhoria da organização geral.

Após a decisão, foram definidas quatro pessoas da equipe para trabalhar neste padrão e foram definidades responsabilidades entre os mesmos quatro membros da equipe:

- **Luana de Lima Medeiros**: responsável pela modelagem do padrão e pela elaboração da introdução do artefato.  
- **Lucas Víctor Ferreira de Araújo**: encarregado do desenvolvimento do código, implementando as funcionalidades do Mediator na aplicação.  
- **Izabella Alves Pereira**: responsável pela documentação da metodologia, descrevendo os passos seguidos para a adoção do padrão.  
- **Caio Mesquita Vieira**: encarregado pela conclusão do artefato e a consolidação dos aprendizados da equipe.

Além disso, todos os membros contribuíram no processo de revisão do artefato e do código, garantindo a qualidade final da entrega.

## Modelagem

O diagrama apresentado ilustra a aplicação do padrão comportamental Mediator no contexto de um sistema de recomendação de restaurantes. O objetivo principal do Mediator é centralizar e organizar a comunicação entre diferentes componentes do sistema, reduzindo o acoplamento e facilitando a manutenção. 

Os principais elementos do diagrama incluem a interface Mediator, que gerencia a comunicação entre os componentes, e a interface Component, que define as operações básicas que cada componente deve implementar. O ConcreteMediator coordena os componentes concretos, como UserComponent, RestaurantComponent e FilterComponent, representando funcionalidades específicas como envio de feedback, atualização de detalhes e aplicação de filtros. 

<center>
<p style="text-align: center"><b>Figura 1:</b> Diagrama UML para o Mediator utilizado no projeto.</p>
<div align="center">
  <img src="https://github.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/blob/main/docs/imagens/Diagrama_Mediator.jpeg" alt="Diagrama de classes do Mediator" >
</div>
<font size="3"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/LuaMedeiros">Luana Medeiros</a>, 2024</p></font>
</center>


## Código

## Conclusão

## Referências Bibliográficas

## Bibliografia

## Histórico de Versões

| Versão | Data | Descrição | Autor | Revisor |
| :----: | ---- | --------- | ----- | ------- |
| `1.0`  |24/12/2024| Adiciona metodologia | [Izabella Alves](https://github.com/izabellaalves)|[Caio Mesquita](https://github.com/Caiomesvie)|
| `1.`  |24/12/2024| Adição Introdução e Modelagem | [Luana Medeiros](https://github.com/LuaMedeiros||
