import React from 'react';
import RestauranteAvaliacaoPresenter from './RestauranteAvaliacaoPresenter';

const RestauranteAvaliacaoContainer = () => {

    // Dados simulados
    const restaurante = { id: 1, nome: 'Restaurante da Luana' };
    const cliente = { id: 1, nome: 'Maria Alice' };
    const avaliacoes = [
        { id: 1, clienteId: 1, comentario: 'Gostei muito!', nota: 5 },
    ];

    const publicarAvaliacao = (dadosAvaliacao: { clienteId: number; comentario: string; nota: number }): void => {
        console.log('Avaliação publicada:', dadosAvaliacao);
    };

    const arquivarAvaliacao = (idAvaliacao: number): void => {
        console.log('Avaliação arquivada:', idAvaliacao);
    };

    return (
        <RestauranteAvaliacaoPresenter
        restaurante={restaurante}
        cliente={cliente}
        avaliacoes={avaliacoes}
        onEnviarAvaliacao={publicarAvaliacao}
        onArquivarAvaliacao={arquivarAvaliacao}
        />
    );
};

export default RestauranteAvaliacaoContainer;
