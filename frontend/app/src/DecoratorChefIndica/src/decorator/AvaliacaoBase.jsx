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