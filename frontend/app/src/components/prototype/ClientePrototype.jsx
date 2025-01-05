import Prato from "./Prato.jsx";

// Classe que gerencia os pratos e suas clonagens
class ClientePrototype {
  constructor() {
    this.pratos = [
      new Prato("Macarronada", ["Macarrão", "Molho de tomate", "Carne moída"], 25.5),
      new Prato("Salada Caesar", ["Alface", "Croutons", "Molho Caesar", "Parmesão"], 18.0),
      new Prato("Pizza Margherita", ["Massa", "Molho de tomate", "Mussarela", "Manjericão"], 45.0),
    ];
  }

  // Retorna todos os pratos
  listarPratos() {
    return this.pratos;
  }

  // Clona um prato específico
  clonarPrato(index) {
    if (index >= 0 && index < this.pratos.length) {
      const pratoClonado = this.pratos[index].clonar();
      this.pratos.push(pratoClonado);
      return pratoClonado;
    }
    throw new Error("Índice inválido!");
  }
}

export default ClientePrototype;
