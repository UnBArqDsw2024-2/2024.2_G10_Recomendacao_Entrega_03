# Factory Method

## Introdução

Os padrões GoF (Gang of Four) foram definidos pelos autores Erich Gamma, Richard Helm, Ralph Johnson e John Vlissides no livro Design Patterns: Elements of Reusable Object-Oriented Software [1]. Eles são classificados em três categorias:

* Padrões Criacionais: lidam com a criação de objetos.
* Padrões Estruturais: lidam com a composição de classes e objetos.
* Padrões Comportamentais: lidam com a interação entre objetos.

Destacando os padrões criacionais de design, eles têm como objetivo principal abstrair e otimizar o processo de criação de objetos. Eles ajudam a tornar os sistemas mais independentes de como os objetos são criados, compostos e representados. Em vez de instanciar diretamente objetos concretos, esses padrões promovem o uso de interfaces e classes abstratas, permitindo maior flexibilidade, reuso de código e desacoplamento.

Existem vários padrões criacionais destacados pelos GoF, tais como:

* Factory Method: define uma interface para criar um objeto, mas permite que as subclasses decidam qual classe será instanciada.
* Abstract Factory: oferece uma interface para criar famílias de objetos relacionados ou interdependentes sem especificar suas classes concretas.
* Builder: separa a construção de um objeto complexo de sua representação.
* Prototype: cria novos objetos copiando uma instância existente.
* Singleton: garante que uma classe tenha apenas uma instância e fornece um ponto de acesso global.
  
Esse documento trata da implementação do padrão de design *Factory Method* adaptado, devido à escolha feita pelo grupo (conforme é descrito no tópico Metodologia mais abaixo).

### O Padrão Factory Method

O Factory Method é um padrão de projeto criacional utilizado para delegar a responsabilidade da criação de objetos a subclasses específicas, promovendo a reutilização de código, flexibilidade e aderência ao princípio de programação para interfaces. Ele desacopla o código cliente do código de implementação concreta, reduzindo a dependência direta entre os dois, aumentando a coesão e o encapsulamento. Promove também a reutilização de código ao centralizar a criação em um método específico e permite que o sistema seja facilmente expandido sem alterar o código cliente.

Esse padrão é implementado através de um espelhamento da hierarquia inicial do projeto seguindo a estrutura abaixo:

* Creator: define uma interface ou classe abstrata que declara o método fábrica.
* ConcreteCreator: subclasse do criador que implementa o método fábrica, retornando instâncias de produtos concretos.
* Product: define a interface comum que todos os produtos devem implementar.
* ConcreteProduct: subclasse que implementa a interface do produto, fornecendo comportamentos específicos.

O uso do padrão de design criacional *Factory Method* se justifica principalmente quando a entidade Produto apresenta baixo desempenho, com sobrecarga de atividades. Assim, a criação de uma hierarquia espelho com a única função de criar as instâncias alivia o processamento dessa entidade e traz outros benefícios, como:

1. Flexibilidade: facilita a adição de novos produtos sem modificar o código existente.
2. Desacoplamento:o cliente depende da abstração do produto, e não de sua implementação concreta.
3. Reutilização: o código relacionado à criação de objetos pode ser reutilizado em diferentes partes do sistema.

### O Padrão Abstract Factory

O Abstract Factory é um padrão criacional que abstrai o processo de criação de famílias de objetos relacionados. Seu principal objetivo é garantir que o código cliente permaneça independente das implementações concretas dos objetos que utiliza e reduzir sua carga de processamento.

Para uma implementação de vários produtos e várias hierarquias, como o exemplo a seguir, o padrão geralmente segue esta estrutura:

* Client: Usa apenas interfaces fornecidas pelas fábricas e produtos abstratos.
* AbstractProductA, AbstractProductB: Define uma interface para cada tipo de produto.
* ProductA1, ProductA2, ProductB1, ProductB2: Implementa a interface de cada produto abstrato.
* AbstractFactory: Declara métodos para criar cada tipo de produto abstrato.
* ConcreteFactory1, ConcreteFactory2: Implementa os métodos declarados, criando produtos concretos.

