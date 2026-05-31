export class Enterprise{
    protected readonly collaborators: Collaborator[] = [] //Usando classe como collaboractor como um tipo de dado para o array de colaboradores

    constructor(
        public readonly name: string,
        private readonly cnpj: string
    ){
        this.name = name,
        this.cnpj = cnpj
    }

    public addCollabotor(collaboractor: Collaborator): void{
        this.collaborators.push(collaboractor)
    }

    public showCollaborator(collaboractors: Collaborator[]): void{
        for(const collaborator of collaboractors){
            console.log(`Collaborators: ${collaborator.name} ${collaborator.surname}`)
        }
    }
   
}

//Classe Collaboractor sendo usada como um tipo de dado para o array de colaboradores da classe Enterprise.
export class Collaborator { 
    constructor(
        public readonly name: string,
        public readonly surname: string
    ) {}
}

export class Github extends Enterprise {
    constructor(){
        super('Github', '60.306.353/0001-44')
    }

    popCollaborator(): Collaborator | null {
        const collaborator = this.collaborators.pop();
        if(collaborator) return collaborator;
        return null;
    }
}

const enterprise = new Github();
const collaboractor1 = new Collaborator('Moisés', 'Figueiredo')
const collaboractor2 = new Collaborator('Taila', 'Vasconcelos')
const collaboractor3 = new Collaborator('Rafael', 'Mendes')
const collaboractors = [collaboractor1, collaboractor2, collaboractor3]
enterprise.addCollabotor(collaboractor1)
enterprise.addCollabotor(collaboractor2)
enterprise.addCollabotor(collaboractor3)


enterprise.showCollaborator(collaboractors)
enterprise.popCollaborator()
console.log(enterprise)