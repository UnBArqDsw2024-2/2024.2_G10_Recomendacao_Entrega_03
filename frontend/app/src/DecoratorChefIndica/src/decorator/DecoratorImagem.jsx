import { DecoratorAvaliacao } from './DecoratorAvaliacao';

export function DecoratorImagem(componente, urlImagem) {
  const imagem = urlImagem;

  const exibir = () => {
    return `${componente.exibir()}, Imagem: ${imagem}`;
  };

  const getImagem = () => {
    return imagem;
  };

  return {
    ...componente,  
    exibir,         
    getImagem,      
  };
}