O uso do padrão de design criacional *Abstract Factory* também se justifica quando a entidade Cliente apresenta baixo desempenho, com sobrecarga de atividades. Assim, a criação de uma hierarquia separada com a função de criar as instâncias de cada família alivia o processamento da entidade Cliente e traz também outros benefícios:

1. Isolamento de Classes Concretas: Os clientes manipulam objetos através de suas interfaces, sem precisar conhecer as classes concretas.
2. Facilidade de Troca de Famílias de Produtos: Alterar uma família de produtos envolve apenas trocar a fábrica concreta usada pelo sistema.
3. Consistência entre Produtos: Como as fábricas criam objetos interdependentes, garantem que os objetos produzidos sejam compatíveis entre si.
4. Modularidade na inclusão de novas Família de Produtos: Para acrescentar uma família de produtos, basta adicionar a fábrica concreta correspondente e fazer poucas adições aos códigos existentes (basicamente alguns métodos e criações de instâncias).

## Metodologia

### Processo de tomada de decisão para o uso de Factory Method

<p style="text-align: justify; text-indent: 2em;"> Com base no <a href="https://unbarqdsw2024-2.github.io/2024.2_G10_Recomendacao_Entrega_03/#/refatoracoes/diagrama-de-classes">diagrama de classes refatorado</a>, é possível perceber que o sistema Chef Indica lida com uma grande variedade de entidades inter-relacionadas, como Usuários, Restaurantes, Pratos, Avaliações (texto, vídeo, imagem) e seus atributos específicos. Assim, o projeto requer a criação consistente de objetos complexos para suportar:</p>

- Múltiplos tipos de avaliações (texto, vídeo, imagem) e notificações;
- Diferentes categorias de restaurantes e menus personalizados;
- Funcionalidades específicas para clientes e funcionários.

#### Discussões e Divergências

<p style="text-align: justify; text-indent: 2em;"> Nos reunimos presencialmente após a aula de Arquitetura e Desenho de Software no dia 16/12. Durante a reunião do grupo, surgiram debates sobre a melhor abordagem para gerenciar a criação desses objetos:</p>

<b>1. Factory Method</b>

<p style="text-align: justify; text-indent: 2em;">Inicialmente, alguns membros sugeriram o uso do Factory Method para encapsular a lógica de criação de objetos. Essa abordagem parecia viável para a criação de objetos isolados, como Avaliações individuais. Porém, ao analisarmos o diagrama de classes, percebemos que:</p>

- As entidades AvaliaçãoTexto, AvaliaçãoImagem e AvaliaçãoVídeo pertencem à mesma família de objetos e compartilham características comuns.
- <p style="text-align: justify;">O Factory Method não seria suficiente para gerenciar a criação de famílias inteiras de objetos relacionados (ex.: Avaliações e Notificações), levando a duplicidade de código ao lidar com essas dependências.</p>

<b>2. Builder</b>
<p style="text-align: justify; text-indent: 2em;">Outros sugeriram o uso do Builder, que é eficiente para construir objetos complexos com muitos atributos opcionais. Durante a análise, consideramos sua utilização para:</p>

- Configurar objetos detalhados, como Menus personalizados para restaurantes.

<p style="text-align: justify; text-indent: 2em;">No entanto, identificamos uma limitação crítica: o Builder é projetado para a construção passo a passo de um único objeto por vez. Isso não atenderia à necessidade de criar grupos consistentes de objetos interconectados, como as diferentes variações de Avaliação e Notificação que precisam ser tratadas em conjunto.</p>

<b>3. Abstract Factory</b>

<p style="text-align: justify; text-indent: 2em;">Por fim, alguns membros propuseram o uso do Abstract Factory, destacando sua capacidade de:</p>

- Criar famílias de objetos relacionados, como as variações de Avaliação (Texto, Imagem e Vídeo) e as Notificações, de forma consistente.
- Promover a extensibilidade e modularidade do sistema, permitindo integrações futuras sem impacto nas implementações existentes.

#### Escolha

<p style="text-align: justify; text-indent: 2em;">A princípio, a escolha do padrão de design Abstract Factory foi definida em consenso após considerar:</p>

<b>1. Consistência com o diagrama de classes</b>

