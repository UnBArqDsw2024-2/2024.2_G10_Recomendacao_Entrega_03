"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DecoratorComentario = void 0;
// src/decorator/DecoratorComentario.ts
const DecoratorAvaliacao_1 = require("./DecoratorAvaliacao");
class DecoratorComentario extends DecoratorAvaliacao_1.DecoratorAvaliacao {
    constructor(componente, comentario) {
        super(componente);
        this.comentario = comentario;
    }
    exibir() {
        return `${super.exibir()}, Comentário: ${this.comentario}`;
    }
    addComentario(comentario) {
        this.comentario = comentario;
    }
}
exports.DecoratorComentario = DecoratorComentario;
