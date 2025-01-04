"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/main.ts
const AvaliacaoBase_1 = require("./decorator/AvaliacaoBase");
const DecoratorImagem_1 = require("./decorator/DecoratorImagem");
const DecoratorComentario_1 = require("./decorator/DecoratorComentario");
const DecoratorVideo_1 = require("./decorator/DecoratorVideo");
const DecoratorTags_1 = require("./decorator/DecoratorTags");
const DecoratorAvaliacao_1 = require("./decorator/DecoratorAvaliacao");
const avaliacao = new AvaliacaoBase_1.AvaliacaoBase(4);
const decorator = new DecoratorAvaliacao_1.DecoratorAvaliacao(avaliacao);
const avaliacaoComImagem = new DecoratorImagem_1.DecoratorImagem(decorator, 'https://imagem.com/foto.jpg');
const avaliacaoComComentario = new DecoratorComentario_1.DecoratorComentario(avaliacaoComImagem, 'Muito bom!');
const avaliacaoComVideo = new DecoratorVideo_1.DecoratorVideo(avaliacaoComComentario, 'https://video.com/video.mp4');
const avaliacaoComTags = new DecoratorTags_1.DecoratorTags(avaliacaoComVideo, ['Recomendo', 'Favorito']);
console.log(avaliacaoComTags.exibir());
avaliacaoComTags.arquivar();
