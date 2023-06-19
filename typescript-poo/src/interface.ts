interface TipoNome {
  nome: string;
}

interface TipoSobrenome {
  sobrenome: string;
}

interface TipoNomeCompleto {
  nomeCompleto(): string;
}

interface TipoPessoa extends TipoNome, TipoSobrenome, TipoNomeCompleto {}
export class Pessoa implements TipoPessoa {
  constructor(public nome: string, public sobrenome: string) {}

  nomeCompleto(): string {
    return this.nome + " " + this.sobrenome;
  }
}

const pessoaObj: TipoPessoa = {
  nomeCompleto() {
    return this.nome + " " + this.sobrenome;
  },
  nome: "Murilo",
  sobrenome: "Nascimento",
};

const pessoa = new Pessoa("Murilo", "Nascimento");
console.log(pessoa.nomeCompleto());
console.log(pessoaObj.nomeCompleto());
