# Observer

## Introdução

O Observer é um padrão de projeto comportamental que tem como principal objetivo definir uma dependência um-para-muitos entre objetos, de forma que quando um objeto muda de estado, todos os seus dependentes são notificados e atualizados automaticamente. Os principais objetos que participam desse padrão são o subject(assunto) e observer(observador), sendo que um subject pode ter uma quantidade qualquer de observadores dependentes e todos os observadores são notificados quando o subject sofre uma mudança. (Gamma et al., 1995) [1]

Segundo o site Refactoring Guru [2], esse mecanismo consiste em armazenar uma lista de referências aos objetos do observador e alguns métodos públicos que permitem adicionar e remover observadores da lista. Dessa maneira, sempre que um evento importante acontece com o sujeito, ele passa para seus observadores e chama um método específico de notificação em seus objetos.

Geralmente, o Observer é aplicado quando alterações no estado de um objeto precisam ser refletidas em outros objetos, especialmente em cenários onde o conjunto de objetos é desconhecido previamente ou pode variar dinamicamente.

Na figura 1, é possível observar a estrutura geral desse padrão, oferecendo uma visão mais clara de sua organização.

<center>
<p style="text-align: center"><b>Figura 1:</b> Exemplo de diagrama UML para o padrão de projeto Observer</p>
<div align="center">
  <img src="https://raw.githubusercontent.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/refs/heads/main/docs/imagens/observer_estrutura.png?raw=true" >
</div>
<font size="3"><p style="text-align: center"><b>Fonte:</b> Gamma et al., 1995 [1].</p></font>
</center>


## Metodologia

Durante a reunião realizada no dia 17 de dezembro de 2024, documentada na [ata da reunião 2](../atas-reuniao/ata-reuniao-17-12.md), a equipe decidiu, em conjunto, pela adoção do padrão **Observer** para solucionar e prevenir problemas no sistema *Chef Indica*. Além disso, as atribuições foram distribuídas entre os membros, e foram definidas datas de entrega para que todos conseguissem revisar o trabalho desenvolvido. O padrão **Observer** foi escolhido devido à sua fácil aplicação na biblioteca React, que será utilizada no projeto juntamente com a linguagem TypeScript. A biblioteca React já oferece ferramentas para o gerenciamento de estados, o que facilita significativamente a implementação do padrão de projeto **Observer**. 

Para o desenvolvimento do padrão no projeto, as seguintes responsabilidades foram atribuídas aos membros da equipe:
- **Larissa de Jesus Vieira**: Desenvolver a introdução teórica e a modelagem do padrão no projeto *Chef Indica*; 
- **Maria Alice Bernardo da Costa Silva**: Documentar a metodologia de adoção do padrão, evidenciando os passos seguidos para sua inclusão no projeto;
- **Júlia Rodrigues Yoshida**: Implementar o código correspondente à modelagem desenvolvida;
- **Cecília Ernesto Silva Quaresma**: Elaborar a conclusão, revisando e reafirmando todos os pontos abordados em relação ao padrão.

A modelagem desenvolvida foi apresentada na aula de dúvidas do dia 20/12/2024 aos demais membros da equipe e à professora, com o objetivo de esclarecer dúvidas, analisar e revisar se o trabalho foi desenvolvido corretamente ou se ajustes eram necessários. 

As demais comunicações entre a equipe ocorreram de forma assíncrona via WhatsApp, permitindo que todos conciliassem seus horários durante o período de recesso.

Ao final do trabalho, todos os membros ficaram responsáveis por revisar o que foi produzido e realizar alterações, caso necessário, visando melhorar a qualidade do produto final.

## Modelagem
No diagrama de classes desenvolvido, o Subject é representado pela classe **Restaurante**, enquanto os Observers são instâncias da classe **Favoritos**. Quando um usuário adiciona um restaurante aos seus favoritos, este é incluído na lista correspondente, gerenciada pela classe **Favoritos**.

