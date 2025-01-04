"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.DecoratorImagem = void 0;
// src/decorator/DecoratorImagem.ts
var DecoratorAvaliacao_1 = require("./DecoratorAvaliacao");
var DecoratorImagem = /** @class */ (function (_super) {
    __extends(DecoratorImagem, _super);
    function DecoratorImagem(componente, urlImagem) {
        var _this = _super.call(this, componente) || this;
        _this.urlImagem = urlImagem;
        return _this;
    }
    DecoratorImagem.prototype.exibir = function () {
        return "".concat(_super.prototype.exibir.call(this), ", Imagem: ").concat(this.urlImagem);
    };
    DecoratorImagem.prototype.getImagem = function () {
        return this.urlImagem;
    };
    return DecoratorImagem;
}(DecoratorAvaliacao_1.DecoratorAvaliacao));
exports.DecoratorImagem = DecoratorImagem;
