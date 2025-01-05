import { DecoratorAvaliacao } from './DecoratorAvaliacao';

export function DecoratorComentario(componente, initialComentario) {
  let comentario = initialComentario;

  const exibir = () => {
    return `${componente.exibir()}, Comentário: ${comentario}`;
  };

  const addComentario = (novoComentario) => {
    comentario = novoComentario;
  };

  return {
    ...componente, 
    exibir,
    addComentario,
  };
}