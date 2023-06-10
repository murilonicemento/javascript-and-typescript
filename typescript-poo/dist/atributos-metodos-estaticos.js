"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    constructor(nome, sobrenome, idade, cpf) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.cpf = cpf;
    }
    metodoNormal() {
        console.log(Pessoa.idadePadrao, Pessoa.CPFPadrao);
    }
    static criaPessoa(nome, sobrenome) {
        return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.CPFPadrao);
    }
}
Pessoa.idadePadrao = 0;
Pessoa.CPFPadrao = "946.532.759-88";
exports.Pessoa = Pessoa;
const pessoa = new Pessoa("Murilo", "Nascimento", 19, "123.456.789-59");
const pessoa2 = Pessoa.criaPessoa("Maria", "Miranda");
console.log(pessoa);
console.log(pessoa2);
pessoa.metodoNormal();
console.log(Pessoa.idadePadrao, Pessoa.CPFPadrao);
//# sourceMappingURL=atributos-metodos-estaticos.js.map