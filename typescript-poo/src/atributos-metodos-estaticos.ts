export class Pessoa {
  static idadePadrao = 0;
  static CPFPadrao = "946.532.759-88";

  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string
  ) {}

  metodoNormal(): void {
    console.log(Pessoa.idadePadrao, Pessoa.CPFPadrao);
  }

  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.CPFPadrao);
  }
}

const pessoa = new Pessoa("Murilo", "Nascimento", 19, "123.456.789-59");
const pessoa2 = Pessoa.criaPessoa("Maria", "Miranda");

console.log(pessoa);
console.log(pessoa2);
pessoa.metodoNormal();
console.log(Pessoa.idadePadrao, Pessoa.CPFPadrao);
