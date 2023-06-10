"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = exports.Aluno = exports.Pessoa = void 0;
class Pessoa {
    constructor(nome, sobrenome, idade, cpf) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.cpf = cpf;
    }
    getIdade() {
        return this.idade;
    }
    getCPF() {
        return this.cpf;
    }
    getNomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }
}
exports.Pessoa = Pessoa;
class Aluno extends Pessoa {
    getNomeCompleto() {
        return `Isso vem do aluno: ${this.nome} ${this.sobrenome}`;
    }
}
exports.Aluno = Aluno;
class Cliente extends Pessoa {
    getNomeCompleto() {
        return `Isso vem do cliente: ${this.nome} ${this.sobrenome}`;
    }
}
exports.Cliente = Cliente;
const pessoa = new Pessoa("Murilo", "Nascimento", 19, "123.456.789-59");
const aluno = new Aluno("Murilo", "Nascimento", 19, "123.456.789-59");
const cliente = new Cliente("Luiz", "Miranda", 37, "123.456.789-59");
console.log(pessoa.getNomeCompleto());
console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
//# sourceMappingURL=heranca.js.map