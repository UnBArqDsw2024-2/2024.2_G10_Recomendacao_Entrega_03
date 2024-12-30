# Repository Pattern

## Introdução


## Metodologia

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

## Referências Bibliográficas


## Bibliografia

>
> FOSTAINI, Renicius Pagotto. Entendendo o Repository Pattern. Medium, 30 maio 2018. Disponível em: <https://renicius-pagotto.medium.com/entendendo-o-repository-pattern-fcdd0c36b63b>. Acesso em: 30 dez. 2024.
> 

## Histórico de Versões

| Versão | Data | Descrição | Autor | Revisor |
| :----: | ---- | --------- | ----- | ------- |
| `1.0`  |30/12/2024| Adiciona modelagem e código | [Izabella Alves](https://github.com/izabellaalves) e [Zenilda Vieira](https://github.com/ZenildaVieira) | [Mateus Fidelis](https://github.com/MatsFidelis) |