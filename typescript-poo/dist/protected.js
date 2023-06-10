"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Colaborador = exports.Udemy = exports.Empresa = void 0;
class Empresa {
    constructor(nome, cnpj) {
        this.colaboradores = [];
        this.nome = nome;
        this.cnpj = cnpj;
    }
    adicionaColaborador(colaborador) {
        this.colaboradores.push(colaborador);
    }
    mostrarColaboradores() {
        for (const colaborador of this.colaboradores) {
            console.log(colaborador);
        }
    }
}
exports.Empresa = Empresa;
class Udemy extends Empresa {
    constructor() {
        super("Microsoft", "11.111.111/0001-11");
    }
    popColaborador() {
        const colaborador = this.colaboradores.pop();
        if (colaborador)
            return colaborador;
        return null;
    }
}
exports.Udemy = Udemy;
class Colaborador {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}
exports.Colaborador = Colaborador;
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
//# sourceMappingURL=protected.js.map