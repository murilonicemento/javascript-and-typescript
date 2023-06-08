export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string
  ) {}

  getIdade(): number {
    return this.idade;
  }

  getCPF(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

export class Aluno extends Pessoa {
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public sala: string
  ) {
    super(nome, sobrenome, idade, cpf);
  }

  getNomeCompleto(): string {
    console.log("Fazendo algo antes");
    const result = super.getNomeCompleto();
    return result + "OH MY GAAAA";
  }
}

export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return `Isso vem do cliente: ${this.nome} ${this.sobrenome}`;
  }
}

const pessoa = new Pessoa("Murilo", "Nascimento", 19, "123.456.789-59");
const aluno = new Aluno(
  "Murilo",
  "Nascimento",
  19,
  "123.456.789-59",
  "Sala 20"
);
const cliente = new Cliente("Luiz", "Miranda", 37, "123.456.789-59");

console.log(pessoa.getNomeCompleto());
console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
