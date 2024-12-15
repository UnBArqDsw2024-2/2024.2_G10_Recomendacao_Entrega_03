### Criar a imagem do frontend:

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
