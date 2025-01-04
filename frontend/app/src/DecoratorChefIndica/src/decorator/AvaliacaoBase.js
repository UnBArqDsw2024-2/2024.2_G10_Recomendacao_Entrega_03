"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvaliacaoBase = void 0;
var AvaliacaoBase = /** @class */ (function () {
    function AvaliacaoBase(nota) {
        this.nota = nota;
        this.arquivado = false;
    }
    AvaliacaoBase.prototype.exibir = function () {
        return "Nota: ".concat(this.nota, ", Arquivado: ").concat(this.arquivado);
    };
    AvaliacaoBase.prototype.excluir = function () {
        console.log('Avaliação excluída.');
    };
    AvaliacaoBase.prototype.arquivar = function () {
        this.arquivado = true;
        console.log('Avaliação arquivada.');
    };
    return AvaliacaoBase;
}());
exports.AvaliacaoBase = AvaliacaoBase;
