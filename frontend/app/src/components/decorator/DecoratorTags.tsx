import { DecoratorAvaliacao } from './DecoratorAvaliacao';

export class DecoratorTags extends DecoratorAvaliacao {
  private listaTags: string[];

  constructor(componente: DecoratorAvaliacao, listaTags: string[]) {
    super(componente);
    this.listaTags = listaTags;
  }

  exibir(): string {
    return `${super.exibir()}, Tags: ${this.listaTags.join(', ')}`;
  }

  listarTags(): string[] {
    return this.listaTags;
  }
}