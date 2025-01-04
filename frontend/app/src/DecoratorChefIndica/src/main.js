"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/main.ts
var AvaliacaoBase_1 = require("./decorator/AvaliacaoBase");
var DecoratorImagem_1 = require("./decorator/DecoratorImagem");
var DecoratorComentario_1 = require("./decorator/DecoratorComentario");
var DecoratorVideo_1 = require("./decorator/DecoratorVideo");
var DecoratorTags_1 = require("./decorator/DecoratorTags");
var DecoratorAvaliacao_1 = require("./decorator/DecoratorAvaliacao");
var avaliacao = new AvaliacaoBase_1.AvaliacaoBase(4);
var decorator = new DecoratorAvaliacao_1.DecoratorAvaliacao(avaliacao);
var avaliacaoComImagem = new DecoratorImagem_1.DecoratorImagem(decorator, 'https://imagem.com/foto.jpg');
var avaliacaoComComentario = new DecoratorComentario_1.DecoratorComentario(avaliacaoComImagem, 'Muito bom!');
var avaliacaoComVideo = new DecoratorVideo_1.DecoratorVideo(avaliacaoComComentario, 'https://video.com/video.mp4');
var avaliacaoComTags = new DecoratorTags_1.DecoratorTags(avaliacaoComVideo, ['Recomendo', 'Favorito']);
console.log(avaliacaoComTags.exibir());
avaliacaoComTags.arquivar();
