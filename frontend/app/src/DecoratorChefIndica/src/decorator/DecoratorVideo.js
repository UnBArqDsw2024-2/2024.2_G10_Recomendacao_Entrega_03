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
exports.DecoratorVideo = void 0;
// src/decorator/DecoratorVideo.ts
var DecoratorAvaliacao_1 = require("./DecoratorAvaliacao");
var DecoratorVideo = /** @class */ (function (_super) {
    __extends(DecoratorVideo, _super);
    function DecoratorVideo(componente, urlVideo) {
        var _this = _super.call(this, componente) || this;
        _this.urlVideo = urlVideo;
        return _this;
    }
    DecoratorVideo.prototype.exibir = function () {
        return "".concat(_super.prototype.exibir.call(this), ", V\u00EDdeo: ").concat(this.urlVideo);
    };
    DecoratorVideo.prototype.getVideo = function () {
        return this.urlVideo;
    };
    return DecoratorVideo;
}(DecoratorAvaliacao_1.DecoratorAvaliacao));
exports.DecoratorVideo = DecoratorVideo;
