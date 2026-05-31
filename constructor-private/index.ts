export class Database {
    private static database: Database

    private constructor(
        private readonly host: string,
        private readonly user: string,
        private readonly password: string
    ) {}

    static getDataBase(host: string, user: string, password: string): Database{
        if(Database.database) {
            console.log('Conexão já criada')
            return Database.database
        } 
        Database.database = new Database(host, user, password)
        console.log('Criando conexão')
        return Database.database
    }
}

const db1 = Database.getDataBase('localhost', 'root', '123456')

const db2 = Database.getDataBase('localhost', 'root', '123456')

console.log(db1 === db2)