A classe **Restaurante** possui um atributo chamado `observadores`, que armazena a lista de objetos **Favoritos** associados (indicando os usuários interessados). Além disso, ela implementa os métodos `addObservador()`, `removeObservador()` e `notifica()`, que permitem gerenciar os observadores e notificá-los. Já a classe **Favoritos** pode implementar os métodos definidos na interface **Observador**.

Com essa estrutura, a classe **Favoritos** é informada sempre que ocorrem atualizações relevantes, como mudanças no menu ou a publicação de uma nova avaliação de um restaurante favorito do usuário.

<center>
<p style="text-align: center"><b>Figura 2:</b> Primeira versão do Diagrama de Classes do Padrão Observer</p>
<div align="center">
  <img src="https://raw.githubusercontent.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/refs/heads/main/docs/imagens/diagrama_observer.png?raw=true" alt="Diagrama de classes observer" >
</div>
<font size="3"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/VieiraLaris">Larissa Vieira</a>, 2024.</p></font>
</center>

## Código

O padrão de projeto Observer foi implementado para permitir que os usuários adicionem restaurantes aos seus favoritos e sejam notificados automaticamente sobre mudanças no menu ou avaliações. A modelagem segue o diagrama de classes especificado e utiliza React com Context API para gerenciar o estado de maneira eficiente.

<b>Arquivo: frontend/app/src/contexts/restauranteContext.jsx</b>


``````
import React, { createContext, useContext, useState } from 'react';

const RestauranteContext = createContext();

export const RestauranteProvider = ({ children }) => {
  const [restaurantes, setRestaurantes] = useState([]);

  const adicionarRestaurante = (novoRestaurante) => {
    setRestaurantes([...restaurantes, { ...novoRestaurante, observadores: [] }]);
  };

  const atualizarRestaurante = (nomeRestaurante, menu, avaliacoes) => {
    setRestaurantes((prevRestaurantes) =>
      prevRestaurantes.map((restaurante) =>
        restaurante.nome === nomeRestaurante
          ? {
              ...restaurante,
              menu,
              avaliacoes,
              observadores: restaurante.observadores.forEach((obs) =>
                obs.atualizar(menu, avaliacoes)
              ),
            }
          : restaurante
      )
    );
  };

  const addObservador = (nomeRestaurante, observador) => {
    setRestaurantes((prevRestaurantes) =>
      prevRestaurantes.map((restaurante) =>
        restaurante.nome === nomeRestaurante
          ? { ...restaurante, observadores: [...restaurante.observadores, observador] }
          : restaurante
      )
    );
  };

  return (
    <RestauranteContext.Provider
      value={{ restaurantes, adicionarRestaurante, atualizarRestaurante, addObservador }}
    >
      {children}
    </RestauranteContext.Provider>
  );
};

export const useRestauranteContext = () => useContext(RestauranteContext);


``````

<b>Arquivo: frontend/app/src/contexts/favoritoContext.jsx   </b>

``````
import React, { createContext, useContext, useState } from 'react';

const FavoritosContext = createContext();

export const FavoritosProvider = ({ children }) => {
  const [favoritos, setFavoritos] = useState([]);

  const adicionarFavorito = (restaurante) => {
    setFavoritos([...favoritos, restaurante]);
    restaurante.addObservador({ atualizar });
  };

  const listarFavoritos = () => favoritos;

  const atualizar = (menu, avaliacoes) => {
    console.log('Notificação recebida! Novo menu ou avaliação:', menu, avaliacoes);
  };

  return (
    <FavoritosContext.Provider value={{ favoritos, adicionarFavorito, listarFavoritos }}>
      {children}
    </FavoritosContext.Provider>
  );
};

export const useFavoritosContext = () => useContext(FavoritosContext);


``````

<b>Arquivo: frontend/app/src/components/observer/observerRestauranteFavorito.jsx</b>

``````
import React from 'react';
import { useRestaurante } from '../../contexts/restauranteContext'; 
import { useFavoritos } from '../../contexts/favoritoContext'; 

