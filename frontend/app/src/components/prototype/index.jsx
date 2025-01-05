import ClientePrototype from "./ClientePrototype.jsx";
// Executa a lógica no terminal
const cliente = new ClientePrototype();
console.log("Pratos disponíveis inicialmente:");
cliente.listarPratos().forEach((prato, index) => {
  console.log(`${index}: ${prato.nome} - R$ ${prato.preco.toFixed(2)}`);
});
console.log("\nClonando o primeiro prato...");
const pratoClonado = cliente.clonarPrato(0);
console.log(`Prato clonado: ${pratoClonado.nome} - R$ ${pratoClonado.preco.toFixed(2)}`);
console.log("\nPratos disponíveis após clonagem:");
cliente.listarPratos().forEach((prato, index) => {
  console.log(`${index}: ${prato.nome} - R$ ${prato.preco.toFixed(2)}`);
});