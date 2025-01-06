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
exports.DecoratorComentario = void 0;
// src/decorator/DecoratorComentario.ts
var DecoratorAvaliacao_1 = require("./DecoratorAvaliacao");
var DecoratorComentario = /** @class */ (function (_super) {
    __extends(DecoratorComentario, _super);
    function DecoratorComentario(componente, comentario) {
        var _this = _super.call(this, componente) || this;
        _this.comentario = comentario;
        return _this;
    }
    DecoratorComentario.prototype.exibir = function () {
        return "".concat(_super.prototype.exibir.call(this), ", Coment\u00E1rio: ").concat(this.comentario);
    };
    DecoratorComentario.prototype.addComentario = function (comentario) {
        this.comentario = comentario;
    };
    return DecoratorComentario;
}(DecoratorAvaliacao_1.DecoratorAvaliacao));
exports.DecoratorComentario = DecoratorComentario;
