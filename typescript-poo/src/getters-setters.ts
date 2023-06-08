export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private _cpf: string
  ) {}

  set cpf(cpf: string) {
    this._cpf = cpf;
  }

  get cpf(): string {
    return this._cpf.replace(/\D/g, "");
  }
}

const pessoa = new Pessoa("Murilo", "Nascimento", 19, "123.456.789-59");

pessoa.cpf = "154.326.852.94";
console.log(pessoa.cpf);
