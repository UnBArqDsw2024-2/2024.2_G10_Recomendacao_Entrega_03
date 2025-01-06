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
exports.DecoratorTags = void 0;
// src/decorator/DecoratorTags.ts
var DecoratorAvaliacao_1 = require("./DecoratorAvaliacao");
var DecoratorTags = /** @class */ (function (_super) {
    __extends(DecoratorTags, _super);
    function DecoratorTags(componente, listaTags) {
        var _this = _super.call(this, componente) || this;
        _this.listaTags = listaTags;
        return _this;
    }
    DecoratorTags.prototype.exibir = function () {
        return "".concat(_super.prototype.exibir.call(this), ", Tags: ").concat(this.listaTags.join(', '));
    };
    DecoratorTags.prototype.listarTags = function () {
        return this.listaTags;
    };
    return DecoratorTags;
}(DecoratorAvaliacao_1.DecoratorAvaliacao));
exports.DecoratorTags = DecoratorTags;
