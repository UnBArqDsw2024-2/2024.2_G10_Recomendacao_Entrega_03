"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DecoratorTags = void 0;
// src/decorator/DecoratorTags.ts
const DecoratorAvaliacao_1 = require("./DecoratorAvaliacao");
class DecoratorTags extends DecoratorAvaliacao_1.DecoratorAvaliacao {
    constructor(componente, listaTags) {
        super(componente);
        this.listaTags = listaTags;
    }
    exibir() {
        return `${super.exibir()}, Tags: ${this.listaTags.join(', ')}`;
    }
    listarTags() {
        return this.listaTags;
    }
}
exports.DecoratorTags = DecoratorTags;
