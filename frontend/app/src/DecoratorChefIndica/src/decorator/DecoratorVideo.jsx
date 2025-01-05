import { DecoratorAvaliacao } from './DecoratorAvaliacao';

export function DecoratorVideo(componente, urlVideo) {
  const video = urlVideo;

  const exibir = () => {
    return `${componente.exibir()}, Vídeo: ${video}`;
  };

  const getVideo = () => {
    return video;
  };

  return {
    ...componente,  
    exibir,         
    getVideo,       
  };
}