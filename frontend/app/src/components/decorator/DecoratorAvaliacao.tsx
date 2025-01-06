import { Avaliacao } from '../AvaliacaoDecorator';

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