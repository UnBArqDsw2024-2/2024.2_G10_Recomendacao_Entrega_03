import React from 'react';
import { AvaliacaoBase } from './Decorator/components/AvaliacaoBaseDecorator';
import { DecoratorAvaliacao } from './Decorator/components/decorator/DecoratorAvaliacao';
import { DecoratorComentario } from './Decorator/components/decorator/DecoratorComentario';
import { DecoratorImagem } from './Decorator/components/decorator/DecoratorImagem';
import { DecoratorTags } from './Decorator/components/decorator/DecoratorTags';
import { DecoratorVideo } from './Decorator/components/decorator/DecoratorVideo';

function App() {
  const avaliacao = new AvaliacaoBase(4);
  const decorator = new DecoratorAvaliacao(avaliacao);

  const avaliacaoComImagem = new DecoratorImagem(decorator, 'https://imagem.com/foto.jpg');
  const avaliacaoComComentario = new DecoratorComentario(avaliacaoComImagem, 'Muito bom!');
  const avaliacaoComVideo = new DecoratorVideo(avaliacaoComComentario, 'https://video.com/video.mp4');
  const avaliacaoComTags = new DecoratorTags(avaliacaoComVideo, ['Recomendo', 'Favorito']);

  console.log(avaliacaoComTags.exibir());
  avaliacaoComTags.arquivar();

  return (
    <div>
      <h1>Avaliação Decorada</h1>
      <p>{avaliacaoComTags.exibir()}</p>
    </div>
  );
}

export default App;
