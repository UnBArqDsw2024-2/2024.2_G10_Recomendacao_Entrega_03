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

<b>RestauranteContext</b>

``````
import React, { createContext, useState, useContext } from 'react';

const RestauranteContext = createContext();

export const useRestaurante = () => {
    return useContext(RestauranteContext);
};

export const RestauranteProvider = ({ children }) => {
    const [menu, setMenu] = useState([]);
    const [avaliacoes, setAvaliacoes] = useState([]);
    const [observadores, setObservadores] = useState([]);

    const adicionarMenu = (item) => {
        setMenu((prev) => [...prev, item]);
        notificar();
    };

    const removerMenu = (item) => {
        setMenu((prev) => prev.filter((i) => i !== item));
        notificar();
    };

    const adicionarAvaliacao = (avaliacao) => {
        setAvaliacoes((prev) => [...prev, avaliacao]);
        notificar();
    };

    const addObservador = (observador) => {
        setObservadores((prev) => [...prev, observador]);
    };

    const removeObservador = (observador) => {
        setObservadores((prev) => prev.filter((obs) => obs !== observador));
    };

    const notificar = () => {
        observadores.forEach((observador) => {
            observador.atualizar(menu, avaliacoes);
        });
    };

    return (
        <RestauranteContext.Provider
            value={{ menu, avaliacoes, adicionarMenu, removerMenu, adicionarAvaliacao, addObservador, removeObservador }}
        >
            {children}
        </RestauranteContext.Provider>
    );
};

``````

O RestauranteContext atua como o Subject do padrão Observer, gerenciando os estados principais relacionados ao restaurante:
- menu: Armazena os itens do menu.
- avaliacoes: Armazena avaliações associadas ao restaurante.
- observadores: Mantém a lista de observadores que precisam ser notificados.

Os métodos disponíveis no contexto incluem:
- adicionarMenu e removerMenu: Alteram o menu e notificam os observadores.
- adicionarAvaliacao: Adiciona avaliações e notifica os observadores.
- addObservador e removeObservador: Gerenciam a lista de observadores.

Esses métodos encapsulam a lógica do Subject, garantindo que qualquer mudança nos dados relevantes resulte em uma notificação aos Observers.

<b>Componente Restaurante</b>

``````
import React from 'react';
import { useRestaurante } from '../contexts/RestauranteContext';

const Restaurante = () => {
    const { menu, adicionarMenu, removerMenu, avaliacoes, adicionarAvaliacao } = useRestaurante();

    return (
        <div>
            <h1>Restaurante</h1>
            <h2>Menu:</h2>
            <ul>
                {menu.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <button onClick={() => adicionarMenu('Prato Especial')}>Adicionar Prato</button>
            <button onClick={() => removerMenu('Prato Especial')}>Remover Prato</button>

            <h2>Avaliações:</h2>
            <ul>
                {avaliacoes.map((avaliacao, index) => (
                    <li key={index}>{avaliacao}</li>
                ))}
            </ul>
        </div>
    );
};

export default Restaurante;

``````

O componente Restaurante é acessível apenas por usuários do tipo funcionário. Ele fornece a interface para:
- Adicionar ou remover itens do menu.
- Visualizar as avaliações feitas no restaurante.

<b>Componente Favoritos</b>

``````
import React, { useEffect, useState } from 'react';
import { useRestaurante } from '../contexts/RestauranteContext';

const Favoritos = () => {
    const { addObservador, removeObservador } = useRestaurante();
    const [menu, setMenu] = useState([]);
    const [avaliacoes, setAvaliacoes] = useState([]);

    useEffect(() => {
        const observador = {
            atualizar: (novoMenu, novasAvaliacoes) => {
                setMenu(novoMenu);
                setAvaliacoes(novasAvaliacoes);
            },
        };
        addObservador(observador);
        return () => removeObservador(observador);
    }, [addObservador, removeObservador]);

    return (
        <div>
            <h1>Favoritos</h1>
            <h2>Menu Atualizado:</h2>
            <ul>
                {menu.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <h2>Avaliações Recentes:</h2>
            <ul>
                {avaliacoes.map((avaliacao, index) => (
                    <li key={index}>{avaliacao}</li>
                ))}
            </ul>
        </div>
    );
};

export default Favoritos;
``````
O componente Favoritos implementa o papel de Observer, conforme o diagrama de classes. Ele:
- Inscreve-se no contexto do restaurante ao ser montado (addObservador).
- Cancela a inscrição ao ser desmontado (removeObservador).
- Atualiza seu estado local (menu e avaliacoes) toda vez que o Subject (Restaurante) notifica mudanças.

Isso garante que o componente Favoritos sempre exiba o estado atualizado do menu e das avaliações.

## Conclusão

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
| `1.2`  |02/01/2025| Adiciona código | [Júlia Yoshida](https://github.com/juliaryoshida) |  |