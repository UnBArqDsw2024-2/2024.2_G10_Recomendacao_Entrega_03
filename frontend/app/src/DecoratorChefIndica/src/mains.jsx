import React from 'react';
import { AvaliacaoBase } from './decorator/AvaliacaoBase';
import { DecoratorImagem } from './decorator/DecoratorImagem';
import { DecoratorComentario } from './decorator/DecoratorComentario';
import { DecoratorVideo } from './decorator/DecoratorVideo';
import { DecoratorTags } from './decorator/DecoratorTags';
import { DecoratorAvaliacao } from './decorator/DecoratorAvaliacao';

export default function App() {
  const avaliacao = AvaliacaoBase(4);

  const decorator = DecoratorAvaliacao(avaliacao);

  const avaliacaoComImagem = DecoratorImagem(decorator, 'https://imagem.com/foto.jpg');
  const avaliacaoComComentario = DecoratorComentario(avaliacaoComImagem, 'Muito bom!');
  const avaliacaoComVideo = DecoratorVideo(avaliacaoComComentario, 'https://video.com/video.mp4');
  const avaliacaoComTags = DecoratorTags(avaliacaoComVideo, ['Recomendo', 'Favorito']);

  console.log(avaliacaoComTags.exibir());
  avaliacaoComTags.arquivar();

}