const ObserverRestauranteFavorito = () => {
    const { adicionarRestaurante, atualizarRestaurante, addObservador, restaurantes } = useRestaurante();
    const { adicionarFavorito, listarFavoritos } = useFavoritos();

    const handleAdicionarRestaurante = () => {
        adicionarRestaurante({ id: 1, nome: 'Restaurante A', menu: [], avaliacoes: [] });
    };

    const handleAdicionarFavorito = () => {
        const restaurante = restaurantes.find((r) => r.id === 1);
        adicionarFavorito(restaurante);
        addObservador(1, { atualizar: (menu, avaliacoes) => console.log('Notificado:', menu, avaliacoes) });
    };

    const handleAtualizarRestaurante = () => {
        atualizarRestaurante(1, ['Prato 1', 'Prato 2'], ['Avaliação 1']);
    };

    return (
        <div>
            <button onClick={handleAdicionarRestaurante}>Adicionar Restaurante</button>
            <button onClick={handleAdicionarFavorito}>Adicionar aos Favoritos</button>
            <button onClick={handleAtualizarRestaurante}>Atualizar Restaurante</button>
            <h2>Favoritos:</h2>
            {listarFavoritos().map((fav, index) => (
                <div key={index}>{fav.nome}</div>
            ))}
        </div>
    );
};

export default () => (
    <RestauranteProvider>
        <FavoritosProvider>
            <ObserverRestauranteFavorito />
        </FavoritosProvider>
    </RestauranteProvider>
);


``````

- A classe Restaurante atua como o Subject, mantendo o estado e notificando mudanças.
- A classe Favoritos é o Observer, reagindo às notificações e mantendo os favoritos sincronizados.
- O componente ObserverRestauranteFavorito funciona como a interface de interação para conectar e demonstrar o funcionamento do padrão Observer.

## Conclusão

Em resumo, o padrão Observer foi implementado no ChefIndica como uma solução eficiente para manter a lista de Favoritos sempre atualizada e sincronizada com as alterações no menu e nas avaliações em tempo real. Esse padrão permite que o componente Favoritos reaja automaticamente a qualquer modificação no estado do restaurante, garantindo que os usuários tenham acesso a informações precisas e atualizadas sem a necessidade de ações manuais.

Essa implementação não apenas melhora a experiência do usuário final, mas também contribui para a manutenção de um código mais organizado e escalável, já que separa os componentes, seguindo os princípios da programação orientada a objetos. O uso do Observer reforça a capacidade do sistema de lidar com atualizações dinâmicas de forma eficiente e intuitiva, beneficiando tanto a interface quanto a lógica interna do ChefIndica.

## Referências Bibliográficas

>
> [1] Gamma, E., Helm, R., Johnson, R., & Vlissides, J. (1995). Design Patterns: Elements of Reusable Object-Oriented Software. Addison-Wesley.
>
> [2] Refactoring Guru. Composite Design Pattern. Disponível em: <https://refactoring.guru/pt-br/design-patterns/observer>. Acessado em 22 de dezembro de 2024.
>

## Bibliografia

## Histórico de Versões

| Versão | Data | Descrição | Autor | Revisor |
| :----: | ---- | --------- | ----- | ------- |
| `1.0`  |22/12/2024| Adiciona introdução e primeira versao do diagrama de classes | [Larissa Vieira](https://github.com/VieiraLaris) | [Izabella Alves](https://github.com/izabellaalves) |
| `1.1`  |01/01/2025| Adiciona metodologia | [Maria Alice](https://github.com/maliz30) | [Júlia Yoshida](https://github.com/juliaryoshida) |
| `1.2`  |02/01/2025| Adiciona código | [Júlia Yoshida](https://github.com/juliaryoshida) |[Cecília Quaresma](https://github.com/cqcoding) |
| `1.3` | 03/01/2025 | Adiciona conclusão | [Cecília Quaresma](https://github.com/cqcoding) | [Júlia Yoshida](https://github.com/juliaryoshida) |
| `1.4` | 03/01/2025 | Atualiza código | [Júlia Yoshida](https://github.com/juliaryoshida) | [Larissa Vieira](https://github.com/VieiraLaris) |