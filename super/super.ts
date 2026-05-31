export class Person {
    constructor(
        public name: string,
        public surname: string,
        private age: number,
        protected cpf: string
    ) {
        this.age = age
        this.name = name
    }

    getAge(): number{
        return this.age
    }

    getCpf(): string{
        return this.cpf
    }

    getFullName(): string {
        return this.name + ' ' + this.surname
    }
}

export class Student extends Person{
    constructor(
        name: string,
        surname: string,
        age: number,
        cpf: string,
        public school: string
    ) {
        super(name, surname, age, cpf)
    }

    
}

export class Client extends Person{
    constructor(
        name: string,
        surname: string,
        age: number,
        cpf: string,
        private purchaseHistory?: Buy[]
    ){
        super(name, surname, age, cpf)
    }

    showPurchases(): void{
        console.log(JSON.stringify(this.purchaseHistory, null, 2))
    }

    getFullName(): string {
        return 'Client: ' + this.name + ' ' + this.surname
    }
}

export class Buy{
    constructor(public buy: string[]) {}
}

const aluno = new Student('Ana Clara', 'Santos', 15, '000.000.000-00', 'Havard')

const compra = new Buy(['Erva Mate Tereré de Menta'])

const cliente = new Client('Lucas', 'Messias', 22, '123.456.789-09', [compra])

console.log(aluno) 
console.log(cliente)
cliente.showPurchases()