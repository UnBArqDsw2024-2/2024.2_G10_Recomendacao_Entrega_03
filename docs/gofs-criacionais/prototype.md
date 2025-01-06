

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
<center>
<p style="text-align: center"><b>Figura 1:</b> Diagrama UML para o Prototype utilizado no projeto.</p>
<div align="center">
  <img src="https://github.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/blob/Prototype_Modelagem/docs/imagens/Prototype%20-%20Modelagem.png?raw=true" maxwidth="600">
</div>
<font size="3"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/Lucas13032003">Lucas Víctor</a>, 2024</p></font>
</center>

### Explicação da Modelagem  
A modelagem apresentada no diagrama demonstra a implementação do padrão Prototype no contexto do projeto.  
1. **Interface `PrototipoPrato`**: Define o contrato para a clonagem de objetos, com atributos básicos como `nome`, `ingredientes` e `preco`. Essa interface estabelece o método `clonar()` para criar cópias do protótipo.  
2. **Classe Concreta `Prato`**: Implementa a interface `PrototipoPrato` e fornece a lógica concreta para a clonagem dos objetos, permitindo a criação de novas instâncias baseadas em um protótipo existente.  
3. **Cliente**: Representa a parte do sistema que utiliza o padrão Prototype, solicitando clones a partir dos protótipos definidos.

A modelagem priorizou a clareza e simplicidade para garantir que o padrão pudesse ser integrado de forma eficiente ao sistema existente.


## Código

O código implementando a modelagem do GOF prototype pode ser encontrado na pasta [Prototype](), onde ele foi dividido em 4 arquivos: 
* ClientePrototype.jsx
* Prato.jsx
* PrototipoPrato.jsx 
* index.jsx

Segue o código abaixo:

### Código Cliente

``` java

import Prato from "./Prato.jsx";
// Classe que gerencia os pratos e suas clonagens
class ClientePrototype {
  constructor() {
    this.pratos = [
      new Prato("Macarronada", ["Macarrão", "Molho de tomate", "Carne moída"], 25.5),
      new Prato("Salada Caesar", ["Alface", "Croutons", "Molho Caesar", "Parmesão"], 18.0),
      new Prato("Pizza Margherita", ["Massa", "Molho de tomate", "Mussarela", "Manjericão"], 45.0),
    ];
  }
  // Retorna todos os pratos
  listarPratos() {
    return this.pratos;
  }
  // Clona um prato específico
  clonarPrato(index) {
    if (index >= 0 && index < this.pratos.length) {
      const pratoClonado = this.pratos[index].clonar();
      this.pratos.push(pratoClonado);
      return pratoClonado;
    }
    throw new Error("Índice inválido!");
  }
}
export default ClientePrototype;

``` 

<font size="2"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/caiomesvie">Caio Mesquita</a>, 2025</p></font>

### Código Prato

``` java

import PrototipoPrato from "./PrototipoPrato.jsx";
// Classe que implementa o contrato de clonagem
class Prato extends PrototipoPrato {
  constructor(nome, ingredientes, preco) {
    super(nome, ingredientes, preco);
  }
  // Implementa o método de clonagem
  clonar() {
    return new Prato(`${this.nome} (Clone)`, [...this.ingredientes], this.preco);
  }
}
export default Prato;

``` 

<font size="2"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/caiomesvie">Caio Mesquita</a>, 2025</p></font>

### Código Prótipo Prato

``` java

// Classe base que define o contrato para a clonagem de objetos
class PrototipoPrato {
  constructor(nome, ingredientes, preco) {
    this.nome = nome;
    this.ingredientes = ingredientes;
    this.preco = preco;
  }
  // Método para ser implementado por subclasses
  clonar() {
    throw new Error("Método clonar() deve ser implementado nas subclasses.");
  }
}
export default PrototipoPrato;

``` 

<font size="2"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/caiomesvie">Caio Mesquita</a>, 2025</p></font>

A Classe ClientePrototype foi implementada com a função de interagir diretamente com o cliente que poderá gerenciar e clonar os pratos existentes. Devido ao escopo da entrega, a classe foi implementada com pratos pré-estabelecidos para fins de teste da função principal de clonagem. O seu funcionamento base é a criação de uma lista inicial de pratos e a utilização do método Clonar().

