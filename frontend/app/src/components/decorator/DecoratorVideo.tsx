import { DecoratorAvaliacao } from './DecoratorAvaliacao';

export class DecoratorVideo extends DecoratorAvaliacao {
  private urlVideo: string;

  constructor(componente: DecoratorAvaliacao, urlVideo: string) {
    super(componente);
    this.urlVideo = urlVideo;
  }

  exibir(): string {
    return `${super.exibir()}, Vídeo: ${this.urlVideo}`;
  }

  getVideo(): string {
    return this.urlVideo;
  }
}