import { DecoratorAvaliacao } from './DecoratorAvaliacao';

export function DecoratorTags(componente, listaTags) {
  const tags = listaTags;

  const exibir = () => {
    return `${componente.exibir()}, Tags: ${tags.join(', ')}`;
  };

  const listarTags = () => {
    return tags;
  };

  return {
    ...componente,  
    exibir,         
    listarTags,     
  };
}