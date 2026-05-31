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
    getFullName(): string {
        return 'Student: ' + this.name + ' ' + this.surname
    }
}

export class Client extends Person{
    getFullName(): string {
        return 'Client: ' + this.name + ' ' + this.surname
    }
}

const student = new Student('Moises', 'Figueiredo', 17, '')
const client = new Client('Ryan', 'Cocielo', 23, '')
console.log(student.getFullName())
console.log(client.getFullName())