- Entidades como AvaliaçãoTexto, AvaliaçãoImagem e AvaliaçãoVídeo pertencem à mesma família de objetos e compartilham características comuns.
- O uso de fábricas permite criar diferentes variações de Avaliação sem duplicação de código.

<b>2. Modularidade e Escalabilidade</b>
- <p style="text-align: justify;">O Abstract Factory garante que novos tipos de módulos possam ser adicionados sem impactar o restante do sistema.</p>

<b>3. Requisitos de extensibilidade</b>
- O padrão atende ao princípio Open/Closed, facilitando a adição de novos tipos de avaliações ou categorias de restaurantes sem alterar implementações existentes.

## Modelagem

Após a escolha do grupo, ficou decidido que o padrão de design *Abstract Factory* seria aplicado à criação de objetos relacionados aos tipos de avaliação do sistema Chef Indica, pois cada tipo de avaliação possui características distintas (texto, vídeo, imagem), mas compartilham a mesma interface base (mesma família). Observou-se que se o sistema precisasse trocar o tipo de avaliação (por exemplo, migrar para avaliações exclusivamente por vídeo), bastaria mudar a fábrica utilizada, sem alterar o código cliente. Como nosso projeto é apenas didático, não foi possível fazer testes de desempenho para avaliar a real necessidade da aplicação desse padrão de design. Dessa forma, tentamos implementar uma o padrão de design *Abstract Factory* no nosso projeto apenas a título de aprendizagem.

* Implementação:
    - AbstractProductA: Avaliacao
    - ProductA1, ProductA2 e ProductA3:
        . AvaliaçaoTexto, AvaliaçaoVideo, AvaliaçaoImagem.
    - AbstractFactory: AvaliacaoFactory
        . Método: criarAvaliacao()
    - ConcreteFactory1, ConcreteFactory2 e ConcreteFactory3:
        . AvaliacaoTextoFactory - fábrica que cria instâncias de textos.
        . AvaliacaoVideoFactory - fábrica que cria instâncias de vídeos.
        . AvaliacaoImagemFactory - fábrica que cria instâncias de imagens.

Porém, ao modelarmos essa estrutura, observamos que tínhamos apenas uma família de produtos, a *Avaliacao*. Então, concluímos que o uso do *Abstract Factory* em sua essência não seria viável, pois sua principal característica é a de instanciar objetos de diferentes famílias relacionadas entre si. Assim, nos voltamos para o *Method Factory* que trabalha com um produto só (e não com famílias). Mas, como a nossa hierarquia contém 3 subprodutos, formando uma família do produto *Avaliacao*, resolvemos implementar uma adaptação do padrão *Method Factory* espelhando a estrutura inicial, porém instanciando a família de produtos existente com diferentes fábricas. Na figura 1 é possível observar o modelo de domínio criado:

<p style="text-align: center"><b>Figura 1:</b> Modelo de domínio do Factory Method adaptado utilizado no projeto.</p>
<div align="center">
  <img src="https://raw.githubusercontent.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/refs/heads/main/docs/imagens/diagrama-abstract-factory-method.png?raw=true" alt="Modelo de domínio do Abstract Factory" >
</div>
<font size="3"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/zenildavieira">Zenilda Vieira</a>, 2024</p></font>


## Código

As classes utilizadas para implementar o Factory Method em Java foram a [AvaliacaoFactory](/backend/api/src/main/java/com/api/API/models/factoryMethod/AvaliacaoFactory.java), [AvaliacaoImagemFactory](/backend/api/src/main/java/com/api/API/models/factoryMethod/AvaliacaoImagemFactory.java), [AvaliacaoTextoFactory](/backend/api/src/main/java/com/api/API/models/factoryMethod/AvaliacaoTextoFactory.java), [AvaliacaoVideoFactory](/backend/api/src/main/java/com/api/API/models/factoryMethod/AvaliacaoVideoFactory.java) entre outras mais genéricas como [AvaliacaoImagem](/backend/api/src/main/java/com/api/API/models/AvaliacaoImagem.java), [AvaliacaoTexto](/backend/api/src/main/java/com/api/API/models/AvaliacaoTexto.java) e [AvaliacaoVideo](/backend/api/src/main/java/com/api/API/models/AvaliacaoVideo.java) além da classe abstrata principal da [Avaliação](/backend/api/src/main/java/com/api/API/models/Avaliacao.java). A controladora fica definida pela [AvaliacaoController](/backend/api/src/main/java/com/api/API/controllers/AvaliacaoController.java). O código abaixo é uma adaptação para demonstrar a utilização do padrão de projeto criacional Factory Method no projeto Chef Indica.

