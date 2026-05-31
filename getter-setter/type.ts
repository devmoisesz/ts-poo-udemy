export class Pessoa{
    constructor(
        private nome: string,
        private sobrenome: string,
        private idade: number,
        private _cpf: string
    ) { 
        this._cpf = _cpf 
    }

    set cpf(cpf: string){
        console.log('SETTER')
        this._cpf = cpf
    }

    get cpf(): string {
        console.log('GETTER')
        return this._cpf.replace(/\D/g, '');
    }
}

const pessoa = new Pessoa('Guilherme', 'Pessoa', 26, '000.000.000-00')

pessoa.cpf = '123.456.789-09'
console.log(pessoa.cpf)