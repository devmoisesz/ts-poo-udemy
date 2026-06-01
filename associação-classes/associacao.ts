export class Escritor {
    private ferramentaDoEscritor: Ferramenta | null = null

    constructor(private nome_escritor: string) {}

    set ferramenta(ferramenta: Ferramenta | null){
        this.ferramentaDoEscritor = ferramenta
    }

    get ferramenta(): Ferramenta | null {
        return this.ferramentaDoEscritor
    }

    escrever(): void{
        if(this.ferramenta === null) {
            console.log('Não posso escrever sem ferramenta!')
            return;
        } 
        this.ferramenta.escrever(this.nome_escritor)
        
    }

    get nome(): string{
        return this.nome_escritor
    }
}

export abstract class Ferramenta{
    constructor(
        private nome_ferramenta: string, 
    ){}

    get nomeFerramenta(): string{
        return this.nome_ferramenta
    }

    abstract escrever(nomeEscritor: string): void
}

export class Caneta extends Ferramenta {
    escrever(nomeEscritor: string): void {
        console.log(`O Escritor ${nomeEscritor} está usando a ${this.nomeFerramenta} pra escrever!`)
    }
}

export class MaquinaEscrever extends Ferramenta {
    escrever(nomeEscritor: string): void {
        console.log(`O Escritor ${nomeEscritor} está usando a ${this.nomeFerramenta} pra escrever!`)
    }
}

const escritorPaquetá = new Escritor('Paquetá')
const escritorCasemiro = new Escritor('Casemiro')
const caneta = new Caneta('Faber Castell')
const maquinaEscrever = new MaquinaEscrever('Máquina')

escritorPaquetá.ferramenta = caneta
escritorPaquetá.escrever()

escritorCasemiro.ferramenta = maquinaEscrever
escritorCasemiro.escrever()