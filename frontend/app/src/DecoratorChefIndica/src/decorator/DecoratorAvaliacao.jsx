import { Avaliacao } from './Avaliacao';

export function DecoratorAvaliacao(componente) {
  const exibir = () => {
    return componente.exibir();
  };

  const excluir = () => {
    componente.excluir();
  };

  const arquivar = () => {
    componente.arquivar();
  };

  return { exibir, excluir, arquivar };
}