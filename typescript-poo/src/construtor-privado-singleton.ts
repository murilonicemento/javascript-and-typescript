export class Database {
  private static database: Database;

  private constructor(
    private host: string,
    private user: string,
    private password: string
  ) {}

  connect(): void {
    console.log(`Conectando: ${this.host}, ${this.user} e ${this.password}`);
  }

  static getDatabase(host: string, user: string, password: string): Database {
    if (Database.database) {
      console.log("Retornando Instância já Criada");
      return Database.database;
    }
    console.log("Criando Nova Instância");
    Database.database = new Database(host, user, password);
    return Database.database;
  }
}

const database = Database.getDatabase("localhost", "root", "123456");
database.connect();
const database2 = Database.getDatabase("localhost", "root", "123456");
database2.connect();

console.log(database === database2);
