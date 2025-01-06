# High-Order Components

## Introdução

<p style="text-align: justify; text-indent: 2em;"> High Order Components (HOCs) são uma ferramenta poderosa no ecossistema React para reutilização de lógica e organização de componentes. Introduzido como um padrão para trabalhar com componentes funcionais e de classe, um HOC é essencialmente uma função que recebe um componente como argumento e retorna um novo componente com funcionalidades adicionais (Abramov & Clark, 2015)[1]. Essa abordagem permite a abstração de comportamentos comuns, tornando o código mais modular e facilitando a manutenção (Wieruch, 2018)[2]. </p>

<p style="text-align: justify; text-indent: 2em;"> A utilização de HOCs é vantajosa em cenários como a implementação de autenticação, controle de acesso, manipulação de estados globais e otimização de desempenho (Freeman & Robson, 2020)[3]. No entanto, sua implementação requer atenção a aspectos como performance e legibilidade do código, uma vez que o uso excessivo pode gerar “envolvimentos” complexos (“Wrapper Hell”) (Gamma et al., 1994)[4]. Este trabalho propõe uma metodologia para a utilização eficaz de HOCs, abordando tanto os fundamentos teóricos quanto a aplicação prática. </p>

## Metodologia

<p style="text-align: justify; text-indent: 2em;"> A metodologia proposta para utilização de High Order Components em projetos React segue as etapas descritas abaixo: </p>

1. Identificação de Padrões Repetitivos:

    - <p style="text-align: justify;"> Realizar uma análise do projeto para identificar funcionalidades ou comportamentos comuns que podem ser abstraídos em um HOC. Exemplos incluem autenticação de usuário, tratamento de erros e manipulação de dados (Abramov & Clark, 2015)[1].</p>

2. Definição da Função HOC:

    - <p style="text-align: justify;"> Estruturar a função que irá envolver os componentes originais, fornecendo propriedades adicionais ou alterando comportamentos.</p>
    - <p style="text-align: justify;"> Garantir que o HOC respeite as propriedades originais (“props”) do componente envolvido, utilizando o spread operator ...props para encaminhá-las adequadamente (Wieruch, 2018)[2].</p>

3. Criação de Componentes Genéricos:

    - <p style="text-align: justify;"> Criar HOCs genéricos que possam ser reutilizados em diferentes partes do projeto. Por exemplo, um HOC para adicionar suporte à localização pode ser útil em vários contextos (Freeman & Robson, 2020)[3].</p>

4. Testes Unitários e de Integração:

    - <p style="text-align: justify;"> Implementar testes para validar o comportamento dos HOCs, assegurando que as funcionalidades adicionais não introduzam bugs ou inconsistências no sistema (Gamma et al., 1994)[4].</p>

5. Documentação e Exemplos de Uso:

    - <p style="text-align: justify;"> Documentar cada HOC criado, detalhando os casos de uso, as propriedades esperadas e como integrá-lo com outros componentes (Abramov & Clark, 2015)[1].</p>

## Exemplo de implementação

1. <b>Identificação de Padrões Repetitivos</b>
<p style="text-align: justify; text-indent: 2em;"> O exemplo proposto visa reutilizar a lógica de autenticação, que é frequentemente necessária em projetos que possuem rotas protegidas ou áreas restritas.</p>

2. <b>Definição da Função HOC</b>

```
import React from 'react';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const isAuthenticated = Boolean(localStorage.getItem('authToken')); // Exemplo simples de verificação.

    if (!isAuthenticated) {
      return <div>Você precisa estar autenticado para acessar esta página.</div>;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
```

3. <b>Criação de Componentes Genéricos</b>
<p style="text-align: justify; text-indent: 2em;"> O HOC withAuth pode ser aplicado a diferentes componentes em uma aplicação. Um exemplo de uso é proteger rotas específicas:</p>

```
import React from 'react';
import withAuth from './withAuth';

const Dashboard = () => {
  return <h1>Bem-vindo ao Painel de Controle!</h1>;
};

export default withAuth(Dashboard);
```

<p style="text-align: justify; text-indent: 2em;"> Neste caso, o HOC garante que somente usuários autenticados possam acessar o componente Dashboard.</p>

4. <b>Testes Unitários e de Integração</b>

<p style="text-align: justify; text-indent: 2em;"> Usando a biblioteca de testes Jest e React Testing Library:</p>

