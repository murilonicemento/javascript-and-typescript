const objetoA: {
  chaveA: string;
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown;
} = {
  chaveA: "Valor A",
  chaveB: "Valor B",
};

objetoA.chaveA = "Outro valor";
objetoA.chaveC = "Nova Chave";
objetoA.chaveD = "Nova Chave 2";
