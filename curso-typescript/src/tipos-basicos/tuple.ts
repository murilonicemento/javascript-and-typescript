const dadosCliente: readonly [number, string] = [1, "Mauro"];
const dadosCliente2: [number, string, string] = [1, "Paulo", "Andrade"];
const dadosCliente3: [number, string, string?] = [1, "Paulo"];
const dadosCliente4: [number, string, ...string[]] = [1, "Paulo", "Andrade"];

// dadosCliente[0] = 100;
// dadosCliente.pop();

console.log(dadosCliente);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);
