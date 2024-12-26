# Modelagem Lógica

## Introdução

O modelo físico é a etapa da modelagem de banco de dados que define como os dados serão efetivamente armazenados em um sistema de gerenciamento de banco de dados (SGBD). Nessa fase, traduzem-se os elementos do modelo lógico para estruturas específicas do SGBD, como tabelas, índices, restrições e relacionamentos, considerando as particularidades de desempenho e restrições tecnológicas do ambiente. Segundo Elmasri e Navathe (2017) [1], no livro Fundamentals of Database Systems, o modelo físico "detalha como os dados são representados em termos de arquivos, registros e estruturas de armazenamento, além de definir estratégias de acesso para melhorar a eficiência das consultas e operações de manipulação de dados".

## Metodologia


Devido à necessidade de ajustar o escopo do projeto, o [modelo físico criado na entrega 2](https://unbarqdsw2024-2.github.io/2024.2_G10_Recomendacao_Entrega_02/#/modelagem-dados/modelo-fisico) foi revisado e modificado para atender aos novos requisitos da terceira entrega. Essas alterações foram realizadas para incorporar funcionalidades adicionais e alinhar o modelo com os padrões de projeto que serão implementados no sistema.

A base para a construção deste modelo físico foi o [Diagrama de Classes](https://unbarqdsw2024-2.github.io/2024.2_G10_Recomendacao_Entrega_03/#/refatoracoes/diagrama-de-classes), que passou por revisão e atualização pela equipe nesta fase. Com isso, o [Modelo Conceitual](https://unbarqdsw2024-2.github.io/2024.2_G10_Recomendacao_Entrega_03/#/refatoracoes/modelo-conceitual) e o [Modelo Lógico](https://unbarqdsw2024-2.github.io/2024.2_G10_Recomendacao_Entrega_03/#/refatoracoes/modelo-logico) também foram ajustados, culminando em um modelo físico mais alinhado aos objetivos do projeto. Entre as principais mudanças destacam-se o estabelecimento de relacionamentos entre menus e pratos, além da inclusão de colunas específicas para acomodar diferentes perfis de usuário. 

Comparando as duas versões do modelo físico, as diferenças são notáveis. Na versão anterior, o modelo era composto por 5 tabelas principais: Restaurante, Usuario, Categoria, Pertence e Avalia. Já na versão atual, o modelo foi ampliado para 15 tabelas, com a adição de novas entidades, como Cliente, Funcionario, Menu, Prato, Tag, Favorita, Like e Dislike, que não estavam presentes na versão anterior. Além disso, novas relações foram estabelecidas entre as tabelas, como a relação entre menus e pratos, categorias e restaurantes, e a inclusão de avaliações associadas a tags, ampliando a funcionalidade do sistema e tornando-o mais flexível para diferentes tipos de interação dos usuários.

## Modelo Físico

Abaixo é possível ver a **segunda** versão do script SQL gerado no ambiente MySQL.

```sql

-- -------- < Chefindica - Modelagem física > --------
--
--                    SCRIPT DE CRIACAO (DDL)
--
-- Data Criacao ...........: 24/12/2024
-- Autor(es) ..............: Larissa de Jesus Vieira
-- Banco de Dados .........: MySQL 8.0
-- Base de Dados (nome) ...: chefindica
--
-- PROJETO => 01 Base de Dados
--         => 15 Tabelas
-- 
-- Ultimas Alteracoes
-- ---------------------------------------------------------
-- BASE DE DADOS
CREATE DATABASE IF NOT EXISTS chefindica;
USE chefindica;

-- TABELAS
CREATE TABLE USUARIO (
    idUsuario INT NOT NULL,
    nomeUsuario VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    senha VARCHAR(8) NOT NULL,
    CONSTRAINT USUARIO_PK PRIMARY KEY (idUsuario),
    CONSTRAINT USUARIO_UK UNIQUE (senha)
);

CREATE TABLE CLIENTE (
    idCliente INT NOT NULL,
    unidFederacao CHAR(2) NOT NULL,
    cidade VARCHAR(100) NOT NULL,
    idUsuario INT NOT NULL,
    CONSTRAINT CLIENTE_PK PRIMARY KEY (idCliente),
    CONSTRAINT CLIENTE_USUARIO_FK FOREIGN KEY (idUsuario) 
		REFERENCES USUARIO (idUsuario) 
        ON DELETE CASCADE
);

CREATE TABLE FUNCIONARIO (
    idFuncionario INT NOT NULL,
    cargo VARCHAR(100) NOT NULL,
    telefone VARCHAR(11) NOT NULL,
    idUsuario INT NOT NULL,
    CONSTRAINT FUNCIONARIO_PK PRIMARY KEY (idFuncionario),
    CONSTRAINT FUNCIONARIO_USUARIO_FK FOREIGN KEY (idUsuario) 
		REFERENCES USUARIO (idUsuario) 
        ON DELETE CASCADE
);

CREATE TABLE RESTAURANTE (
    idRestaurante INT NOT NULL,
    nomeRestaurante VARCHAR(100) NOT NULL,
    endereco VARCHAR(500) NOT NULL,
    idUsuario INT,
	CONSTRAINT RESTAURANTE_PK PRIMARY KEY (idRestaurante),
    CONSTRAINT RESTAURANTE_USUARIO_FK FOREIGN KEY (idUsuario) 
		REFERENCES USUARIO (idUsuario) 
        ON DELETE SET NULL
);

CREATE TABLE CATEGORIA (
    idCategoria INT NOT NULL,
    nomeCategoria VARCHAR(60) NOT NULL,
    CONSTRAINT CATEGORIA_PK PRIMARY KEY (idCategoria)
);

CREATE TABLE MENU (
    idMenu INT NOT NULL,
    nomeMenu VARCHAR(100) NOT NULL,
    idRestaurante INT NOT NULL,
    CONSTRAINT MENU_PK PRIMARY KEY (idMenu),
    CONSTRAINT MENU_RESTAURANTE_FK FOREIGN KEY (idRestaurante) 
		REFERENCES RESTAURANTE (idRestaurante) 
        ON DELETE CASCADE
);

CREATE TABLE PRATO (
    idPrato INT NOT NULL,
    nomePrato VARCHAR(100) NOT NULL,
    descricao VARCHAR(500) NOT NULL,
    preco DECIMAL(5,2) NOT NULL,
    CONSTRAINT PRATO_PK PRIMARY KEY (idPrato)
);

CREATE TABLE AVALIACAO (
    idAvaliacao INT NOT NULL,
    estado ENUM('publicado', 'arquivado', 'rascunho') NOT NULL,
    texto VARCHAR(500),
    urlVideo VARCHAR(100),
    urlImagen VARCHAR(100),
    nota DECIMAL(2,1) NOT NULL,
    idRestaurante INT NOT NULL,
    idCliente INT NOT NULL,
    CONSTRAINT AVALIACAO_PK PRIMARY KEY (idAvaliacao),
    CONSTRAINT AVALIACAO_RESTAURANTE_FK FOREIGN KEY (idRestaurante) 
		REFERENCES RESTAURANTE (idRestaurante) 
        ON DELETE CASCADE,
	CONSTRAINT AVALIACAO_CLIENTE_FK FOREIGN KEY (idCliente) 
		REFERENCES CLIENTE (idCliente) 
        ON DELETE CASCADE
);

CREATE TABLE TAG (
    idTag INT NOT NULL,
    nomeTag VARCHAR(25) NOT NULL,
    CONSTRAINT TAG_PK PRIMARY KEY (idTag)
);

CREATE TABLE possui (
    idCategoria INT NOT NULL,
    idRestaurante INT NOT NULL,
    CONSTRAINT possui_CATEGORIA_FK FOREIGN KEY (idCategoria) 
		REFERENCES CATEGORIA (idCategoria) 
        ON DELETE CASCADE,
    CONSTRAINT possui_RESTAURANTE_FK FOREIGN KEY (idRestaurante) 
		REFERENCES RESTAURANTE (idRestaurante) 
        ON DELETE CASCADE
);

CREATE TABLE inclui (
    idMenu INT NOT NULL,
    idPrato INT NOT NULL,
    CONSTRAINT inclui_MENU_FK FOREIGN KEY (idMenu) 
		REFERENCES MENU (idMenu) 
        ON DELETE CASCADE,
    CONSTRAINT inclui_PRATO_FK FOREIGN KEY (idPrato) 
		REFERENCES PRATO (idPrato) 
        ON DELETE CASCADE
);

CREATE TABLE incorpora (
    idTag INT NOT NULL,
    idAvaliacao INT NOT NULL,
    CONSTRAINT incorpora_TAG_FK FOREIGN KEY (idTag) 
		REFERENCES TAG (idTag) 
        ON DELETE CASCADE,
    CONSTRAINT incorpora_AVALIACAO_FK FOREIGN KEY (idAvaliacao) 
		REFERENCES AVALIACAO (idAvaliacao) 
        ON DELETE CASCADE
);

CREATE TABLE favorita (
    idCliente INT NOT NULL,
    idRestaurante INT NOT NULL,
    CONSTRAINT favorita_UK UNIQUE (idCliente, idRestaurante),
    CONSTRAINT favorita_CLIENTE_FK FOREIGN KEY (idCliente) 
		REFERENCES CLIENTE (idCliente) 
        ON DELETE CASCADE,
    CONSTRAINT favorita_RESTAURANTE_FK FOREIGN KEY (idRestaurante)
		REFERENCES RESTAURANTE (idRestaurante) 
        ON DELETE CASCADE
);

CREATE TABLE `like` (
    idCliente INT NOT NULL,
    idRestaurante INT NOT NULL,
    CONSTRAINT like_UK UNIQUE (idCliente, idRestaurante),
    CONSTRAINT like_CLIENTE_FK FOREIGN KEY (idCliente) 
		REFERENCES CLIENTE (idCliente) 
        ON DELETE CASCADE,
    CONSTRAINT like_RESTAURANTE_FK FOREIGN KEY (idRestaurante) 
		REFERENCES RESTAURANTE (idRestaurante) 
        ON DELETE CASCADE
);

CREATE TABLE dislike (
    idCliente INT NOT NULL,
    idRestaurante INT NOT NULL,
    CONSTRAINT dislike_UK UNIQUE (idCliente, idRestaurante),
    CONSTRAINT dislike_CLIENTE_FK FOREIGN KEY (idCliente) 
		REFERENCES CLIENTE (idCliente) 
        ON DELETE CASCADE,
    CONSTRAINT dislike_RESTAURANTE_FK FOREIGN KEY (idRestaurante) 
		REFERENCES RESTAURANTE (idRestaurante) 
        ON DELETE CASCADE
);

```
<center>
<font size="3"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/VieiraLaris">Larissa Vieira</a>, 2024.</p></font>
</center>

## Referências Bibliográficas

>
> [1] Elmasri, R., & Navathe, S. B. (2017). Fundamentals of Database Systems. Pearson.
>

## Histórico de Versão

| Versão | Data | Descrição | Autor | Revisor |
| :----: | ---- | --------- | ----- | ------- |
| `1.0`  |25/12/2024| Adiciona introdução e metodologia  |[Izabella Alves](https://github.com/izabellaalves) |[Larissa Vieira](https://github.com/VieiraLaris) | 
| `1.1`  |25/12/2024| Adiciona script físico  |[Larissa Vieira](https://github.com/VieiraLaris) |  |