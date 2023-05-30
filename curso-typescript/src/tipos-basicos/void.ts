function semRetorno(...args: string[]): void {
  console.log(args.join(" "));
}

const pessoa = {
  nome: "Murilo",
  sobrenome: "Nascimento",
  exibirNome(): void {
    console.log(this.nome + " " + this.sobrenome);
  },
};

semRetorno("Luiz", "Murilo", "Rodolfo");
pessoa.exibirNome();

export { pessoa };
