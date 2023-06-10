"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Monstro = exports.Guerreira = exports.Personagem = void 0;
class Personagem {
    constructor(nome, ataque, vida) {
        this.nome = nome;
        this.ataque = ataque;
        this.vida = vida;
    }
    atacar(personagem) {
        this.bordao();
        personagem.perderVida(this.ataque);
    }
    perderVida(forcaAtaque) {
        this.vida -= forcaAtaque;
        console.log(`${this.emoji} - ${this.nome} agora tem ${this.vida} de vida`);
    }
}
exports.Personagem = Personagem;
class Guerreira extends Personagem {
    constructor() {
        super(...arguments);
        this.emoji = "🏹";
    }
    bordao() {
        console.log(this.emoji + " GURREIRA AO ATAQUE");
    }
}
exports.Guerreira = Guerreira;
class Monstro extends Personagem {
    constructor() {
        super(...arguments);
        this.emoji = "👾";
    }
    bordao() {
        console.log(this.emoji + " OH MY GAAAAAAA");
    }
}
exports.Monstro = Monstro;
const guerreira = new Guerreira("Guerreira", 100, 1000);
const monstro = new Monstro("Monstro", 87, 1000);
guerreira.atacar(monstro);
guerreira.atacar(monstro);
guerreira.atacar(monstro);
monstro.atacar(guerreira);
monstro.atacar(guerreira);
monstro.atacar(guerreira);
//# sourceMappingURL=classes-metodos-atributos-abstratos.js.map