```Java

// Classe abstrata Avaliacao - estrutura básica
@Data
public abstract class Avaliacao {

    private Usuario autor;
    private Restaurante restaurante;
    private Estado estado;
    private Tag tags[];

    public abstract String publicar();
    public abstract String arquivar();
    public abstract String validar();
    public abstract String editar();
}


// Classe AvaliacaoFactory - cria objetos Avaliacao
@Component
public abstract class AvaliacaoFactory {

    public AvaliacaoFactory obterFactory(String tipo) {
        switch (UrlUtils.obterUltimoParametroDaURL(tipo)) {
            case "avaliacaoImagem":
                return new AvaliacaoImagemFactory();
            case "avaliacaoTexto":
                return new AvaliacaoTextoFactory();
            case "avaliacaoVideo":
                return new AvaliacaoVideoFactory();
            default:
                throw new IllegalArgumentException("Tipo de avaliação inválido: " + tipo);
        }
    }

    public abstract Avaliacao criaAvaliacao();

}


@Component
@Primary
public class AvaliacaoImagemFactory extends AvaliacaoFactory{

    @Override
    public Avaliacao criaAvaliacao() {
        return new AvaliacaoImagem();
    }
}


@Component
public class AvaliacaoTextoFactory extends AvaliacaoFactory {

    @Override
    public Avaliacao criaAvaliacao() {
        return new AvaliacaoTexto();
    }
}


@Component
public class AvaliacaoVideoFactory extends AvaliacaoFactory{
    @Override
    public Avaliacao criaAvaliacao() {
        return new AvaliacaoVideo();
    }
}

@Data
@NoArgsConstructor
public class AvaliacaoImagem extends Avaliacao{

    private String urlImagem;

    public AvaliacaoImagem(String urlImagem) {
        this.urlImagem = urlImagem;
    }

    @Override
    public String publicar() {
        return "Avaliação de imagem publicada com sucesso!";
    }

    @Override
    public String arquivar() {
        return "Avaliação de imagem arquivada com sucesso!";
    }

    @Override
    public String validar() {
        return "Avaliação de imagem validada com sucesso!";
    }

    @Override
    public String editar() {
        return "Avaliação de imagem editada com sucesso!";
    }
}



@Data
@NoArgsConstructor
public class AvaliacaoTexto extends Avaliacao {

    private String texto;
    private int tamanhoTexto;

    public AvaliacaoTexto(String texto, int tamanhoTexto) {
        this.texto = texto;
        this.tamanhoTexto = tamanhoTexto;
    }

    @Override
    public String publicar() {
        return "Avaliação de texto publicada com sucesso!";
    }

    @Override
    public String arquivar() {
        return "Avaliação de texto arquivada com sucesso!";
    }

    @Override
    public String validar() {
        return "Avaliação de texto validada com sucesso!";
    }

    @Override
    public String editar() {
        return "Avaliação de texto editada com sucesso!";
    }
}


@Data
@NoArgsConstructor
public class AvaliacaoVideo extends Avaliacao{

    private String urlVideo;
    private double duracao;

    public AvaliacaoVideo(String url, double duracao) {
        this.urlVideo = url;
        this.duracao = duracao;
    }

    @Override
    public String publicar() {
        return "Avaliação de vídeo publicada com sucesso!";
    }

    @Override
    public String arquivar() {
        return "Avaliação de vídeo arquivada com sucesso!";
    }

    @Override
    public String validar() {
        return "Avaliação de vídeo validada com sucesso!";
    }

    @Override
    public String editar() {
        return "Avaliação de vídeo editada com sucesso!";
    }
}

// define a controladora
@RestController
@RequestMapping("/avaliacoes")
public class AvaliacaoController {

    private final AvaliacaoFactory avaliacaoFactory;  //injeta a factory principal

    public AvaliacaoController(
        AvaliacaoFactory avaliacaoFactory

    ) {
        this.avaliacaoFactory = avaliacaoFactory;

    }

// funcao main
    @PostMapping("/criarAvaliacao")
    public ResponseEntity<String> criarAvaliacao(@RequestParam String tipo, @RequestBody Map<String, Object> parametros) {
        try {
            AvaliacaoFactory factory = avaliacaoFactory.obterFactory(tipo);  // obtem a factory correta
            Avaliacao avaliacao = factory.criaAvaliacao();  // cria a avaliacao

            return ResponseEntity.ok(avaliacao.publicar());  // retorna mensagem de publicacao
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());  // retorna erro em caso inválido
        }
    }
}

```

