export class Empresa {
  public readonly nome: string; // public não é necessário
  protected readonly colaboradores: Colaborador[] = [];
  private readonly cnpj: string;

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

export class Udemy extends Empresa {
  constructor() {
    super("Microsoft", "11.111.111/0001-11");
  }

  popColaborador(): Colaborador | null {
    const colaborador = this.colaboradores.pop();
    if (colaborador) return colaborador;
    return null;
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string
  ) {}
}

const empresa = new Udemy();
const colaborador1 = new Colaborador("Murilo", "Nascimento");
const colaborador2 = new Colaborador("Cleiton", "Souza");
const colaborador3 = new Colaborador("Gabriel", "Vieira");

empresa.adicionaColaborador(colaborador1);
empresa.adicionaColaborador(colaborador2);
empresa.adicionaColaborador(colaborador3);
empresa.adicionaColaborador({
  nome: "Rodolfo",
  sobrenome: "Marino",
});
const colaboradorRemovido = empresa.popColaborador();

console.log(colaboradorRemovido);
console.log(empresa);
