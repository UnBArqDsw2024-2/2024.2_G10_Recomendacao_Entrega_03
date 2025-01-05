# Container Presenter Pattern

## Introdução

<p style="text-align: justify; text-indent: 2em;"> No desenvolvimento de aplicações React, a modularidade e a separação de responsabilidades são princípios centrais para criar soluções escaláveis e fáceis de manter. O padrão Container-Presenter surge como uma abordagem arquitetural prática que organiza componentes ao dividir suas responsabilidades em duas camadas principais: </p>

- Container (Contêiner): É responsável por gerenciar a lógica de negócios, como buscar dados, manipular estado e gerenciar eventos.
- Presenter (Apresentador): É dedicado exclusivamente à exibição da interface de usuário, sendo desacoplado de qualquer lógica de negócios e recebendo informações por meio de props.

<p style="text-align: justify; text-indent: 2em;"> Esse padrão foi popularizado por Dan Abramov, criador do Redux<sup>1</sup>, que destacou a importância de dividir componentes entre aqueles que gerenciam dados e aqueles que apresentam a interface (Abramov, 2015)[1]. Em seu artigo Presentational and Container Components, ele aponta que essa separação melhora a clareza do código, facilita a manutenção e promove a reutilização de componentes.</p>

<p style="text-align: justify; text-indent: 2em;"> Autores como Michele Bertoli em React Design Patterns and Best Practices (2017)[2] e Alex Banks e Eve Porcello em Learning React (2020)[3] também exploram a importância desse padrão. Eles reforçam que o Container-Presenter não apenas organiza o código, mas também reflete os princípios do React, como composição e unidirecionalidade de dados.</p>

### Benefícios do Padrão Container-Presenter

- Modularidade: Cada componente tem uma responsabilidade clara, facilitando a leitura e manutenção do código.
- Reutilização: Componentes de apresentação podem ser usados em diferentes contextos, já que não dependem diretamente de lógica ou estado.
- Testabilidade: A separação facilita a criação de testes específicos para lógica de negócios e para a interface de usuário.
- Manutenibilidade: Alterações na lógica de negócios ou na apresentação podem ser feitas sem impactar a outra camada.

## Metodologia

