
// Classe base que define o contrato para a clonagem de objetos
class PrototipoPrato {
  constructor(nome, ingredientes, preco) {
    this.nome = nome;
    this.ingredientes = ingredientes;
    this.preco = preco;
  }
  // Método para ser implementado por subclasses
  clonar() {
    throw new Error("Método clonar() deve ser implementado nas subclasses.");
  }
}
export default PrototipoPrato;