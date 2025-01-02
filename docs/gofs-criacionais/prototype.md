

# Prototype

## Introdução

O padrão de projeto Prototype é amplamente utilizado para criar novos objetos por meio da clonagem de protótipos existentes, ao invés de inicializá-los diretamente. Essa abordagem reduz o custo computacional e melhora a eficiência, especialmente em sistemas onde a criação de objetos personalizados ocorre frequentemente. 

Neste projeto, aplicamos o padrão Prototype no front-end, focando em componentes de interface como botões, cartões e outros elementos visuais repetíveis. O objetivo principal foi garantir a modularidade, escalabilidade e reutilização do código, facilitando a manutenção e evolução do sistema.


## Metodologia

O desenvolvimento do padrão Prototype no front-end foi iniciado após uma reunião de equipe realizada em 17 de dezembro de 2024. Durante esse encontro, avaliamos os benefícios do padrão no contexto do projeto, concluindo que ele seria ideal para otimizar a criação de elementos visuais repetíveis e personalizáveis, como botões e cartões. A aplicação do padrão visou tornar o código mais eficiente e facilitar a reutilização de componentes.

Após o alinhamento inicial, as tarefas foram distribuídas entre os integrantes da equipe para garantir uma execução fluida.

- **Lucas Víctor**: Responsável por definir o conceito e os objetivos do padrão dentro do contexto do projeto (modelagem), além de redigir a introdução do artefato.  
- **Caio Mesquita**: Implementou o padrão Prototype no código, criando estruturas reutilizáveis para os componentes de interface.  
- **Luana Medeiros**: Documentou o processo metodológico, descrevendo os passos seguidos e as decisões tomadas pela equipe.  
- **Maria Alice**: Revisou o trabalho final, validando o código e os documentos para assegurar a qualidade e a coerência do resultado.

A criação dos diagramas explicativos foi realizada por meio da ferramenta **Lucid.app**, permitindo ilustrar com clareza a estrutura do padrão Prototype aplicado no projeto. O foco da implementação esteve em protótipos de elementos de interface que permitissem personalização eficiente, resultando em um front-end mais modular e dinâmico.

Essa abordagem colaborativa foi essencial para integrar o padrão Prototype ao projeto, trazendo benefícios tanto em termos de organização quanto de escalabilidade.


## Modelagem
![<img>](https://github.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/blob/Prototype_Modelagem/docs/imagens/Prototype%20-%20Modelagem.png?raw=true)

### Explicação da Modelagem  
A modelagem apresentada no diagrama demonstra a implementação do padrão Prototype no contexto do projeto.  
1. **Interface `PrototipoPrato`**: Define o contrato para a clonagem de objetos, com atributos básicos como `nome`, `ingredientes` e `preco`. Essa interface estabelece o método `clonar()` para criar cópias do protótipo.  
2. **Classe Concreta `Prato`**: Implementa a interface `PrototipoPrato` e fornece a lógica concreta para a clonagem dos objetos, permitindo a criação de novas instâncias baseadas em um protótipo existente.  
3. **Cliente**: Representa a parte do sistema que utiliza o padrão Prototype, solicitando clones a partir dos protótipos definidos.

A modelagem priorizou a clareza e simplicidade para garantir que o padrão pudesse ser integrado de forma eficiente ao sistema existente.


## Código

_Trechos de código relacionados à implementação serão incluídos nesta seção para demonstrar como o padrão Prototype foi implementado no projeto._


## Conclusão

A implementação do padrão Prototype trouxe melhorias significativas para o projeto, particularmente no front-end, onde foi possível criar componentes reutilizáveis e personalizáveis com maior eficiência. O uso de protótipos não apenas otimizou a criação de elementos visuais, mas também reduziu a complexidade do código, facilitando sua manutenção e escalabilidade.

A abordagem colaborativa da equipe foi essencial para o sucesso da integração do padrão Prototype, permitindo uma execução bem planejada e eficiente. Como resultado, o projeto agora conta com uma arquitetura mais modular e preparada para suportar futuras expansões.


## Referências Bibliográficas

- Gamma, E., Helm, R., Johnson, R., & Vlissides, J. (1995). *Design Patterns: Elements of Reusable Object-Oriented Software*. Addison-Wesley.
- Lucidchart. (n.d.). *Lucid.app*. Disponível em: [https://www.lucid.app](https://www.lucid.app)


## Histórico de Versões

| Versão | Data       | Descrição         | Autor                          | Revisor          |
|--------|------------|-------------------|--------------------------------|------------------|
| `1.0`  | 27/12/2024 | Adição Metodologia| [Luana Medeiros](https://github.com/LuaMedeiros) |     [Lucas Víctor](https://github.com/Lucas13032003)             |
| `1.1`  | 02/01/2025 | Adição Introdução e Conclusão | [Lucas Víctor](https://github.com/Lucas13032003)  | [Maria Alice]() |

