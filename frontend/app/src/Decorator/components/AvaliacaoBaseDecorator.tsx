import { Avaliacao } from './AvaliacaoDecorator';

export class AvaliacaoBase implements Avaliacao {
  private nota: number;
  private arquivado: boolean;

  constructor(nota: number) {
    this.nota = nota;
    this.arquivado = false;
  }

  exibir(): string {
    return `Nota: ${this.nota}, Arquivado: ${this.arquivado}`;
  }

  excluir(): void {
    console.log('Avaliação excluída.\n');
  }

  arquivar(): void {
    this.arquivado = true;
    console.log('Avaliação arquivada.\n');
  }
}
