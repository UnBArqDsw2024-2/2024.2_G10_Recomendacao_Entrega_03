"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DecoratorVideo = void 0;
// src/decorator/DecoratorVideo.ts
const DecoratorAvaliacao_1 = require("./DecoratorAvaliacao");
class DecoratorVideo extends DecoratorAvaliacao_1.DecoratorAvaliacao {
    constructor(componente, urlVideo) {
        super(componente);
        this.urlVideo = urlVideo;
    }
    exibir() {
        return `${super.exibir()}, Vídeo: ${this.urlVideo}`;
    }
    getVideo() {
        return this.urlVideo;
    }
}
exports.DecoratorVideo = DecoratorVideo;
