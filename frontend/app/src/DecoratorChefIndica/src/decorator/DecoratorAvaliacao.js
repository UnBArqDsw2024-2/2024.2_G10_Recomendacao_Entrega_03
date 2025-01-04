"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DecoratorAvaliacao = void 0;
var DecoratorAvaliacao = /** @class */ (function () {
    function DecoratorAvaliacao(componente) {
        this.componente = componente;
    }
    DecoratorAvaliacao.prototype.exibir = function () {
        return this.componente.exibir();
    };
    DecoratorAvaliacao.prototype.excluir = function () {
        this.componente.excluir();
    };
    DecoratorAvaliacao.prototype.arquivar = function () {
        this.componente.arquivar();
    };
    return DecoratorAvaliacao;
}());
exports.DecoratorAvaliacao = DecoratorAvaliacao;