A Classe PrototipoPrato define a interface que define a estrutura básica de um prato com seus atributos e garantem que os pratos possam ser clonados.

A Classe Prato implementa a interface PrototipoPrato, é a representação concreta do prato, contendo os atributos e a lógica da clonagem.

Foi realizado também um teste para confirmar o funcionamento pleno do código utilizandno um mock com entradas pré definidas e saídas esperadas.

### Código Teste Prototype

``` java

import ClientePrototype from "../components/prototype/ClientePrototype";
describe("ClientePrototype", () => {
  let cliente;
  // Antes de cada teste, cria uma nova instância de ClientePrototype
  beforeEach(() => {
    cliente = new ClientePrototype();
  });
  test("Deve listar os pratos iniciais corretamente", () => {
    const pratos = cliente.listarPratos();
    expect(pratos.length).toBe(3); // Deve haver 3 pratos iniciais
    expect(pratos[0].nome).toBe("Macarronada"); // O primeiro prato deve ser "Macarronada"
  });
  test("Deve clonar um prato corretamente", () => {
    const pratoClonado = cliente.clonarPrato(0); // Clona o primeiro prato
    const pratos = cliente.listarPratos();
    // Verifica se o número total de pratos aumentou
    expect(pratos.length).toBe(4);
    // Verifica se o nome do prato clonado está correto
    expect(pratoClonado.nome).toBe("Macarronada (Clone)");
  });
  test("Deve lançar um erro ao tentar clonar um prato com índice inválido", () => {
    // Tenta clonar um prato com índice inválido e espera um erro
    expect(() => cliente.clonarPrato(10)).toThrow("Índice inválido!");
  });
});

``` 

<font size="2"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/caiomesvie">Caio Mesquita</a>, 2025</p></font>

A saída do teste, confirmando o funcionamento das funções, foi :

<center>
<div align="center">
  <img src="https://raw.githubusercontent.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/refs/heads/main/docs/imagens/teste_prototype.png?raw=true" alt="Teste Prototype" >
</div>

<font size="2"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/caiomesvie">Caio Mesquita</a>, 2025</p></font>

</center>

## Conclusão

A aplicação do padrão de projeto **Prototype** no sistema *Chef Indica* evidenciou sua eficiência na simplificação de implementações e na otimização de processos de criação de objetos. Conforme demonstrado na modelagem, a interface `PrototipoPrato` define a base para a clonagem, enquanto a classe concreta `Prato` implementa essa funcionalidade. Essa abordagem permite ao sistema criar novas instâncias de `Prato` a partir de um protótipo existente, sem a necessidade de inicializações complexas ou recriações do zero.

Além de acelerar o desenvolvimento, essa solução promove a reutilização de código, melhora a modularidade e reduz a probabilidade de erros associados à criação manual de objetos. Assim, o padrão **Prototype** contribui para a escalabilidade e manutenção do sistema *Chef Indica*, mostrando-se uma escolha eficaz para atender às demandas de flexibilidade e personalização no gerenciamento de pratos.

## Referências Bibliográficas

- Gamma, E., Helm, R., Johnson, R., & Vlissides, J. (1995). *Design Patterns: Elements of Reusable Object-Oriented Software*. Addison-Wesley.
- Lucidchart. (n.d.). *Lucid.app*. Disponível em: [https://www.lucid.app](https://www.lucid.app)


## Histórico de Versões

| Versão | Data       | Descrição         | Autor                          | Revisor          |
|--------|------------|-------------------|--------------------------------|------------------|
| `1.0`  | 27/12/2024 | Adição Metodologia| [Luana Medeiros](https://github.com/LuaMedeiros) | [Lucas Víctor](https://github.com/Lucas13032003)     |
| `1.1`  | 02/01/2025 | Adição Introdução e Modelagem | [Lucas Víctor](https://github.com/Lucas13032003)  | [Maria Alice](https://github.com/maliz30) |
| `1.2`  | 04/01/2025 | Adição da conclusão | [Maria Alice](https://github.com/maliz30) | [Caio Mesquita](https://github.com/Caiomesvie) |
| `1.3`  | 04/01/2025 | Adição do Código e da Explicação |  [Caio Mesquita](https://github.com/Caiomesvie) | [Lucas Víctor](https://github.com/Lucas13032003)   |

