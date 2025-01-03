# Repository Pattern

## Introdução

Como utilizado anteriormente na concepção e modelagem dos [Diagrama de Pacotes](https://unbarqdsw2024-2.github.io/2024.2_G10_Recomendacao_Entrega_02/#/modelagem-organizacional-ou-cdu/diagrama-de-pacotes) para a arquitetura do sistema ChefIndica, temos a descrição e utilização do padrão de design "Services" e "Repositories" na organização do projeto, permitindo assim um design modular e escalável, recomendados de forma ampla na literatura, como exemplo dito por Fowler (2003)[1].

O padrão de design "Services" e "Repositories" é amplamente utilizado no desenvolvimento de software para promover a separação de responsabilidades e a organização eficiente do código. O padrão de Service envolve a criação de uma camada que lida com a lógica de negócios, encapsulando os processos que devem ser realizados em resposta a uma solicitação. Essa camada atua como um intermediário entre o controle de entrada (por exemplo, interfaces de usuário) e o modelo de dados, realizando operações como cálculos, validações e orquestração de processos.

Por outro lado, o padrão de Repository é uma abstração para o acesso aos dados, centralizando a lógica de persistência em uma camada dedicada. O repositório isola a aplicação de detalhes específicos do armazenamento, como bancos de dados, arquivos ou APIs externas, permitindo que a aplicação trabalhe de forma mais flexível e desacoplada em relação à tecnologia utilizada para a persistência dos dados. Esse padrão é fundamental para garantir que o código de acesso a dados não seja misturado com a lógica de negócios.

A combinação dos padrões Service e Repository oferece uma arquitetura limpa e escalável. Enquanto o serviço gerencia a lógica de negócios, o repositório garante a abstração do acesso aos dados, promovendo reutilização de código e facilitando a manutenção. Com essas duas camadas bem definidas, torna-se mais fácil modificar, testar e expandir a aplicação ao longo do tempo, sem comprometer a integridade da estrutura existente. Além disso, como demonstrado anteriormente na diagramação de pacotes, esse modelo facilita a implementação de testes unitários, já que cada camada pode ser testada de forma independente.

## Metodologia

Para implementar o Repository Pattern no projeto, além dos demais padrões, foi realizada uma reunião no dia 17/12/2024. Essa reunião definiu quais seriam os padrões a serem implementados e quem faria cada parte da implementação. 

Para o presente pattern, dividimos da seguinte forma: 

- A Introdução (teoria) seria escrita por Mateus Fidelis;
- A metodologia seria escrita por Lucas Queiroz;
- A modelagem e o código seriam feitos por Izabella Alves;
- A conclusão seria escrita por Pedro Sampaio.

## Modelagem

Para exemplificar o uso do padrão Repository, utilizamos a classe Tag de nossa aplicação. É importante destacar que todas as interações com o banco de dados no projeto serão realizadas exclusivamente por meio de repositories, garantindo a separação entre a lógica de persistência e as demais camadas da aplicação.

Inicialmente, criamos a classe ```Tag```, com atributos definidos no [Diagrama de Classes](https://unbarqdsw2024-2.github.io/2024.2_G10_Recomendacao_Entrega_03/#/refatoracoes/diagrama-de-classes) e refinados de acordo com as necessidades do banco de dados especificado no [Modelo Físico](https://unbarqdsw2024-2.github.io/2024.2_G10_Recomendacao_Entrega_03/#/refatoracoes/modelo-fisico). Em seguida, implementamos a interface ```TagRepository```, que estende a ```JpaRepository```, uma interface do Spring Data JPA que fornece métodos padrão para operações de CRUD e consultas personalizadas.

A classe ```TagRepository``` é utilizada pela classe de serviço ```TagService```, que contém a lógica de negócio e age como intermediária entre o controlador e o repositório. Por sua vez, os métodos de ```TagService``` são invocados pelos métodos da classe controladora ```TagController```, responsável por expor as funcionalidades para o cliente através de endpoints HTTP.

Na Figura 1, é apresentado o Diagrama de Classes que ilustra a estrutura e as relações entre as classes implementadas de acordo com este padrão de projeto.

<center>
<p style="text-align: center"><b>Figura 1:</b> Diagrama de Classes do Repository Pattern</p>
<div align="center">
  <img src="https://raw.githubusercontent.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/refs/heads/main/docs/imagens/repository-pattern.png?raw=true" alt="Diagrama do CQRS" >
</div>
<font size="3"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/izabellaalves">Izabella Alves</a>, 2024</p></font>
</center>

## Código

### Classe Tag

``` java
@Entity
@Table(name="tag")
@Getter
@Setter
public class Tag {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idTag;
    private String nomeTag;

    public Tag() {}

    public Tag(String nomeTag) {
        this.nomeTag = nomeTag;
    }
}
```

### Classe TagRepository
``` java
public interface TagRepository extends JpaRepository<Tag, Integer> {
}
```

### Classe TagService
``` java
@Service
public class TagService {

    private final TagRepository tagRepository;

    public TagService(TagRepository tagRepository) {
        this.tagRepository = tagRepository;
    }

    public List<Tag> getAllTags() {
        return tagRepository.findAll();
    }

    public Tag createTag(String nomeTag) {
        Tag tag = new Tag(nomeTag);
        return tagRepository.save(tag);
    }
}
```

### Classe TagController
``` java
@RestController
@RequestMapping("/tags")
public class TagController {

    private final TagService tagService;

    public TagController(TagService tagService) {
        this.tagService = tagService;
    }

    @GetMapping("/getAllTags")
    public ResponseEntity<List<Tag>> getAllTags() {
        return ResponseEntity.ok(tagService.getAllTags());
    }

    @PostMapping("/createTag")
    public ResponseEntity<Tag> createTag(@RequestParam String nome) {
        Tag newTag = tagService.createTag(nome);
        return ResponseEntity.ok(newTag);
    }
}
```
### Exemplo de requisição

<center>
<p style="text-align: center"><b>Figura 2:</b> Exemplo de requisição do Repository Pattern</p>
<div align="center">
  <img src="https://raw.githubusercontent.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/refs/heads/main/docs/imagens/repository-example.png?raw=true" alt="Diagrama do CQRS" >
</div>
<font size="3"><p style="text-align: center"><b>Fonte:</b>Izabella Alves e Zenilda Vieira</a>, 2024</p></font>
</center>


## Conclusão

A implementação do Repository Pattern seguiu os princípios adotados por parte da comunidade de desenvolvimento Java e demonstrou confiabilidade nos testes realizados. Esse padrão foi utilizado para estruturar a aplicação com a interface TagRepository, estendendo a JpaRepository do Spring Data para fornecer métodos padrão, enquanto o serviço TagService gerenciou as operações relacionadas às tags. O controlador TagController expôs essas operações por meio de endpoints HTTP.

Os testes validaram a confiabilidade das funcionalidades implementadas, como a criação e recuperação de tags, confirmando a aplicação eficaz do padrão. O modelo contribuiu para a organização e modularidade da aplicação, garantindo que cada camada desempenhe seu papel de maneira eficiente.

## Referências Bibliográficas

> [1] FOWLER, Martin. Patterns of Enterprise Application Architecture. Boston: Addison-Wesley, 2003. Disponível em: https://martinfowler.com/eaaCatalog/repository.html. Acesso em: 15 nov. 2024.
>

## Bibliografia

>
> FOSTAINI, Renicius Pagotto. Entendendo o Repository Pattern. Medium, 30 maio 2018. Disponível em: <https://renicius-pagotto.medium.com/entendendo-o-repository-pattern-fcdd0c36b63b>. Acesso em: 30 dez. 2024.
> 

## Histórico de Versões

| Versão | Data | Descrição | Autor | Revisor |
| :----: | ---- | --------- | ----- | ------- |
| `1.0`  |30/12/2024| Adiciona modelagem e código | [Izabella Alves](https://github.com/izabellaalves) e [Zenilda Vieira](https://github.com/ZenildaVieira) | [Mateus Fidelis](https://github.com/MatsFidelis) |
| `1.1`  |31/12/2024| Criação da Introdução e Referências |[Mateus Fidelis](https://github.com/MatsFidelis) | [Izabella Alves](https://github.com/izabellaalves) |
| `1.2`  |02/01/2025| Adição de Metodologia |[Lucas Queiroz](https://github.com/lucasqueiroz23) | [Izabella Alves](https://github.com/izabellaalves) |
| `1.3`  |03/01/2025| Adição de Conclusão | [Pedro Sampaio](https://github.com/PedroSampaioDias) | |

