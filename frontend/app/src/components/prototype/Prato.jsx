import PrototipoPrato from "./PrototipoPrato.jsx";

// Classe que implementa o contrato de clonagem
class Prato extends PrototipoPrato {
  constructor(nome, ingredientes, preco) {
    super(nome, ingredientes, preco);
  }

  // Implementa o método de clonagem
  clonar() {
    return new Prato(`${this.nome} (Clone)`, [...this.ingredientes], this.preco);
  }
}

export default Prato;
