# Chef Indica 🐭

**Código da Disciplina**: FGA0208<br>
**Número do Grupo**: 10<br>
**Entrega**: 03<br>

## Alunos

| Matrícula         | Aluno                              |
|-------------------|------------------------------------|
| 222024283         | Caio Mesquita Vieira              |
| 221021901         | Cecília Ernesto Silva Quaresma    |
| 190028963         | Guilherme Brito de Souza          |
| 211063149         | Izabella Alves Pereira            |
| 200021222         | Júlia Rodrigues Yoshida           |
| 221022050         | Larissa de Jesus Vieira           |
| 190091444         | Luana de Lima Medeiros            |
| 190091703         | Lucas Henrique Lima de Queiroz    |
| 211063194         | Lucas Víctor Ferreira de Araújo   |
| 211063210         | Maria Alice Bernardo da Costa Silva |
| 200073184         | Mateus Fidelis Marinho Maia       |
| 211043745         | Pedro Sampaio Dias Rocha          |
| 212002907         | Zenilda Pedrosa Vieira            |

## Sobre 

Este repositório tem como principal objetivo auxiliar no registro dos artefatos e resultados obtidos no desenvolvimento do projeto Chef Indica, pelo Grupo 10 de Arquitetura e Desenho de Software da Universidade de Brasília (UnB-FGA) no semestre 2024.2.

Chef Indica é um aplicativo para criar e participar de fóruns dedicados a restaurantes, com filtros por região, tipo de comida, restrições e muito mais.

## Screenshots da Terceira Entrega


## Há algo a ser executado?

(X) SIM

( ) NÃO

### Pré-requisitos
- [Docker](https://www.docker.com/);
- [Make](https://www.gnu.org/software/make/);

### Como executar o programa?

### 1. Backend:

Use o comando `make start` ou o comando `make build`.

Existe um detalhe: o banco de dados pode demorar um pouco pra abrir a conexão com o spring boot, e o processo da API pode retornar 0. O compose simplesmente vai executar o processo da API novamente, garantindo a conexão.

### 2. Frontend:

#### Ambiente de Desenvolvimento:

Constrói a imagem para o ambiente de desenvolvimento.


```
make build-dev
```

#### Ambiente de Produção:

Constrói a imagem para o ambiente de produção.
```
make build-prod
```

### Subir o contêiner do frontend:

#### Ambiente de Desenvolvimento:

Inicia o serviço de desenvolvimento e mapeia os arquivos locais para o contêiner.

```
make up-dev
```

#### Ambiente de Produção:

Inicia o serviço de produção com a versão final do aplicativo.

```
make up-prod
```


## Histórico de Versões

|Versão|Data|Descrição|Autor|Revisor|
|:----:|----|---------|-----|:-------:|
|`1.0`|15/12/2024|Adiciona a coverpage e edita as informações|[Izabella Alves](https://github.com/izabellaalves)|[Zenilda Vieira](https://github.com/ZenildaVieira)|
