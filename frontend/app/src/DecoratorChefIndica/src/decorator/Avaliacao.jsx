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