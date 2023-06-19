export class CarrinhoDeCompras {
  private readonly produtos: Produto[] = [];

  inserirProdutos(...produtos: Produto[]): void {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }

  quantidadeProdutos(): number {
    return this.produtos.length;
  }

  valorTotal(): number {
    return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
  }
}

export class Produto {
  constructor(public nome: string, public preco: number) {}
}

const produto1 = new Produto("Camiseta", 49.99);
const produto2 = new Produto("Camiseta", 4.99);
const produto3 = new Produto("Camiseta", 9.99);
const produto4 = new Produto("Camiseta", 69.99);
const produto5 = new Produto("Camiseta", 29.99);
const carrinhoDeCompras = new CarrinhoDeCompras();

carrinhoDeCompras.inserirProdutos(
  produto1,
  produto2,
  produto3,
  produto4,
  produto5
);
console.log(carrinhoDeCompras.valorTotal());
console.log(carrinhoDeCompras.quantidadeProdutos());
