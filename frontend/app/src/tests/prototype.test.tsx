import ClientePrototype from "../components/prototype/ClientePrototype";
describe("ClientePrototype", () => {
  let cliente;
  // Antes de cada teste, cria uma nova instância de ClientePrototype
  beforeEach(() => {
    cliente = new ClientePrototype();
  });
  test("Deve listar os pratos iniciais corretamente", () => {
    const pratos = cliente.listarPratos();
    expect(pratos.length).toBe(3); // Deve haver 3 pratos iniciais
    expect(pratos[0].nome).toBe("Macarronada"); // O primeiro prato deve ser "Macarronada"
  });
  test("Deve clonar um prato corretamente", () => {
    const pratoClonado = cliente.clonarPrato(0); // Clona o primeiro prato
    const pratos = cliente.listarPratos();
    // Verifica se o número total de pratos aumentou
    expect(pratos.length).toBe(4);
    // Verifica se o nome do prato clonado está correto
    expect(pratoClonado.nome).toBe("Macarronada (Clone)");
  });
  test("Deve lançar um erro ao tentar clonar um prato com índice inválido", () => {
    // Tenta clonar um prato com índice inválido e espera um erro
    expect(() => cliente.clonarPrato(10)).toThrow("Índice inválido!");
  });
});