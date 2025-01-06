import { DecoratorAvaliacao } from './DecoratorAvaliacao';

export class DecoratorImagem extends DecoratorAvaliacao {
  private urlImagem: string;

  constructor(componente: DecoratorAvaliacao, urlImagem: string) {
    super(componente);
    this.urlImagem = urlImagem;
  }

  exibir(): string {
    return `${super.exibir()}, Imagem: ${this.urlImagem}`;
  }

  getImagem(): string {
    return this.urlImagem;
  }
}
