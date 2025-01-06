"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DecoratorAvaliacao = void 0;
class DecoratorAvaliacao {
    constructor(componente) {
        this.componente = componente;
    }
    exibir() {
        return this.componente.exibir();
    }
    excluir() {
        this.componente.excluir();
    }
    arquivar() {
        this.componente.arquivar();
    }
}
exports.DecoratorAvaliacao = DecoratorAvaliacao;
