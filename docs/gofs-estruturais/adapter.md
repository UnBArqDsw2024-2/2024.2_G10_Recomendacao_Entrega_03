# Adapter

## Introdução

O **Adapter** é um padrão de projeto estrutural que permite que objetos e classes com interfaces diferentes e incompatíveis possam interagir. Segundo site Refactoring Guru [1](https://refactoring.guru/pt-br/design-patterns/adapter/typescript/example)  padrão é geralmente utilizado em código legado ou em sistemas onde não é possível alterar a classe de serviço, seja por existir um grande número de dependências com outras partes do código, seja pela impossibilidade de acesso ao código da classe de serviço.

Um exemplo comumente apresentado ao se falar sobre o **Adapter** é o caso do uso de bibliotecas que recebem formatos de dados diferentes. Neste exemplo, temos um código que recebe, da interface, um objeto no formato *x*. Entretanto, a biblioteca que se deseja utilizar trabalha somente com objetos no formato *y*. Para solucionar essa incompatibilidade, cria-se um adaptador que realiza a conversão do objeto de *x* para *y*, permitindo que a biblioteca seja utilizada. Na figura 1, é possível visualizar esse exemplo de forma mais explícita: em uma situação onde é recebida, da interface, uma tabela de dados no formato XML, há uma biblioteca de análise de dados que trabalha somente com dados no formato JSON. Para solucionar o problema, foi criado um adaptador que converte os dados de XML para JSON, possibilitando a comunicação entre a interface e a biblioteca.

<center>
<p style="text-align: center"><b>Figura 1:</b> Exemplo de uso do Adapter </p>
<div align="center">
    <img src="https://raw.githubusercontent.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/refs/heads/main/docs/imagens/exemplo_adapter.png?raw=true" alt="Exemplo de uso do Adapter" >
</div>
<font size="3"><p style="text-align: center"><b>Fonte:</b> <a href="https://refactoring.guru/pt-br/design-patterns/adapter">Refactoring Guru</a>, 2024.</p></font>
</center>

Citando outro exemplo, também apresentado pelo site Refactoring Guru [2](https://refactoring.guru/pt-br/design-patterns/adapter), é possível ver como o Adapter é representado por meio de um diagrama de classes. Neste caso, tem-se pinos quadrados, pinos redondos, um buraco redondo e uma classe com um método que verifica se o pino cabe no buraco. Entretanto, o método foi construído para trabalhar somente com pinos redondos, de forma que ele não consegue realizar os cálculos caso seja chamado para pinos quadrados. Para solucionar esse problema, é criado um adaptador que mascara os dados do pino quadrado, permitindo que ele atue como um pino redondo.

<center>
<p style="text-align: center"><b>Figura 2:</b> Exemplo do uso do Adapter em um diagrama de classes </p>
<div align="center">
    <img src="https://raw.githubusercontent.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/refs/heads/main/docs/imagens/exemplo2_adapter.png?raw=true" alt="Exemplo de Diagrama de Classes do padrão Adapter" >
</div>
<font size="3"><p style="text-align: center"><b>Fonte:</b> <a href="https://refactoring.guru/pt-br/design-patterns/adapter">Refactoring Guru</a>, 2024.</p></font>
</center>

## Metodologia

Para a metodologia, ficou definido após a aula de dúvidas, do dia 20/12/24, em qual parte do código se encaixaria melhor o uso do padrão de projeto Adapter. A ideia escolhida foi a de adaptar os 3 tipos diferentes de modalidade de avaliação (imagem, texto, vídeo) para interagirem melhor com a classe Avaliação.

Foram separadas as responsabilidades para alguns membros do grupo, visando sempre a maior quantidade de participantes envolvidos, porém mantendo a qualidade e eficiência dentro do projeto.

- **Maria Alice** ficou responsável pela introdução e pela modelagem;
- **Cecília** assumiu a parte da metodologia; 
- **Lucas Victor** ficou encarregado do desenvolvimento do código;
- **Júlia** ficou reponsável pela conclusão sobre o padrão Adapter.

Além da discussão de ideias durante a aula presencial, dúvidas eventuais sobre o projeto foram esclarecidas nos grupos de Whatsapp criados para cada um dos padrões de projeto desta entrega. Acreditamos que fazer de forma assíncrona foi a melhor maneira de conciliar os horários dos membros antes de o prazo terminar.

## Modelagem

Para o presente projeto, o **Adapter** foi desenvolvido para adaptar os diferentes tipos de formatos de avaliação, de forma que eles possam interagir com a classe `Avaliação`.

No projeto `Chef Indica`, ao realizar uma avaliação, o usuário pode inserir dados em três formatos diferentes: texto, imagem e vídeo. Além disso, os formatos são opcionais, permitindo que o usuário insira apenas o que for mais conveniente para a realização da avaliação. Entretanto, é necessário que esses dados sejam adaptados para que, ao publicar uma avaliação, não ocorra nenhum erro devido à opcionalidade dos dados.

Para solucionar o problema, foi criada uma classe adaptadora que realiza a união dos dados e implementa o método `publicar()`, solucionando os possíveis erros ocasionados pela ausência ou pela diferença nos tipos de dados.


<center>
<p style="text-align: center"><b>Figura 3:</b> Primeira versão do Diagrama de Classes do Padrão Adapter</p>
<div align="center">
    <img src="https://raw.githubusercontent.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/refs/heads/main/docs/imagens/diagrama_adapter.png?raw=true" alt="Diagrama de Classes do Padrão Adapter no Chef Indica" >
</div>
<font size="3"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/maliz30">Maria Alice</a>, 2024.</p></font>
</center>


## Código
O código do Adapter encontra-se nos arquivos [AvaliacaoAdapter](https://github.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/blob/codigo-adapter/frontend/app/src/components/AvaliacaoAdapter.tsx), [AvaliacaoBase](https://github.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/blob/codigo-adapter/frontend/app/src/components/AvaliacaoBase.tsx), [AvaliacaoImagem](https://github.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/blob/codigo-adapter/frontend/app/src/components/AvaliacaoBase.tsx), [AvaliacaoTexto](https://github.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/blob/codigo-adapter/frontend/app/src/components/AvaliacaoTexto.tsx), [AvaliacaoVideo](https://github.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/blob/codigo-adapter/frontend/app/src/components/AvaliacaoVideo.tsx), [index](https://github.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/blob/codigo-adapter/frontend/app/src/components/index.tsx) e [AvaliacaoAdapter.test](https://github.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/blob/codigo-adapter/frontend/app/src/components/index.tsx).

Abaixo, estão imagens da implementação.

#### Código da AvaliacaoAdapter 

``` tsx
import React from "react";
import AvaliacaoTexto from "./AvaliacaoTexto";
import AvaliacaoImagem from "./AvaliacaoImagem";
import AvaliacaoVideo from "./AvaliacaoVideo";

interface AvaliacaoAdapterProps {
  texto: { texto: string; tamanhoTexto: number };
  imagem: { urlImagem: string };
  video: { urlVideo: string; duracao: number };
}

const AvaliacaoAdapter: React.FC<AvaliacaoAdapterProps> = ({ texto, imagem, video }) => {
  return (
    <div className="avaliacao-adapter">
      <h2>Avaliação Completa</h2>
      <AvaliacaoTexto texto={texto.texto} tamanhoTexto={texto.tamanhoTexto} />
      <AvaliacaoImagem urlImagem={imagem.urlImagem} />
      <AvaliacaoVideo urlVideo={video.urlVideo} duracao={video.duracao} />
    </div>
  );
};

export default AvaliacaoAdapter;
``` 
<font size="2"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/Lucas13032003">Lucas Víctor</a>, 2024</p></font>

#### Código da AvaliacaoBase 

``` tsx
import React from "react";

export interface AvaliacaoProps {
  autor: string;
  restaurante: string;
  estado: string;
  tags: string[];
}

const AvaliacaoBase: React.FC<AvaliacaoProps> = ({ autor, restaurante, estado, tags }) => {
  return (
    <div className="avaliacao-base">
      <h3>{restaurante}</h3>
      <p>Autor: {autor}</p>
      <p>Estado: {estado}</p>
      <p>Tags: {tags.join(", ")}</p>
    </div>
  );
};

export default AvaliacaoBase;

``` 
<font size="2"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/Lucas13032003">Lucas Víctor</a>, 2024</p></font>

#### Código da AvaliacaoImagem 

``` tsx
import React from "react";

interface AvaliacaoImagemProps {
  urlImagem: string;
}

const AvaliacaoImagem: React.FC<AvaliacaoImagemProps> = ({ urlImagem }) => {
  return (
    <div className="avaliacao-imagem">
      <img src={urlImagem} alt="Avaliação" />
    </div>
  );
};

export default AvaliacaoImagem;

``` 
<font size="2"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/Lucas13032003">Lucas Víctor</a>, 2024</p></font>

#### Código da AvaliacaoTexto 

``` tsx
import React from "react";

interface AvaliacaoTextoProps {
  texto: string;
  tamanhoTexto: number;
}

const AvaliacaoTexto: React.FC<AvaliacaoTextoProps> = ({ texto, tamanhoTexto }) => {
  return (
    <div className="avaliacao-texto">
      <p>Texto: {texto}</p>
      <p>Tamanho: {tamanhoTexto} caracteres</p>
    </div>
  );
};

export default AvaliacaoTexto;

``` 
<font size="2"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/Lucas13032003">Lucas Víctor</a>, 2024</p></font>

#### Código da AvaliacaoVideo 

``` tsx

import React from "react";

interface AvaliacaoVideoProps {
  urlVideo: string;
  duracao: number;
}

const AvaliacaoVideo: React.FC<AvaliacaoVideoProps> = ({ urlVideo, duracao }) => {
  return (
    <div className="avaliacao-video">
      <video src={urlVideo} controls />
      <p>Duração: {duracao} segundos</p>
    </div>
  );
};

export default AvaliacaoVideo;

``` 
<font size="2"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/Lucas13032003">Lucas Víctor</a>, 2024</p></font>

#### Código do index C

``` tsx
export { default as AvaliacaoBase } from "./AvaliacaoBase";
export { default as AvaliacaoTexto } from "./AvaliacaoTexto";
export { default as AvaliacaoImagem } from "./AvaliacaoImagem";
export { default as AvaliacaoVideo } from "./AvaliacaoVideo";
export { default as AvaliacaoAdapter } from "./AvaliacaoAdapter";



``` 
<font size="2"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/Lucas13032003">Lucas Víctor</a>, 2024</p></font>

#### Código da AvaliacaoAdapter
``` tsx
import { render, screen } from "@testing-library/react";
import AvaliacaoAdapter from "../components/AvaliacaoAdapter";

jest.mock("../components/AvaliacaoTexto", () => {
  return function MockAvaliacaoTexto({ texto, tamanhoTexto }: any) {
    return (
      <div>
        Mock Texto: {texto}, Tamanho: {tamanhoTexto}
      </div>
    );
  };
});

jest.mock("../components/AvaliacaoImagem", () => {
  return function MockAvaliacaoImagem({ urlImagem }: any) {
    return <img alt="Mock Imagem" src={urlImagem} />;
  };
});

jest.mock("../components/AvaliacaoVideo", () => {
  return function MockAvaliacaoVideo({ urlVideo, duracao }: any) {
    return (
      <div>
        Mock Video: {urlVideo}, Duração: {duracao} segundos
      </div>
    );
  };
});


// Dados de mock para os testes
const mockTexto = {
  texto: "Este é um texto de avaliação",
  tamanhoTexto: 20,
};

const mockImagem = {
  urlImagem: "http://exemplo.com/imagem.png",
};

const mockVideo = {
  urlVideo: "http://exemplo.com/video.mp4",
  duracao: 60,
};

describe("AvaliacaoAdapter", () => {
  it("deve renderizar todos os componentes dependentes corretamente", () => {
    render(
      <AvaliacaoAdapter texto={mockTexto} imagem={mockImagem} video={mockVideo} />
    );

    // Verifica se o título está presente
    expect(screen.getByText(/Avaliação Completa/i)).toBeInTheDocument();

    // Verifica o mock do componente AvaliacaoTexto
    expect(
      screen.getByText(/Mock Texto: Este é um texto de avaliação, Tamanho: 20/i)
    ).toBeInTheDocument();

    // Verifica o mock do componente AvaliacaoImagem
    const imagem = screen.getByAltText("Mock Imagem");
    expect(imagem).toHaveAttribute("src", "http://exemplo.com/imagem.png");

    // Verifica o mock do componente AvaliacaoVideo
    expect(
      screen.getByText(/Mock Video: http:\/\/exemplo.com\/video.mp4, Duração: 60 segundos/i)
    ).toBeInTheDocument();
  });
});

``` 
<font size="2"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/Lucas13032003">Lucas Víctor</a>, 2024</p></font>

#### Validação

O objetivo do teste é validar a implementação do padrão **Adapter** no componente `AvaliacaoAdapter`. Esse padrão permite que diferentes formatos de avaliação (texto, imagem e vídeo) sejam tratados de maneira uniforme pelo frontend, sem depender diretamente das implementações dos componentes específicos, como `AvaliacaoTexto`, `AvaliacaoImagem` e `AvaliacaoVideo`. 

Para garantir a independência do backend e o correto funcionamento do Adapter, foram utilizados mocks que simulam o comportamento dos componentes dependentes. Os mocks testam se:
- Um texto de avaliação é exibido com seu conteúdo e tamanho adequados.
- Uma imagem é renderizada com o atributo `src` correto.
- Um vídeo é exibido com a URL e duração especificadas.

O teste principal verifica a integração entre o `AvaliacaoAdapter` e os componentes simulados. Ao renderizar o `AvaliacaoAdapter` com dados mockados, os seguintes cenários são validados:
1. A presença de um título identificando a avaliação completa.
2. A correta exibição do conteúdo textual da avaliação.
3. A renderização de uma imagem com o atributo `src` esperado.
4. A exibição de informações sobre o vídeo, incluindo URL e duração.

Esses testes garantem que o `AvaliacaoAdapter` atua como um mediador eficaz, abstraindo as diferenças entre os formatos de avaliação e permitindo que a UI interaja de forma coesa com o estado e as funções de contexto da aplicação.


Ao rodar os testes, a saída observada foi a seguinte: 


<center>
<p style="text-align: center"><b>Figura 4:</b> Teste dos códigos criados</p>
<div align="center">
  <img src="https://github.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/blob/codigo-adapter/docs/imagens/teste_adapter.png?raw=true" alt="Testes do observer" >
</div>
<font size="2"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/Lucas13032003">Lucas Víctor</a>, 2024</p></font>
</center>


## Conclusão

A implementação do padrão Adapter no projeto Chef Indica foi essencial para resolver o desafio da integração de diferentes tipos de dados associados às avaliações. No sistema, o usuário pode criar avaliações utilizando três formatos distintos: texto, imagem e vídeo. Cada um desses formatos possui suas próprias características e estruturas — como o texto, que pode variar em tamanho; imagens, que são representadas por URLs; e vídeos, que incluem informações como URL e duração. Essas diferenças, somadas à possibilidade de os dados serem opcionais, poderiam gerar inconsistências no momento de consolidar e publicar as avaliações.

O Adapter foi projetado para resolver exatamente esse tipo de problema. Ele atua como um intermediário que unifica os dados desses diferentes formatos, encapsulando suas particularidades e fornecendo uma interface consistente para a classe principal `Avaliação`. Essa abordagem elimina a necessidade de a classe `Avaliação` lidar diretamente com as diferenças de estrutura entre os formatos, centralizando a lógica de integração na classe `AvaliaçãoAdapter`. Por exemplo, o Adapter permite que, mesmo que apenas um ou dois formatos sejam fornecidos, a avaliação ainda possa ser publicada sem erros ou inconsistências, tornando o sistema mais robusto e confiável.

Assim, o Adapter unifica diferentes tipos de dados, permitindo a publicação de avaliações de forma simples e independente do formato utilizado, garantindo um sistema organizado, escalável e eficiente.

## Referências Bibliográficas

>
> [1] REFACTORING GURU. **Exemplo de Adapter em TypeScript**. Disponível em: <https://refactoring.guru/pt-br/design-patterns/adapter/typescript/example>. Acesso em: 25 dez. 2024.
>
> [2] REFACTORING GURU. **Adapter - Padrão de Projeto**. Disponível em: <https://refactoring.guru/pt-br/design-patterns/adapter>. Acesso em: 25 dez. 2024.

## Bibliografia

## Histórico de Versões

| Versão | Data | Descrição | Autor | Revisor |
| :----: | ---- | --------- | ----- | ------- |
| `1.0`  |25/12/2024| Adição da Modelagem do Adapter | [Maria Alice](https://github.com/maliz30) |[Cecília](https://github.com/cqcoding)  |
| `1.1`  |25/12/2024| Adição da Introdução | [Maria Alice](https://github.com/maliz30) |[Cecília](https://github.com/cqcoding)  |
| `1.2`  | 27/12/2024 | Adição da metodologia | [Cecília](https://github.com/cqcoding) |  [Maria Alice](https://github.com/maliz30) |
| `1.3`  | 01/01/2025 | Alteração da bibliografia para Referências Bibliográficas | [Maria Alice](https://github.com/maliz30) |[Cecília](https://github.com/cqcoding)|
| `1.4`  | 04/01/2025 | Alteração da metodologia | [Cecília](https://github.com/cqcoding) |[Lucas Víctor](https://github.com/Lucas13032003) |
| `1.5`  |04/01/2025| Adição dos Códigos | [Lucas Víctor](https://github.com/Lucas13032003)|[Izabella Alves](https://github.com/izabellaalves)|
| `1.6`  | 05/01/2025 | Adição da conclusão | [Júlia Yoshida](https://github.com/juliaryoshida) |[Lucas Víctor](https://github.com/Lucas13032003) |
| `1.7`  |05/01/2025| Adição dos testes e do mock | [Lucas Víctor](https://github.com/Lucas13032003)||
| `1.8`  |05/01/2025| Adição da validação do mock | [Lucas Víctor](https://github.com/Lucas13032003)||