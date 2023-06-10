"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    constructor(nome, sobrenome, idade, _cpf) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this._cpf = _cpf;
    }
    set cpf(cpf) {
        this._cpf = cpf;
    }
    get cpf() {
        return this._cpf.replace(/\D/g, "");
    }
}
exports.Pessoa = Pessoa;
const pessoa = new Pessoa("Murilo", "Nascimento", 19, "123.456.789-59");
pessoa.cpf = "154.326.852.94";
console.log(pessoa.cpf);
//# sourceMappingURL=getters-setters.js.map