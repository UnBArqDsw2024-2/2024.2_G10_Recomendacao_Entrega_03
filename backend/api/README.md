# README.md

## Pré-requisitos
- [Docker](https://www.docker.com/);
- [Make](https://www.gnu.org/software/make/);

## Como executar o programa?

Use o comando `make start` ou o comando `make build`.

Existe um detalhe: o banco de dados pode demorar um pouco pra abrir a conexão com o spring boot, e o processo da API pode retornar 0. O compose simplesmente vai executar o processo da API novamente, garantindo a conexão.

