"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DecoratorImagem = void 0;
// src/decorator/DecoratorImagem.ts
const DecoratorAvaliacao_1 = require("./DecoratorAvaliacao");
class DecoratorImagem extends DecoratorAvaliacao_1.DecoratorAvaliacao {
    constructor(componente, urlImagem) {
        super(componente);
        this.urlImagem = urlImagem;
    }
    exibir() {
        return `${super.exibir()}, Imagem: ${this.urlImagem}`;
    }
    getImagem() {
        return this.urlImagem;
    }
}
exports.DecoratorImagem = DecoratorImagem;
