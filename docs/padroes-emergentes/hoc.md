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