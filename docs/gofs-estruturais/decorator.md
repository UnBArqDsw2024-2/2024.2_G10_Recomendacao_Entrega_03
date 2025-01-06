# Decorator

## Introdução

O padrão Decorator é um padrão de projeto estrutural onde há o acomplamento de novos comportamentos à objetos de maneira dinâmica, os inserindo em invólucros de objetos que contém os novos comportamentos [1]. Em sua definição GOF, apresenta o decorator como uma alternativa ao uso de herança no código através do uso de composição. [2]. É um padrão indicado para o uso onde teremos uma classe central básica que poderá ter atributos métodos e acrescentados conforme necessidade. É um padrão parecido com o [Composite](https://unbarqdsw2024-2.github.io/2024.2_G10_Recomendacao_Entrega_03/#/gofs-estruturais/composite) pelo uso de composição em sua estrutura.
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
Abaixo se encontra a primeira versão do diagrama de classes do padrão Decorator, onde temos a implementação do sistema de avaliação que se encaixa muito bem no padrão, uma vez que o sistema de avaliação conta com uma nota base no sistema dada pelo usuário e pode ser incrementada com outros atributos como imagens e um comentário escrito. O diagrama diz respeito a implementação da interface base da avaliação, da componente concreto de uma avaliação base, do decorator referenciado ao componente e dos 4 decorator's concretos que incrementam a avaliação base em 4 novas funcionalidades, onde é adicionado um comentário, imagens, vídeos ou tags de marcação.

<center>
<p style="text-align: center"><b>Figura 1:</b> Primeira versão do Diagrama de Classes do Padrão Decorator</p>
<div align="center">
  <img src="https://raw.githubusercontent.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/refs/heads/main/docs/imagens/diagrama_decorator.png?raw=true" alt="Padrão Decorator" >
</div>
<font size="3"><p style="text-align: center"><b>Fonte:</b> Caio Mesquita, 2024.</p></font>
</center>



## Código
As classes utilizadas para implementar o Decorator foram: 
[AvaliacaoDecorator](https://github.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/blob/main/frontend\app\src\components\AvaliacaoDecorator.tsx), 
[AvaliacaoBaseDecorator](https://github.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/blob/main/frontend\app\src\components\AvaliacaoBaseDecorator.tsx), 
[DecoratorAvaliacao](https://github.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/blob/main/frontend\app\src\components\decorator\DecoratorAvaliacao.tsx), 
[DecoratorComentario](https://github.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/blob/main/frontend\app\src\components\decorator\DecoratorComentario.tsx), 
[DecoratorImagem](https://github.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/blob/main/frontend\app\src\components\decorator\DecoratorImagem.tsx), 
[DecoratorTags](https://github.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/blob/main/frontend\app\src\components\decorator\DecoratorTags.tsx), 
[DecoratorVideo](https://github.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/blob/main/frontend\app\src\components\decorator\DecoratorVideo.tsx), 
[decorator](https://github.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/blob/main/frontend\app\src\components\decorator.tsx).

O código abaixo foram retirados dos códigos citados acima:
### Código da Avaliação

```tsx

export interface Avaliacao {
    exibir(): string;
    excluir(): void;
    arquivar(): void;
  }
```

<font size="2"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/GuilhermeB12">Guilherme Brito</a> , <a href="https://github.com/lucasqueiroz23">Lucas Queiroz</a> e <a href="https://github.com/zenildavieira">Zenilda Vieira</a>, 2025</p></font>

### Código da Avaliação Base

```tsx

import { Avaliacao } from './AvaliacaoDecorator';

export class AvaliacaoBase implements Avaliacao {
  private nota: number;
  private arquivado: boolean;

  constructor(nota: number) {
    this.nota = nota;
    this.arquivado = false;
  }

  exibir(): string {
    return `Nota: ${this.nota}, Arquivado: ${this.arquivado}`;
  }

  excluir(): void {
    console.log('Avaliação excluída.\n');
  }

  arquivar(): void {
    this.arquivado = true;
    console.log('Avaliação arquivada.\n');
  }
}
```


<font size="2"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/GuilhermeB12">Guilherme Brito</a> , <a href="https://github.com/lucasqueiroz23">Lucas Queiroz</a> e <a href="https://github.com/zenildavieira">Zenilda Vieira</a>, 2025</p></font>

### Código do DecoratorAvaliacao

```tsx

import { Avaliacao } from '../AvaliacaoDecorator';

export class DecoratorAvaliacao implements Avaliacao {
  protected componente: Avaliacao;

  constructor(componente: Avaliacao) {
    this.componente = componente;
  }

  exibir(): string {
    return this.componente.exibir();
  }

  excluir(): void {
    this.componente.excluir();
  }

  arquivar(): void {
    this.componente.arquivar();
  }
}
```



<font size="2"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/GuilhermeB12">Guilherme Brito</a> , <a href="https://github.com/lucasqueiroz23">Lucas Queiroz</a> e <a href="https://github.com/zenildavieira">Zenilda Vieira</a>, 2025</p></font>

### Código do DecoratorComentario

```tsx

import { DecoratorAvaliacao } from './DecoratorAvaliacao';

export class DecoratorComentario extends DecoratorAvaliacao {
  private comentario: string;

  constructor(componente: DecoratorAvaliacao, comentario: string) {
    super(componente);
    this.comentario = comentario;
  }

  exibir(): string {
    return `${super.exibir()}, Comentário: ${this.comentario}`;
  }

  addComentario(comentario: string): void {
    this.comentario = comentario;
  }
}
```


<font size="2"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/GuilhermeB12">Guilherme Brito</a> , <a href="https://github.com/lucasqueiroz23">Lucas Queiroz</a> e <a href="https://github.com/zenildavieira">Zenilda Vieira</a>, 2025</p></font>

### Código do DecoratorImagem

```tsx

import { DecoratorAvaliacao } from './DecoratorAvaliacao';

export class DecoratorImagem extends DecoratorAvaliacao {
  private urlImagem: string;

  constructor(componente: DecoratorAvaliacao, urlImagem: string) {
    super(componente);
    this.urlImagem = urlImagem;
  }

  exibir(): string {
    return `${super.exibir()}, Imagem: ${this.urlImagem}`;
  }

  getImagem(): string {
    return this.urlImagem;
  }
}
```


<font size="2"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/GuilhermeB12">Guilherme Brito</a> , <a href="https://github.com/lucasqueiroz23">Lucas Queiroz</a> e <a href="https://github.com/zenildavieira">Zenilda Vieira</a>, 2025</p></font>

### Código do DecoratorTags

```tsx

import { DecoratorAvaliacao } from './DecoratorAvaliacao';

export class DecoratorTags extends DecoratorAvaliacao {
  private listaTags: string[];

  constructor(componente: DecoratorAvaliacao, listaTags: string[]) {
    super(componente);
    this.listaTags = listaTags;
  }

  exibir(): string {
    return `${super.exibir()}, Tags: ${this.listaTags.join(', ')}`;
  }

  listarTags(): string[] {
    return this.listaTags;
  }
}
```

<font size="2"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/GuilhermeB12">Guilherme Brito</a> , <a href="https://github.com/lucasqueiroz23">Lucas Queiroz</a> e <a href="https://github.com/zenildavieira">Zenilda Vieira</a>, 2025</p></font>

### Código do DecoratorVideo

```tsx

import { DecoratorAvaliacao } from './DecoratorAvaliacao';

export class DecoratorVideo extends DecoratorAvaliacao {
  private urlVideo: string;

  constructor(componente: DecoratorAvaliacao, urlVideo: string) {
    super(componente);
    this.urlVideo = urlVideo;
  }

  exibir(): string {
    return `${super.exibir()}, Vídeo: ${this.urlVideo}`;
  }

  getVideo(): string {
    return this.urlVideo;
  }
}
```

<font size="2"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/GuilhermeB12">Guilherme Brito</a> , <a href="https://github.com/lucasqueiroz23">Lucas Queiroz</a> e <a href="https://github.com/zenildavieira">Zenilda Vieira</a>, 2025</p></font>

### Código do decorator

```tsx

import React from 'react';
import { AvaliacaoBase } from './AvaliacaoBaseDecorator';
import { DecoratorAvaliacao } from './decorator/DecoratorAvaliacao';
import { DecoratorComentario } from './decorator/DecoratorComentario';
import { DecoratorImagem } from './decorator/DecoratorImagem';
import { DecoratorTags } from './decorator/DecoratorTags';
import { DecoratorVideo } from './decorator/DecoratorVideo';

function App() {
  const avaliacao = new AvaliacaoBase(4);
  const decorator = new DecoratorAvaliacao(avaliacao);

  const avaliacaoComImagem = new DecoratorImagem(decorator, 'https://imagem.com/foto.jpg');
  const avaliacaoComComentario = new DecoratorComentario(avaliacaoComImagem, 'Muito bom!');
  const avaliacaoComVideo = new DecoratorVideo(avaliacaoComComentario, 'https://video.com/video.mp4');
  const avaliacaoComTags = new DecoratorTags(avaliacaoComVideo, ['Recomendo', 'Favorito']);

  console.log(avaliacaoComTags.exibir());
  avaliacaoComTags.arquivar();

  return (
    <div>
      <h1>Avaliação Decorada</h1>
      <p>{avaliacaoComTags.exibir()}</p>
    </div>
  );
}

export default App;
```

<font size="2"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/GuilhermeB12">Guilherme Brito</a> , <a href="https://github.com/lucasqueiroz23">Lucas Queiroz</a> e <a href="https://github.com/zenildavieira">Zenilda Vieira</a>, 2025</p></font>

## Conclusão

A aplicação do padrão de projeto Decorator demonstrou ser uma solução eficiente para estender dinamicamente as funcionalidades de um sistema sem a necessidade de modificar suas classes base. Durante o desenvolvimento do projeto Chef Indica, o padrão foi utilizado na implementação do sistema de avaliações, possibilitando a adição de comentários, imagens, vídeos e tags de maneira flexível e escalável. Essa abordagem promoveu a reutilização de código e manteve a estrutura do sistema coesa e de fácil manutenção.

Além disso, a adoção do padrão Decorator reforçou o uso de princípios como o Open/Closed Principle, garantindo que o sistema esteja aberto para extensões, mas fechado para modificações diretas. O uso de composição ao invés de herança evitou a criação de uma hierarquia complexa de classes, tornando o código mais modular e fácil de testar.

A experiência prática adquirida com a implementação do Decorator foi enriquecedora para toda a equipe, permitindo uma melhor compreensão dos padrões de projeto estruturais e de como aplicá-los em situações reais. Essa prática contribui para o aprimoramento das habilidades em engenharia de software, promovendo a escrita de códigos mais robustos, flexíveis e alinhados com boas práticas de desenvolvimento.

## Referências Bibliográficas

> 
>[1] Refactoring Guru. Decorator Também conhecido como: Decorador, Envoltório, Wrapper. Disponível em <https://refactoring.guru/pt-br/design-patterns/decorator>. Último acesso em 01/01/2025.
> 
>[2] Climaco, Vinicius. Design Pattern: Decorator (2022). Disponível em <https://climaco.medium.com/design-pattern-decorator-b0ba34ff9da5>. Último acesso em 01/01/2025.
>

## Bibliografia

> 
>Decorator Teoria - Padrões de Projeto - Parte 20/45 - Otávio Miranda. Disponível em: <https://www.youtube.com/watch?v=p3Dh7VjxudE>. Último acesso em 01/01/2025.
> 
>Nuzzi, Jones Roberto. Design Patterns — Parte 11 — Decorator (2019). Disponível em <https://medium.com/@jonesroberto/desing-patterns-parte-11-decorator-ba348f44142f>. Último acesso em 01/01/2025.
>

## Histórico de Versões

| Versão | Data | Descrição | Autor | Revisor |
| :----: | ---- | --------- | ----- | ------- |
| `1.0`  |25/12/2024| Adiciona metodologia | [Larissa Vieira](https://github.com/VieiraLaris) | [Caio Mesquita](https://github.com/Caiomesvie) |
| `1.1`  |01/01/2025| Adiciona diagrama e introdução  | [Caio Mesquita](https://github.com/Caiomesvie) | [Guilherme Brito](https://github.com/GuilhermeB12) |
| `1.2`  |04/01/2025| Adição do código | [Guilherme Brito](https://github.com/GuilhermeB12) <br> [Lucas Queiroz](https://github.com/lucasqueiroz23) <br> [Zenilda Vieira](https://github.com/zenildavieira)  | [Zenilda Vieira](https://github.com/zenildavieira) |
| `1.3`  |05/01/2025| Adição da conclusão | [Zenilda Vieira](https://github.com/zenildavieira)  | [Izabella Alves](izabellaalves) |
| `1.4`  |06/01/2025| Correção e Atualização do Código e Documento | [Guilherme Brito](https://github.com/GuilhermeB12)  |  |
| `1.5`  |06/01/2025| Atualização da Nomemclatura | [Guilherme Brito](https://github.com/GuilhermeB12)  |  |
| `1.5`  |06/01/2025| Correção de erros | [Guilherme Brito](https://github.com/GuilhermeB12)  |  |
