/* eslint-disable */
// let nome: string = "Murilo"; // Qualquer tipo de strings
let idade: number = 30; // 10,1.57,-5.55,0xf00d,0b1010, 0o7744
let adulto: boolean = true; // true ou false
let simbolo: symbol = Symbol("qualquer-symbol"); // symbol
// let big: bigint = 10n; // bigint

// Arrays
let arrayNumber: Array<number> = [1, 2, 3];
let arrayNumber2: number[] = [1, 2, 3];
let arrayString: Array<string> = ["a", "b", "c"];
let arrayString2: string[] = ["a", "b", "c"];

// Objetos
let pessoa: { nome: string; idade: number; adulto?: boolean } = {
  idade: 30,
  nome: "Mario",
};

// Funções
function soma(x: number, y: number) {
  return x + y;
}

const soma2: (x: number, y: number) => number = (x, y) => x + y;
