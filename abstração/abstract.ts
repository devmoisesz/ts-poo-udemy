export abstract class Banco{

    constructor(
        protected nome_usuario: string,
        protected saldo: number,
        protected chavePix: string
    ) {}
    
    abstract verSaldo(): void
    
    abstract sacar(saque: number): void

    abstract fazerPix(chave: string, valor: number): void

    abstract receberPix(chave: string, valor: number): void
}

export class Itau extends Banco {

    verSaldo(): void {
        console.log('Saldo Disponivel no Itau: ' + this.saldo)
    }

    sacar(saque: number): void {
        if(saque > this.saldo) {
            console.log('Saldo Insuficiente para saque!')
            return;
        }
        this.saldo -= saque
        console.log(`Saque no banco Itaú realizado com sucesso no valor de: ${saque}`)
        console.log(`Saldo Atual no Itau: ${this.saldo}`)
    }

    fazerPix(chave: string, valor: number): void {
        if(valor > this.saldo) {
            console.log('Saldo Insuficiente para Pix!')
            return;
        }
        this.saldo -= valor
        console.log(`Pix realizado com sucesso para a chave: ${chave} no valor de: ${valor}`)
        console.log(`Saldo Atual no Itau: ${this.saldo}`)
    }

    receberPix(chave: string, valor: number): void {
        if(chave !== this.chavePix) {
            console.log('Chave Pix inválida para receber o valor!')
            return;
        }
        this.saldo += valor
        console.log(`Pix recebido com sucesso na chave: ${chave} no valor de: ${valor}`)
        console.log(`Saldo Atual no Itau: ${this.saldo}`)
    }
}

export class Santader extends Banco {
    verSaldo(): void {
        console.log('Saldo Disponivel no Santander: ' + this.saldo)
    }

    sacar(saque: number): void {
        if(saque > this.saldo) {
            console.log('Saldo Insuficiente para saque!')
            return;
        }
        this.saldo -= saque
        console.log(`Saque no banco Santander realizado com sucesso no valor de: ${saque}`)
        console.log(`Saldo Atual no Santander: ${this.saldo}`)
    }

    fazerPix(chave: string, valor: number): void {
        if(valor > this.saldo) {
            console.log('Saldo Insuficiente para Pix!')
            return;
        }
        this.saldo -= valor
        console.log(`Pix realizado com sucesso para a chave: ${chave} no valor de: ${valor}`)
        console.log(`Saldo Atual no Santander: ${this.saldo}`)
    }

    receberPix(chave: string, valor: number): void {
        if(chave !== this.chavePix) {
            console.log('Chave Pix inválida para receber o valor!')
            return;
        }
        this.saldo += valor
        console.log(`Pix recebido com sucesso na chave: ${chave} no valor de: ${valor}`)
        console.log(`Saldo Atual no Santander: ${this.saldo}`)
    }
}

const contaItau = new Itau('Moisés Figueiredo', 56000, '12345678909')
const contaSantander = new Santader('Moisés Figueiredo', 1200, '16997814422')


contaItau.verSaldo()
contaItau.sacar(10000)
//contaItau.sacar(10000)
contaItau.fazerPix('4658777984', 1000)

contaSantander.verSaldo()
contaSantander.sacar(500)
contaSantander.receberPix('16997814422', 1200)
//contaSantander.pix('16997814422', 500)