### Imagens


<p style="text-align: center"><b>Figura 2:</b> Local Host Avaliação Vídeo</p>
<div align="center">
  <img src="https://raw.githubusercontent.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/refs/heads/main/docs/imagens/avaliacao1.png?raw=true" alt="AvaliacaoVideo" >
</div>
<font size="3"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/izabellaalves">Izabella Alves</a>, 2024</p></font>


<p style="text-align: center"><b>Figura 3:</b> Local Host Avaliação Texto</p>
<div align="center">
  <img src="https://raw.githubusercontent.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/refs/heads/main/docs/imagens/avaliacao2.png?raw=true" alt="AvaliacaoTexto" >
</div>
<font size="3"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/izabellaalves">Izabella Alves</a>, 2024</p></font>


<p style="text-align: center"><b>Figura 4:</b> Local Host Avaliação Imagem</p>
<div align="center">
  <img src="https://raw.githubusercontent.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/refs/heads/main/docs/imagens/avaliacao3.png?raw=true" alt="AvaliacaoImagem" >
</div>
<font size="3"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/izabellaalves">Izabella Alves</a>, 2024</p></font>


## Conclusão

O uso do padrão Factory Method foi uma escolha estratégica para o projeto Chef Indica, pois permitiu delegar a criação de diferentes tipos de avaliações (texto, imagem e vídeo), promovendo flexibilidade e desacoplamento no código. A adaptação do Factory Method foi adotada após a constatação de que o Abstract Factory não atendia ao contexto de uma única família de produtos, as avaliações, e trouxe vantagens como a modularização e a reutilização de código sem redundâncias.

Isso possibilitou a fácil expansão do sistema com novas variações de avaliações, mantendo o código modular e objetivo. Além disso, garantiu que futuras modificações, como a inclusão de novos tipos de avaliações ou funcionalidades, possam ser implementadas de forma eficiente, sem a necessidade de grandes modificações.

## Referências Bibliográficas
> [1] GAMMA, Erich; HELM, Richard; JOHNSON, Ralph; VLISSIDES, John. Design Patterns: Elements of Reusable Object-Oriented Software. Addison-Wesley, 1994.
>
> 
## Bibliografia

## Histórico de Versões

| Versão | Data | Descrição | Autor | Revisor |
| :----: | ---- | --------- | ----- | ------- |
| `1.0`  |25/12/2024| Adição da tomada de decisão | [Júlia Yoshida](https://github.com/juliaryoshida) |[Zenilda Vieira](https://github.com/zenildavieira)  |
| `1.1`  |27/12/2024| Adição da introdução teórica e modelagem | [Zenilda Vieira](https://github.com/zenildavieira)| [Izabella Alves](https://github.com/izabellaalves) |
| `1.2`  |30/12/2024| Adição da modificação de decisão para Factory Method adaptado| [Zenilda Vieira](https://github.com/zenildavieira) <br> [Júlia Yoshida](https://github.com/juliaryoshida) | [Izabella Alves](https://github.com/izabellaalves) |
| `1.3`  |31/12/2024| Adição do código e imagens| [Cecília Quaresma](https://github.com/cqcoding) <br> [Izabella Alves](https://github.com/izabellaalves) |  [Zenilda Vieira](https://github.com/zenildavieira)  |
| `1.4`  |02/01/2025| Adição da conclusão | [Larissa Vieira](https://github.com/VieiraLaris) |  |