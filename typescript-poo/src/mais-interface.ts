// Declaration Merging
interface Pessoa {
  nome: string;
  sobrenome: string;
  readonly idade?: number;
  readonly enderecos: string[];
}

const pessoa: Pessoa = {
  nome: "Murilo",
  sobrenome: "Nascimento",
  idade: 30,
  enderecos: ["Av. Brasil"],
};

pessoa.enderecos.push("Rodolfo Teófilo");
console.log(pessoa);

export default Pessoa;
