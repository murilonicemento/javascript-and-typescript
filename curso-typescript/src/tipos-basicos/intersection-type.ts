type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome & TemSobrenome & TemIdade;

type AB = "A" | "B";
type AC = "A" | "C";
type Intersection = AB & AC;

const pessoa: Pessoa = {
  nome: "Murilo",
  sobrenome: "Nascimento",
  idade: 30,
};

export default { pessoa };
