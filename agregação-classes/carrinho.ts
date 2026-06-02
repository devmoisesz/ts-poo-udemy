export class CarrinhoDeCompras {
    private readonly produtos: Produto[] = []


    inserirProduto(...produtos: Produto[]){
        for(const produto of produtos){
            this.produtos.push(produto)
        }
    }

    quantidade(): number{
        return this.produtos.length
    }

    valorTotal(): number{
       return this.produtos.reduce((valor, produto) => valor + produto.preco, 0)
    }
}

export class Produto{
    constructor(
        public nome: string,
        public preco: number
    ) {}
}

const Camisa = new Produto('Camisa Nike Club', 99.90)
const Blusa = new Produto('Moletom Cinza', 129.79)
const Calça = new Produto('Calça jeans preta', 110)
const Caneta = new Produto('Bic', 2.90)
const Tênis = new Produto('Puma Suede', 350.49)

const carrinhoDeCompras = new CarrinhoDeCompras()
carrinhoDeCompras.inserirProduto(Camisa, Blusa, Calça, Caneta, Tênis)
console.log('Quantidades de Produtos: ', carrinhoDeCompras.quantidade())
console.log('Total', carrinhoDeCompras.valorTotal())