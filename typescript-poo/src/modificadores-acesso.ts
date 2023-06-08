export class Empresa {
  public readonly nome: string; // public não é necessário
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  public adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  public mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string
  ) {}
}

const empresa = new Empresa("Microsoft", "11.111.111/0001-11");
const colaborador = new Colaborador("Murilo", "Nascimento");
const colaborador2 = new Colaborador("Cleiton", "Souza");
const colaborador3 = new Colaborador("Gabriel", "Vieira");

empresa.adicionaColaborador(colaborador);
empresa.adicionaColaborador(colaborador2);
empresa.adicionaColaborador(colaborador3);
empresa.adicionaColaborador({
  nome: "Murilo",
  sobrenome: "Nascimento",
});

console.log(empresa);
empresa.mostrarColaboradores();
