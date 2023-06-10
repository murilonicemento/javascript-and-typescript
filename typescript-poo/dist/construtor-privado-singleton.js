"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
class Database {
    constructor(host, user, password) {
        this.host = host;
        this.user = user;
        this.password = password;
    }
    connect() {
        console.log(`Conectando: ${this.host}, ${this.user} e ${this.password}`);
    }
    static getDatabase(host, user, password) {
        if (Database.database) {
            console.log("Retornando Instância já Criada");
            return Database.database;
        }
        console.log("Criando Nova Instância");
        Database.database = new Database(host, user, password);
        return Database.database;
    }
}
exports.Database = Database;
const database = Database.getDatabase("localhost", "root", "123456");
database.connect();
const database2 = Database.getDatabase("localhost", "root", "123456");
database2.connect();
console.log(database === database2);
//# sourceMappingURL=construtor-privado-singleton.js.map