Durante a reunião pré-desenvolvimento da entrega, do dia 17/12/2024 com mais informações na [Ata da Reunião](https://unbarqdsw2024-2.github.io/2024.2_G10_Recomendacao_Entrega_03/#/atas-reuniao/ata-reuniao-17-12), foi definido que o padrão Container-Presenter seria uma boa opção de padrão para complementar nosso trabalho sendo aplicado ao Front-End. Após definido o Padrão, foram atribuidas as tarefas da seguinte maneira:

- **Júlia Rodrigues Yoshida**: Encarregada do texto de introdução ao padrão e a modelagem do diagrama de classes.  
- **Caio Mesquita Vieira**: Encarregado do desenvolvimento da metodologia.  
- **Luana de Lima Medeiros** e **Maria Alice Bernardo da Costa Silva**: Encarregadas da implementação do código modelado do padrão.  
- **Izabella Alves Pereira**: Encarregada pela conclusão do artefato e a consolidação dos aprendizados da equipe.

Feita a divisão, Seguimos para a introdução, modelagem e implementação do código por seus responsáveis.

## Modelagem

<p style="text-align: justify; text-indent: 2em;"> Com base no <a href="https://unbarqdsw2024-2.github.io/2024.2_G10_Recomendacao_Entrega_03/#/refatoracoes/diagrama-de-classes">diagrama de classes</a> e no <a href="https://unbarqdsw2024-2.github.io/2024.2_G10_Recomendacao_Entrega_03/#/refatoracoes/modelo-logico">modelo lógico</a>, criamos o diagrama UML a seguir que mostra como o padrão Container-Presenter poderia ser aplicado no Chef Indica, considerando, por exemplo, a funcionalidade de gerenciamento de avaliações de restaurantes.</p>

<center>
<p style="text-align: center"><b>Figura 1:</b> Diagrama UML do Container Presenter.</p>
<div align="center">
  <img src="./imagens/containerpresenter.png" alt="Diagrama UML do Container Presenter" >
</div>
<font size="3"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/juliaryoshida">Júlia Yoshida</a>, 2024</p></font>
</center>

<p style="text-align: justify; text-indent: 2em;">  Como o foco do diagrama é demonstrar como utilizamos o padrão Container-Presenter no projeto Chef Indica, optamos por não incluir diretamente outras classes, como Restaurante, Avaliação e Usuário, no diagrama. No entanto, essas classes desempenham um papel importante no funcionamento da funcionalidade representada. Por exemplo, o Container interage com essas classes para buscar os dados necessários, como as informações do restaurante (classe Restaurante), as avaliações associadas (classe Avaliação) e os detalhes do cliente (classe Cliente, que está associada à classe Usuário). O Presenter, por sua vez, utiliza essas informações para exibi-las na interface, mas de forma indireta, acessando-as através de suas propriedades (props). Assim, enquanto as classes mencionadas não estão explicitamente representadas no diagrama, elas são utilizadas nos atributos e métodos do Container e do Presenter, mostrando sua importância na implementação da funcionalidade.</p>

<b>RestauranteAvaliacaoContainer</b>

<p style="text-align: justify; text-indent: 2em;"> Esta classe atua como o controlador da aplicação, sendo responsável pela lógica de negócio e manipulação dos dados relacionados ao restaurante e suas avaliações.</p>

- Atributos:
    - restaurante: Representa um objeto da classe Restaurante, contendo informações como nome, endereço, e outros atributos relacionados ao restaurante.
    - cliente: Representa o cliente (usuário autenticado) que está interagindo com o sistema.
    - avaliacoes: Um array de objetos da classe Avaliacao, que armazena as avaliações associadas ao restaurante.

- Métodos:
    - buscarDadosRestaurante(idRestaurante: int): void: Este método busca os dados do restaurante no banco de dados, utilizando o identificador do restaurante (idRestaurante) para carregar informações relacionadas.
    - publicarAvaliacao(dadosAvaliacao: Avaliacao): void: Responsável por processar e enviar uma nova avaliação do cliente para o restaurante.
    - arquivarAvaliacao(idAvaliacao: int): void: Método que atualiza o estado de uma avaliação específica para "arquivada", usando o identificador da avaliação (idAvaliacao).

Essa classe centraliza a lógica de interação com o banco de dados e manipulação dos dados, sendo uma ponte entre as camadas de apresentação e persistência.

<b>RestauranteAvaliacaoPresenter</b>

<p style="text-align: justify; text-indent: 2em;"> Essa classe é responsável pela apresentação dos dados gerenciados pelo Container. Sua principal função é renderizar as informações de forma adequada e delegar ações ao Container através de callbacks.</p>

- Atributos (props):
    - props.restaurante: Recebe os dados do restaurante fornecidos pelo Container.
    - props.cliente: Recebe os dados do cliente autenticado.
    - props.avaliacoes: Recebe a lista de avaliações carregadas pelo Container.
    - props.onPublicarAvaliacao: Callback que permite que o Presenter informe ao Container sobre uma nova avaliação a ser enviada.
    - props.onArquivarAvaliacao: Callback que permite que o Presenter solicite ao Container que uma avaliação seja arquivada.

- Métodos de renderização:
    - renderizarDetalhesRestaurante(): JSX: Renderiza os detalhes do restaurante, como nome, endereço e informações complementares.
    - renderizarFormularioAvaliacao(): JSX: Renderiza um formulário para o cliente inserir uma nova avaliação do restaurante.
    - renderizarAvaliacoes(): JSX: Renderiza a lista de avaliações existentes para o restaurante, incluindo opções para arquivar uma avaliação, se aplicável.

## Código
A seguir, apresentamos a implementação do padrão Container-Presenter aplicado à funcionalidade de gerenciamento de avaliações do sistema Chef Indica. Essa abordagem separa claramente a lógica de negócios, centralizada no Container, da exibição da interface, realizada pelo Presenter, promovendo modularidade, reutilização e facilidade de manutenção no código.

### Classe Restaurante

``` java
public class Restaurante {
    private int id; // Identificador único do restaurante.
    private String nome; // Nome do restaurante.
    private String endereco; // Endereço do restaurante.

    // Construtor: inicializa os atributos do restaurante.
    public Restaurante(int id, String nome, String endereco) {
        this.id = id;
        this.nome = nome;
        this.endereco = endereco;
    }

    // Getters: métodos para acessar os atributos do restaurante.
    public int getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public String getEndereco() {
        return endereco;
    }
}
``` 

<font size="2">
    <p style="text-align: center"><b>Fonte:</b>
        <a href="https://github.com/LuaMedeiros">Luana Medeiros</a>
    </p>
</font>

### Classe Avaliacao
``` java
public class Avaliacao {
    private int id; // Identificador único da avaliação.
    private String comentario; // Comentário da avaliação feita pelo cliente.
    private int nota; // Nota atribuída ao restaurante.

    // Construtor: inicializa os atributos da avaliação.
    public Avaliacao(int id, String comentario, int nota) {
        this.id = id;
        this.comentario = comentario;
        this.nota = nota;
    }

    // Getters: métodos para acessar os atributos da avaliação.
    public int getId() {
        return id;
    }

    public String getComentario() {
        return comentario;
    }

    public int getNota() {
        return nota;
    }
}
```
<font size="2">
    <p style="text-align: center"><b>Fonte:</b>
        <a href="https://github.com/LuaMedeiros">Luana Medeiros</a>
    </p>
</font>

### Classe Cliente
``` java
public class Cliente {
    private int id; // Identificador único do cliente.
    private String nome; // Nome do cliente.

    // Construtor: inicializa os atributos do cliente.
    public Cliente(int id, String nome) {
        this.id = id;
        this.nome = nome;
    }

    // Getters: métodos para acessar os atributos do cliente.
    public int getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }
}
```
<font size="2">
    <p style="text-align: center"><b>Fonte:</b>
        <a href="https://github.com/LuaMedeiros">Luana Medeiros</a>
    </p>
</font>

### Classe RestauranteAvaliacaoContainer
``` typescript
import React from 'react';
import RestauranteAvaliacaoPresenter from './RestauranteAvaliacaoPresenter';

const RestauranteAvaliacaoContainer = () => {

    // define os dados simulados
    const restaurante = { id: 1, nome: 'Restaurante da Luana' };
    const cliente = { id: 1, nome: 'Maria Alice' };
    const avaliacoes = [
        { id: 1, clienteId: 1, comentario: 'Gostei muito!', nota: 5 },
    ];

    // declara as funções usadas pelo componente presenter
    const publicarAvaliacao = (dadosAvaliacao: { clienteId: number; comentario: string; nota: number }): void => {
        console.log('Avaliação publicada:', dadosAvaliacao);
    };

    const arquivarAvaliacao = (idAvaliacao: number): void => {
        console.log('Avaliação arquivada:', idAvaliacao);
    };

    return ( // envia os dados para o componente presenter
        <RestauranteAvaliacaoPresenter
        restaurante={restaurante}
        cliente={cliente}
        avaliacoes={avaliacoes}
        onEnviarAvaliacao={publicarAvaliacao}
        onArquivarAvaliacao={arquivarAvaliacao}
        />
    );
};

export default RestauranteAvaliacaoContainer;

```
<font size="2">
    <p style="text-align: center"><b>Fonte:</b>
        <a href="https://github.com/maliz30">Maria Alice</a>
    </p>
</font>

### Classe RestauranteAvaliacaoPresenter
``` typescript
import React, { useState } from 'react';

const RestauranteAvaliacaoPresenter = ({ // declara os props a serem exibidos
    restaurante,
    cliente,
    avaliacoes,
    onEnviarAvaliacao,
    onArquivarAvaliacao,
}: { // define os tipos dos props
    restaurante: { id: number; nome: string };
    cliente: { id: number; nome: string };
    avaliacoes: { id: number; clienteId: number; comentario: string; nota: number }[];
    onEnviarAvaliacao: (dadosAvaliacao: { clienteId: number; comentario: string; nota: number }) => void;
    onArquivarAvaliacao: (idAvaliacao: number) => void;
}) => {
    const [comentario, setComentario] = useState('');
    const [nota, setNota] = useState(0);

  return ( // exibe os dados obtidos pelos props, vindos do container
    <div>
      <div>
        <h2>Bem-vindo, {cliente.nome}!</h2>
        <h1>{restaurante.nome}</h1>
      </div>

      <div>
        <h2>Avaliações</h2>

        <div>
        <textarea
          placeholder="Sua Avaliação"
          value={comentario}
          onChange={(e) => setComentario(e.target.value)}
        />
        <select value={nota} onChange={(e) => setNota(Number(e.target.value))}>
          {[1, 2, 3, 4, 5].map((numeroNota) => (
            <option key={numeroNota} value={numeroNota}>
              {numeroNota}
            </option>
          ))}
        </select>
        <button
          onClick={() => {
            onEnviarAvaliacao({ clienteId: cliente.id, comentario, nota });
            setComentario('');
            setNota(nota);
          }}
        >
          Enviar
        </button>
      </div>

        <div>
          {avaliacoes.length > 0 ? (
            avaliacoes.map((a) => (
              <div key={a.id}>
                <p>{a.comentario}</p>
                <p>Nota: {a.nota}</p>
                <button onClick={() => onArquivarAvaliacao(a.id)}>Arquivar</button>
              </div>
            ))
          ) : (
            <p>Nenhuma avaliação encontrada!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RestauranteAvaliacaoPresenter;

```
<font size="2">
    <p style="text-align: center"><b>Fonte:</b>
        <a href="https://github.com/maliz30">Maria Alice</a>
    </p>
</font>

### Como testar

Para testar a funcionalidade, adicione `/containerPresent` à URL do site ao rodá-lo localmente. Isso exibirá uma tela que contém textos e funções simplificadas, utilizadas para demonstrar o uso do padrão de projeto Container Presenter.

<center>
<p style="text-align: center"><b>Figura 1:</b> Print do código implementado </p>
<div align="center">
    <img src="https://raw.githubusercontent.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/refs/heads/main/docs/imagens/printContainerPresent.png?raw=true" alt="Exemplo de uso do Adapter" >
</div

<font size="2">
    <p style="text-align: center"><b>Fonte:</b>
        <a href="https://github.com/maliz30">Maria Alice</a> e
        <a href="https://github.com/LuaMedeiros">Luana Medeiros</a>
    </p>
</font>
</center>

## Conclusão

O padrão Container-Presenter se mostrou uma estratégia eficaz no desenvolvimento do projeto Chef Indica, particularmente na parte de gestão de avaliações de restaurantes. A sua implementação possibilitou uma distinção nítida entre a lógica de negócios e a apresentação da interface, alinhando-se aos princípios fundamentais do React, como a modularidade e a composição.

A classe RestauranteAvaliacaoContainer concentrou as funções relacionadas ao processamento de dados e à conexão com o banco de dados, enquanto a classe RestauranteAvaliacaoPresenter assegurou que a interface do usuário fosse criada de forma independente da lógica de negócios. Essa divisão resultou em um código mais organizado, modular e fácil de manter. Além disso, a possibilidade de aproveitar componentes de apresentação em diferentes contextos destacou a versatilidade do padrão, e a definição clara de responsabilidades vai facilitar a elaboração de testes específicos para cada camada.

Ao implementar o padrão Container-Presenter, a equipe adotou uma estratégia que não apenas melhora a manutenção do código, mas também incorpora boas práticas reconhecidas no desenvolvimento com React, o que era nossa intenção desde o princípio ao trazer pro projeto padrões que se integrassem bem com a tecnologia escolhida.

#### Conceitos

<p id="conceito1" style="text-align: justify;"><sup>1</sup>: O <b>Redux</b> é uma biblioteca JavaScript de gerenciamento de estado previsível, criada por Dan Abramov e Andrew Clark em 2015. Ele centraliza o estado da aplicação em uma única store, garantindo que mudanças sejam controladas por ações e reducers, facilitando a depuração, a escalabilidade e a manutenção.</p>

## Referências Bibliográficas

> [1] ABRAMOV, Dan. Presentational and Container Components. Medium, 2015. Disponível em: https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0. Acesso em: 31 dez. 2024.
>
> [2] BANKS, Alex; PORCELLO, Eve. Learning React: modern patterns for developing React apps. Sebastopol: O'Reilly Media, 2020.
>
> [3] BERTOLI, Michele. React Design Patterns and Best Practices. Birmingham: Packt Publishing, 2017.


## Histórico de Versões

| Versão | Data | Descrição | Autor | Revisor |
| :----: | ---- | --------- | ----- | ------- |
| `1.0`  |31/12/2024| Adição da introdução do documento |[Júlia Yoshida](https://github.com/juliaryoshida)|[Luana Medeiros](https://github.com/LuaMedeiros)|
| `1.1`  |31/12/2024| Adição da modelagem do documento |[Júlia Yoshida](https://github.com/juliaryoshida)|[Luana Medeiros](https://github.com/LuaMedeiros)|
| `1.2`  |04/01/2025| Adição dos códigos |[Luana Medeiros](https://github.com/LuaMedeiros)| [Caio Mesquita](https://github.com/Caiomesvie) |
| `1.3`  |04/01/2025| Adição da Metodologia |[Caio Mesquita](https://github.com/Caiomesvie)| [Luana Medeiros](https://github.com/LuaMedeiros) |
| `1.4`  |05/01/2025| Adição, ajustes e revisão dos códigos |[Maria Alice](https://github.com/maliz30)| [Luana Medeiros](https://github.com/LuaMedeiros) |
| `1.5`  |05/01/2025| Adiciona conclusão |[Izabella Alves](https://github.com/izabellaalves)| [Luana Medeiros](https://github.com/LuaMedeiros) |
