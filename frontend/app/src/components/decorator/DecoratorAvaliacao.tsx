import { Avaliacao } from '../Avaliacao';

export class DecoratorAvaliacao implements Avaliacao {
  protected componente: Avaliacao;

  constructor(componente: Avaliacao) {
    this.componente = componente;
  }

  exibir(): string {
    return this.componente.exibir();
  }

  excluir(): void {
    this.componente.excluir();
  }

  arquivar(): void {
    this.componente.arquivar();
  }
}
