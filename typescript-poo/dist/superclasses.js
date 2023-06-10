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
    constructor(nome, sobrenome, idade, cpf, sala) {
        super(nome, sobrenome, idade, cpf);
        this.sala = sala;
    }
    getNomeCompleto() {
        console.log("Fazendo algo antes");
        const result = super.getNomeCompleto();
        return result + "OH MY GAAAA";
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
const aluno = new Aluno("Murilo", "Nascimento", 19, "123.456.789-59", "Sala 20");
const cliente = new Cliente("Luiz", "Miranda", 37, "123.456.789-59");
console.log(pessoa.getNomeCompleto());
console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
//# sourceMappingURL=superclasses.js.map