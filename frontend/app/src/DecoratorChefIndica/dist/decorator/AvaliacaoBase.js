"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvaliacaoBase = void 0;
class AvaliacaoBase {
    constructor(nota) {
        this.nota = nota;
        this.arquivado = false;
    }
    exibir() {
        return `Nota: ${this.nota}, Arquivado: ${this.arquivado}`;
    }
    excluir() {
        console.log('Avaliação excluída.\n');
    }
    arquivar() {
        this.arquivado = true;
        console.log('Avaliação arquivada.\n');
    }
}
exports.AvaliacaoBase = AvaliacaoBase;
