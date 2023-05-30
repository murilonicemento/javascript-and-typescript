let x = 10;
x = 0b1010;
const y = 10;
let a = 100 as const;

const pessoa = {
  nome: "Murilo" as const,
  sobrenome: "Nascimento",
};

function escolhaCor(cor: "Vermelho" | "Amarelo" | "Azul"): string {
  return cor;
}

console.log(escolhaCor("Vermelho"));

export default 1;
