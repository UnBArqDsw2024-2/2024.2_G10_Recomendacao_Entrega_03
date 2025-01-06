// src/decorator/DecoratorComentario.ts
import { DecoratorAvaliacao } from './DecoratorAvaliacao';

export class DecoratorComentario extends DecoratorAvaliacao {
    private comentario: string;

    constructor(componente: DecoratorAvaliacao, comentario: string) {
        super(componente);
        this.comentario = comentario;
    }

    exibir(): string {
        return `${super.exibir()}, Comentário: ${this.comentario}`;
    }

    addComentario(comentario: string): void {
        this.comentario = comentario;
    }
}