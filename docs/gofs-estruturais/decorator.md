# Decorator

## Introdução

O padrão Decorator é um padrão de projeto estrutural onde há o acomplamento de novos comportamentos à objetos de maneira dinâmica, os inserindo em invólucros de objetos que contém os novos comportamentos [1]. Em sua definição GOF, apresenta o decorator como uma alternativa ao uso de herança no código através do uso de composição. [2]. É um padrão indicado para o uso onde teremos uma classe central básica que poderá ter atributos métodos e acressentados conforme necessidade. É um padrão parecido com o [Composite](https://unbarqdsw2024-2.github.io/2024.2_G10_Recomendacao_Entrega_03/#/gofs-estruturais/composite) pelo uso de composição em sua estrutura.
Abaixo segue um exemplo base de diagrama UML seguindo o padrão decorator:

<center>
<p style="text-align: center"><b>Figura 1:</b> Exemplo de Diagrama UML Decorator</p>
<div align="center">
  <img src="https://raw.githubusercontent.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/refs/heads/main/docs/imagens/exemplo_decorator.png?raw=true" alt="Padrão Decorator" >
</div>
<font size="3"><p style="text-align: center"><b>Fonte:</b> Vinicius Climaco, 2022.</p></font>
</center>



## Metodologia

Após uma [reunião no dia 17/12](https://unbarqdsw2024-2.github.io/2024.2_G10_Recomendacao_Entrega_03/#/atas-reuniao/ata-reuniao-17-12) com os membros da equipe, foram definidos os padrões de projeto que seriam utilizados na implementação de algumas funcionalidades do projeto Chef Indica. A equipe decidiu que cada integrante contribuiria com a aplicação de um padrão comportamental, um criacional e um estrutural, abrangendo modelagem, desenvolvimento de código e documentação.

Dentre os padrões selecionados, cinco pessoas ficaram responsáveis pela implementação do padrão Decorator. Essa responsabilidade inclui a elaboração de uma introdução com as referências bibliográficas utilizadas, a descrição da metodologia de produção, a modelagem de um diagrama de classes representativo (baseado no [Diagrama de Classes](https://unbarqdsw2024-2.github.io/2024.2_G10_Recomendacao_Entrega_03/#/refatoracoes/diagrama-de-classes) principal do projeto), a implementação do código correspondente e a redação da conclusão.

As tarefas foram distribuídas da seguinte forma: **Caio Mesquita** ficou encarregado da modelagem do diagrama de classes e da introdução; **Larissa Vieira** assumiu a descrição da metodologia; **Guilherme Brito** e **Lucas Queiroz** dividiram a implementação do código; e **Zenilda Vieira** ficou responsável pela redação da conclusão.

## Modelagem
Abaixo se encontra a primeira versão do diagrama de classes do padrão Decorator, onde temos a implementação do sistema de avaliação que se encaixa muito bem no padrão, uma vez que o sistema de avalialção conta com uma nota base no sistema dada pelo usuário e pode ser incrementada com outros atributos como imagens e um comentário escrito. O digrama diz respeito a implementação da interface base da avaliação, da componente concreto de uma avaliação base, do decorator referenciado ao componente e dos 4 decorator's concretos que incrementam a avaliação base em 4 novas funcionalidades, onde é adicionado um comentário, imagens, vídeos ou tags de marcação.

<center>
<p style="text-align: center"><b>Figura 1:</b> Primeira versão do Diagrama de Classes do Padrão Composite</p>
<div align="center">
  <img src="https://raw.githubusercontent.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/refs/heads/main/docs/imagens/diagrama_decorator.png?raw=true" alt="Padrão Decorator" >
</div>
<font size="3"><p style="text-align: center"><b>Fonte:</b> Caio Mesquita, 2024.</p></font>
</center>



## Código
As classes utilizadas para implementar o Decorator foram: [Avaliacao](https://github.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/blob/main/frontend\app\src\DecoratorChefIndica\src\decorator\Avaliacao.jsx), [AvaliacaoBase](https://github.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/blob/main/frontend\app\src\DecoratorChefIndica\src\decorator\AvaliacaoBase.jsx), [DecoratorAvaliacao](https://github.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/blob/main/frontend\app\src\DecoratorChefIndica\src\decorator\DecoratorAvaliacao.jsx), [DecoratorComentario](https://github.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/blob/main/frontend\app\src\DecoratorChefIndica\src\decorator\DecoratorComentario.jsx), [DecoratorImagem](https://github.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/blob/main/frontend\app\src\DecoratorChefIndica\src\decorator\DecoratorImagem.jsx), [DecoratorTags](https://github.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/blob/main/frontend\app\src\DecoratorChefIndica\src\decorator\DecoratorTags.jsx), [DecoratorVideo](https://github.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/blob/main/frontend\app\src\DecoratorChefIndica\src\decorator\DecoratorVideo.jsx), [Main](https://github.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/blob/main/frontend\app\src\DecoratorChefIndica\src\mains.jsx).

O código abaixo foram retirados dos códigos citados acima:
### Código da Avaliação

``` jsx

import React from 'react';

export function Avaliacao() {
  const exibir = () => {
    return "Exibindo avaliação";
  };

  const excluir = () => {
    console.log("Avaliação excluída");
  };

  const arquivar = () => {
    console.log("Avaliação arquivada");
  };

  return { exibir, excluir, arquivar };
}

```
<font size="2"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/GuilhermeB12">Guilherme Brito</a> , <a href="https://github.com/lucasqueiroz23">Lucas Queiroz</a> e <a href="https://github.com/zenildavieira">Zenilda Vieira</a>, 2025</p></font>

### Código da Avaliação Base

``` jsx

import { Avaliacao } from './Avaliacao';

export function AvaliacaoBase(notaInicial) {
  let nota = notaInicial;
  let arquivado = false;

  const exibir = () => {
    return `Nota: ${nota}, Arquivado: ${arquivado}`;
  };

  const excluir = () => {
    console.log('Avaliação excluída.\n');
  };

  const arquivar = () => {
    arquivado = true;
    console.log('Avaliação arquivada.\n');
  };

  return { exibir, excluir, arquivar };
}

```
<font size="2"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/GuilhermeB12">Guilherme Brito</a> , <a href="https://github.com/lucasqueiroz23">Lucas Queiroz</a> e <a href="https://github.com/zenildavieira">Zenilda Vieira</a>, 2025</p></font>

### Código do DecoratorAvaliacao

``` jsx

import { Avaliacao } from './Avaliacao';

export function DecoratorAvaliacao(componente) {
  const exibir = () => {
    return componente.exibir();
  };

  const excluir = () => {
    componente.excluir();
  };

  const arquivar = () => {
    componente.arquivar();
  };

  return { exibir, excluir, arquivar };
}

```
<font size="2"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/GuilhermeB12">Guilherme Brito</a> , <a href="https://github.com/lucasqueiroz23">Lucas Queiroz</a> e <a href="https://github.com/zenildavieira">Zenilda Vieira</a>, 2025</p></font>

### Código do DecoratorComentario

``` jsx

import { DecoratorAvaliacao } from './DecoratorAvaliacao';

export function DecoratorComentario(componente, initialComentario) {
  let comentario = initialComentario;

  const exibir = () => {
    return `${componente.exibir()}, Comentário: ${comentario}`;
  };

  const addComentario = (novoComentario) => {
    comentario = novoComentario;
  };

  return {
    ...componente, 
    exibir,
    addComentario,
  };
}

```
<font size="2"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/GuilhermeB12">Guilherme Brito</a> , <a href="https://github.com/lucasqueiroz23">Lucas Queiroz</a> e <a href="https://github.com/zenildavieira">Zenilda Vieira</a>, 2025</p></font>

### Código do DecoratorImagem

``` jsx

import { DecoratorAvaliacao } from './DecoratorAvaliacao';

export function DecoratorImagem(componente, urlImagem) {
  const imagem = urlImagem;

  const exibir = () => {
    return `${componente.exibir()}, Imagem: ${imagem}`;
  };

  const getImagem = () => {
    return imagem;
  };

  return {
    ...componente,  
    exibir,         
    getImagem,      
  };
}

```
<font size="2"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/GuilhermeB12">Guilherme Brito</a> , <a href="https://github.com/lucasqueiroz23">Lucas Queiroz</a> e <a href="https://github.com/zenildavieira">Zenilda Vieira</a>, 2025</p></font>

### Código do DecoratorTags

``` jsx

import { DecoratorAvaliacao } from './DecoratorAvaliacao';

export function DecoratorTags(componente, listaTags) {
  const tags = listaTags;

  const exibir = () => {
    return `${componente.exibir()}, Tags: ${tags.join(', ')}`;
  };

  const listarTags = () => {
    return tags;
  };

  return {
    ...componente,  
    exibir,         
    listarTags,     
  };
}

```
<font size="2"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/GuilhermeB12">Guilherme Brito</a> , <a href="https://github.com/lucasqueiroz23">Lucas Queiroz</a> e <a href="https://github.com/zenildavieira">Zenilda Vieira</a>, 2025</p></font>

### Código do DecoratorVideo

``` jsx

import { DecoratorAvaliacao } from './DecoratorAvaliacao';

export function DecoratorVideo(componente, urlVideo) {
  const video = urlVideo;

  const exibir = () => {
    return `${componente.exibir()}, Vídeo: ${video}`;
  };

  const getVideo = () => {
    return video;
  };

  return {
    ...componente,  
    exibir,         
    getVideo,       
  };
}

```
<font size="2"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/GuilhermeB12">Guilherme Brito</a> , <a href="https://github.com/lucasqueiroz23">Lucas Queiroz</a> e <a href="https://github.com/zenildavieira">Zenilda Vieira</a>, 2025</p></font>

### Código da Main

``` jsx

import React from 'react';
import { AvaliacaoBase } from './decorator/AvaliacaoBase';
import { DecoratorImagem } from './decorator/DecoratorImagem';
import { DecoratorComentario } from './decorator/DecoratorComentario';
import { DecoratorVideo } from './decorator/DecoratorVideo';
import { DecoratorTags } from './decorator/DecoratorTags';
import { DecoratorAvaliacao } from './decorator/DecoratorAvaliacao';

export default function App() {
  const avaliacao = AvaliacaoBase(4);

  const decorator = DecoratorAvaliacao(avaliacao);

  const avaliacaoComImagem = DecoratorImagem(decorator, 'https://imagem.com/foto.jpg');
  const avaliacaoComComentario = DecoratorComentario(avaliacaoComImagem, 'Muito bom!');
  const avaliacaoComVideo = DecoratorVideo(avaliacaoComComentario, 'https://video.com/video.mp4');
  const avaliacaoComTags = DecoratorTags(avaliacaoComVideo, ['Recomendo', 'Favorito']);

  console.log(avaliacaoComTags.exibir());
  avaliacaoComTags.arquivar();

}

```
<font size="2"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/GuilhermeB12">Guilherme Brito</a> , <a href="https://github.com/lucasqueiroz23">Lucas Queiroz</a> e <a href="https://github.com/zenildavieira">Zenilda Vieira</a>, 2025</p></font>

## Conclusão

## Referências Bibliográficas

>
> [1] Refactoring Guru. Decorator Também conhecido como: Decorador, Envoltório, Wrapper. Disponível em <https://refactoring.guru/pt-br/design-patterns/decorator>. Último acesso em 01/01/2025.
>
> [2] Climaco, Vinicius. Design Pattern: Decorator (2022). Disponível em <https://climaco.medium.com/design-pattern-decorator-b0ba34ff9da5>. Último acesso em 01/01/2025.
>

## Bibliografia

>
> Decorator Teoria - Padrões de Projeto - Parte 20/45 - Otávio Miranda. Disponível em: <https://www.youtube.com/watch?v=p3Dh7VjxudE>. Último acesso em 01/01/2025.
>
> Nuzzi, Jones Roberto. Design Patterns — Parte 11 — Decorator (2019). Disponível em <https://medium.com/@jonesroberto/desing-patterns-parte-11-decorator-ba348f44142f>. Último acesso em 01/01/2025.
>

## Histórico de Versões

| Versão | Data | Descrição | Autor | Revisor |
| :----: | ---- | --------- | ----- | ------- |
| `1.0`  |25/12/2024| Adiciona metodologia | [Larissa Vieira](https://github.com/VieiraLaris) | [Caio Mesquita](https://github.com/Caiomesvie) |
| `1.1`  |01/01/2025| Adiciona diagrama e introdução  | [Caio Mesquita](https://github.com/Caiomesvie) | [Guilherme Brito](https://github.com/GuilhermeB12) |
| `1.2`  |01/01/2025| Adição do código | [Guilherme Brito](https://github.com/GuilhermeB12) <br> [Lucas Queiroz](https://github.com/lucasqueiroz23) <br> [Zenilda Vieira](https://github.com/zenildavieira)  |  |