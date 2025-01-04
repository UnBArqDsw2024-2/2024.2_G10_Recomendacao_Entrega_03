// src/main.ts
import { AvaliacaoBase } from './decorator/AvaliacaoBase';
import { DecoratorImagem } from './decorator/DecoratorImagem';
import { DecoratorComentario } from './decorator/DecoratorComentario';
import { DecoratorVideo } from './decorator/DecoratorVideo';
import { DecoratorTags } from './decorator/DecoratorTags';
import { DecoratorAvaliacao } from './decorator/DecoratorAvaliacao';

const avaliacao = new AvaliacaoBase(4);
const decorator = new DecoratorAvaliacao(avaliacao);

const avaliacaoComImagem = new DecoratorImagem(decorator, 'https://imagem.com/foto.jpg');
const avaliacaoComComentario = new DecoratorComentario(avaliacaoComImagem, 'Muito bom!');
const avaliacaoComVideo = new DecoratorVideo(avaliacaoComComentario, 'https://video.com/video.mp4');
const avaliacaoComTags = new DecoratorTags(avaliacaoComVideo, ['Recomendo', 'Favorito']);

console.log(avaliacaoComTags.exibir());
avaliacaoComTags.arquivar();
