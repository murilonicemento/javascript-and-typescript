enum Cores {
  VERMELHO, // 0
  AZUL, // 1
  AMARELO, // 2
}

enum Cores {
  ROXO = "ROXO",
  VERDE = 201,
  ROSA,
}

console.log(Cores);
console.log(Cores.VERMELHO);
console.log(Cores[0]);
console.log(Cores.ROXO);

function escolhaCor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhaCor(Cores.AMARELO);