```
import React from 'react';
import { render, screen } from '@testing-library/react';
import withAuth from './withAuth';

const MockComponent = () => <div>Componente Protegido</div>;
const ProtectedComponent = withAuth(MockComponent);

test('exibe mensagem de autenticação quando o usuário não está autenticado', () => {
  localStorage.removeItem('authToken');
  render(<ProtectedComponent />);
  expect(screen.getByText(/Você precisa estar autenticado para acessar esta página./i)).toBeInTheDocument();
});

test('renderiza o componente protegido quando o usuário está autenticado', () => {
  localStorage.setItem('authToken', 'valid-token');
  render(<ProtectedComponent />);
  expect(screen.getByText(/Componente Protegido/i)).toBeInTheDocument();
});
```

5. <b>Documentação e Exemplos de Uso</b>

<b>Descrição</b>

<p style="text-align: justify; text-indent: 2em;"> O withAuth é um High Order Component que adiciona uma verificação de autenticação a um componente React. Caso o usuário não esteja autenticado, é exibida uma mensagem de erro; caso contrário, o componente original é renderizado.</p>

<b>Propriedades</b>

<p style="text-align: justify; text-indent: 2em;"> O HOC withAuth não modifica as propriedades (props) do componente original. Ele herda todas as propriedades do componente pai.</p>

Exemplo de Uso:

```
import React from 'react';
import withAuth from './withAuth';

const UserProfile = () => {
  return <h1>Perfil do Usuário</h1>;
};

export default withAuth(UserProfile);
```

6. <b>Exemplo de diagrama</b>


<center>
<p style="text-align: center"><b>Figura 1:</b> Exemplo de diagrama para o padrão HOC do React</p>
<div align="center">
  <img src="https://raw.githubusercontent.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/refs/heads/main/docs/imagens/exemploHOC.png?raw=true" alt="Imagem do HOC" >
</div>
<font size="3"><p style="text-align: center"><b>Fonte:</b> Cecília Quaresma, 2024</p></font>
</center>

## Modelagem

<center>
<p style="text-align: center"><b>Figura 2:</b> Modelagem do HOC para ChefIndica</p>
<div align="center">
  <img src="https://raw.githubusercontent.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/refs/heads/main/docs/imagens/HOC.png?raw=true" alt="Imagem do HOC" >
</div>
<font size="3"><p style="text-align: center"><b>Fonte:</b> Cecília Quaresma, 2024</p></font>
</center> 


Na modelagem, o componente Usuário pode ser utilizado como base para aplicar Higher-Order Components (HOCs), que encapsulam funcionalidades adicionais para diferentes tipos de usuários. Tanto o funcionário quanto o cliente utilizam as propriedades do componente Usuário, e os HOCs podem ser implementados para adicionar comportamentos ou dados específicos, mantendo uma abordagem funcional e reutilizável. 


## Código
Abaixo é possível ver a primeira versão da HOC withUsuario.

