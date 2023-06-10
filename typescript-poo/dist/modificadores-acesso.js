"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Colaborador = exports.Empresa = void 0;
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
class Colaborador {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}
exports.Colaborador = Colaborador;
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
//# sourceMappingURL=modificadores-acesso.js.map