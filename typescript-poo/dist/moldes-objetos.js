"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empresa = void 0;
class Empresa {
    constructor(nome) {
        this.nome = nome;
    }
}
exports.Empresa = Empresa;
const empresa = new Empresa("Google");
console.log(empresa.nome);