<b>[hocUsuario.jsx](https://github.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/blob/main/frontend/app/src/components/hocFuncionario.tsx):</b>

```typescript

import React, { ComponentType } from 'react';

//Define os tipos das props específicas para um Usuário
interface UsuarioProps {
  nome: string;
  senha: string;
  email: string;
}

//Define uma HOC que adiciona as props de Usuário ao componente base
const withUsuario = <P extends object>(
  WrappedComponent: ComponentType<P & { usuario: UsuarioProps }>
) => {
  return (props: P) => {
    const usuarioData: UsuarioProps = {
      nome: 'Usuário Padrão',
      senha: '1234',
      email: 'usuario@padrao.com',
      ...props, //Permite que props dinâmicos sobrescrevam os valores padrão
    };

    return <WrappedComponent {...props} usuario={usuarioData} />;
  };
};

export default withUsuario;

```
<font size="3"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/VieiraLaris">Larissa Vieira</a>, 2025.</p></font>

Decorando o componente [Funcionario](https://github.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/blob/main/frontend/app/src/components/funcionario.tsx) com a HOC Usuario:

```typescript

import React from 'react';
import withUsuario from './hocUsuario';

//Componente Funcionario, que recebe as props do usuário e informações de cargo, telefone e restaurante
const Funcionario: React.FC<{ usuario: { nome: string, senha: string, email: string }, cargo: string, telefone: string, restaurante: string }> = ({ usuario, cargo, telefone, restaurante }) => {
  return (
    <div>
      <h1>Bem-vindo ao Dashboard, {usuario.nome}!</h1>
      <p>Email: {usuario.email}</p>

      <h2>Cargo: {cargo}</h2>
      <p>Telefone: {telefone}</p>
      <p>Restaurante: {restaurante}</p>
    </div>
  );
};

//Componente Funcionario decorado com HOC withUsuario
export default withUsuario(Funcionario);

```
<font size="3"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/VieiraLaris">Larissa Vieira</a>, 2025.</p></font>

Decorando o componente [Cliente](https://github.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/blob/main/frontend/app/src/components/cliente.tsx) com a HOC Usuario:

```typescript

import React from 'react';
import withUsuario from './hocUsuario';

//Componente Cliente, que recebe as props do usuário e informações de avaliações, destaques e favoritos
const Cliente: React.FC<{ usuario: { nome: string, senha: string, email: string }, avaliacoes: string[], destaques: string[], favoritos: string[] }> = ({ usuario, avaliacoes, destaques, favoritos }) => {
  return (
    <div>
      <h1>Bem-vindo, {usuario.nome}!</h1>
      <p>Email: {usuario.email}</p>

      <h2>Avaliações:</h2>
      <ul>
        {avaliacoes.length > 0 ? avaliacoes.map((avaliacao, index) => <li key={index}>{avaliacao}</li>) : <li>Sem avaliações ainda</li>}
      </ul>
      <h2>Destaques:</h2>
      <ul>
        {destaques.length > 0 ? destaques.map((destaque, index) => <li key={index}>{destaque}</li>) : <li>Sem destaques ainda</li>}
      </ul>
      <h2>Favoritos:</h2>
      <ul>
        {favoritos.length > 0 ? favoritos.map((favorito, index) => <li key={index}>{favorito}</li>) : <li>Sem favoritos ainda</li>}
      </ul>
    </div>
  );
};

//Componente Cliente decorado com HOC withUsuario
export default withUsuario(Cliente);

```

<font size="3"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/VieiraLaris">Larissa Vieira</a>, 2025.</p></font>


### Conclusão

Este trabalho explorou os High-Order Components (HOCs) no React, destacando sua importância na reutilização de lógica e na organização de código em aplicações modernas. A metodologia proposta mostrou-se eficaz ao abordar aspectos fundamentais, como identificação de padrões repetitivos, criação de componentes genéricos, e testes para assegurar a qualidade do software. 

Os exemplos fornecidos demonstraram como HOCs podem ser aplicados para resolver desafios práticos, como a implementação de autenticação e a separação de responsabilidades entre diferentes tipos de usuários. Além disso, foram apresentados cuidados necessários para evitar problemas como o "Wrapper Hell", que pode dificultar a manutenção do código.

Embora os HOCs sejam poderosos e promovam um desenvolvimento mais modular, sua aplicação deve ser ponderada e planejada para evitar complexidades desnecessárias. Desenvolvedores devem considerar alternativas, como hooks e context APIs, que podem oferecer soluções mais simples para determinados cenários.

Por fim, os HOCs continuam sendo uma abordagem sólida para projetos React, especialmente em situações que exigem alta reutilização de lógica e extensibilidade. Sua compreensão e uso consciente são diferenciais que contribuem para a criação de aplicações escaláveis, organizadas e robustas.


## Referências Bibliográficas

> [1] FREEMAN, Eric; ROBSON, Elisabeth. Head first design patterns: a brain-friendly guide. Sebastopol: O'Reilly Media, 2020.
>
> [2] WIERUCH, Robin. The road to React: your journey to master React. Independently Published, 2018.
>
> [3] ABRAMOV, Dan; CLARK, Andrew. React Docs: High Order Components. Disponível em: https://reactjs.org/docs/higher-order-components.html. Acesso em: 19 dez. 2024.
>
> [4] GAMMA, Erich; HELM, Richard; JOHNSON, Ralph; VLISSIDES, John. Design patterns: elements of reusable object-oriented software. Boston: Addison-Wesley, 1994.

## Histórico de Versões

| Versão | Data | Descrição | Autor | Revisor |
| :----: | ---- | --------- | ----- | ------- |
| `1.0`  |19/12/2024| Descrição da introdução e da metodologia | [Júlia Yoshida](https://github.com/juliaryoshida) |[Cecília Quaresma](https://github.com/cqcoding)  |
| `1.1`  |19/12/2024| Adição do diagrama| [Cecília Quaresma](https://github.com/cqcoding)  | [Júlia Yoshida](https://github.com/juliaryoshida) |
| `1.2`  |02/01/2025| Adição do código | [Larissa Vieira](https://github.com/VieiraLaris)  | [Izabella Alves](https://github.com/izabellaalves) |
| `1.3`  |03/01/2025| Adição da modelagem | [Cecília Quaresma](https://github.com/cqcoding)  | [Guilherme Brito](https://github.com/GuilhermeB12) |
| `1.4`  |03/01/2025| Adição da conclusão | [Guilherme Brito](https://github.com/GuilhermeB12)  |[Lucas Víctor](https://github.com/Lucas.13032003) |
| `1.5`  |05/01/2025| Atualização da conclusão | [Lucas Víctor](https://github.com/Lucas.13032003)  | [Guilherme Brito](https://github.com/GuilhermeB12) |
