/* Classe Enterprise, que tem uma propriedade privada chamada collaborators, que é um array de objetos do tipo Collaboractor. 
 A classe tem um construtor que recebe o nome e o cnpj da empresa, e dois métodos: addCollaboractor, que adiciona um colaborador ao array de colaboradores, 
 showCollaborator, que exibe os colaboradores no console. A classe Collaboractor tem um construtor que recebe o nome e o sobrenome do colaborador.
 No final do código, é criada uma instância da classe Enterprise, dois colaboradores são criados e adicionados à empresa, 
 e a empresa e seus colaboradores são exibidos no console. */
export class Enterprise{
    private readonly collaborators: Collaboractor[] = [] //Usando classe como collaboractor como um tipo de dado para o array de colaboradores

    constructor(
        public readonly name: string,
        protected readonly cnpj: string
    ){
        this.name = name,
        this.cnpj = cnpj
    }

    public addCollaboctor(collaboractor: Collaboractor): void{
        this.collaborators.push(collaboractor)
    }

    public showCollaborator(): void{
        for(const collaborator of this.collaborators){
            console.log(collaborator)
        }
    }
}

//Classe Collaboractor sendo usada como um tipo de dado para o array de colaboradores da classe Enterprise.
export class Collaboractor { 
    constructor(
        public readonly name: string,
        public readonly surname: string
    ) {}
}

const enterprise = new Enterprise('Github', '11.111.111/0001-11')
const collaboractor1 = new Collaboractor('Moisés', 'Figueiredo')
const collaboractor2 = new Collaboractor('Taila', 'Vasconcelos')
enterprise.addCollaboctor(collaboractor1)
enterprise.addCollaboctor(collaboractor2)
console.log(enterprise)
enterprise.showCollaborator()