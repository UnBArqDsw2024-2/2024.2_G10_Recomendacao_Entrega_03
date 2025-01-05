import React, { useState } from 'react';

const RestauranteAvaliacaoPresenter = ({
    restaurante,
    cliente,
    avaliacoes,
    onEnviarAvaliacao,
    onArquivarAvaliacao,
}: {
    restaurante: { id: number; nome: string };
    cliente: { id: number; nome: string };
    avaliacoes: { id: number; clienteId: number; comentario: string; nota: number }[];
    onEnviarAvaliacao: (dadosAvaliacao: { clienteId: number; comentario: string; nota: number }) => void;
    onArquivarAvaliacao: (idAvaliacao: number) => void;
}) => {
    const [comentario, setComentario] = useState('');
    const [nota, setNota] = useState(0);

  return (
    <div>
      <div>
        <h2>Bem-vindo, {cliente.nome}!</h2>
        <h1>{restaurante.nome}</h1>
      </div>

      <div>
        <h2>Avaliações</h2>

        <div>
        <textarea
          placeholder="Sua Avaliação"
          value={comentario}
          onChange={(e) => setComentario(e.target.value)}
        />
        <select value={nota} onChange={(e) => setNota(Number(e.target.value))}>
          {[1, 2, 3, 4, 5].map((numeroNota) => (
            <option key={numeroNota} value={numeroNota}>
              {numeroNota}
            </option>
          ))}
        </select>
        <button
          onClick={() => {
            onEnviarAvaliacao({ clienteId: cliente.id, comentario, nota });
            setComentario('');
            setNota(nota);
          }}
        >
          Enviar
        </button>
      </div>

        <div>
          {avaliacoes.length > 0 ? (
            avaliacoes.map((a) => (
              <div key={a.id}>
                <p>{a.comentario}</p>
                <p>Nota: {a.nota}</p>
                <button onClick={() => onArquivarAvaliacao(a.id)}>Arquivar</button>
              </div>
            ))
          ) : (
            <p>Nenhuma avaliação encontrada!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RestauranteAvaliacaoPresenter;
