import mysql , { Connection, RowDataPacket } from 'mysql2/promise'
class BancoMysql{
    //Atributos de uma classe
    connection:Connection|null = null
    
    //Métodos
    async criarConexao(){
        this.connection = await mysql.createConnection({
            host: process.env.dbhost ? process.env.dbhost : "localhost",
            user: process.env.dbuser ? process.env.dbuser : "root",
            password: process.env.dbpassword ? process.env.dbpassword : "",
            database: process.env.dbname ? process.env.dbname : "banco1022a",
            port: process.env.dbport ? parseInt(process.env.dbport) : 3306
        })
    }
    async consultar(query:string,params?:any[]){
        if(!this.connection) throw new Error("Erro de conexão com o banco de dados.")
        const [result, fields] = await this.connection.query(query,params)
        return result
    }
    async finalizarConexao(){
        if(!this.connection) throw new Error("Erro de conexão com o banco de dados.")
        await this.connection.end()
    }

    async listar(){
        if(!this.connection) throw new Error("Erro de conexão com o banco de dados.")
        const [result, fields] = await this.connection.query("SELECT * FROM produtos")
        return result
    }
    async inserir(produto:{id:number,nome:string,descricao:string,preco:string,imagem:string, data_producao:Date}){
        if(!this.connection) throw new Error("Erro de conexão com o banco de dados.")
        const [result, fields] = await this.connection.query("INSERT INTO produtos VALUES (?,?,?,?,?,?)",[produto.id,produto.nome,produto.descricao,produto.preco,produto.imagem, produto.data_producao])
        return result
    }
    async excluir(id:string){
        if(!this.connection) throw new Error("Erro de conexão com o banco de dados.")
        const [result, fields] = await this.connection.query("DELETE FROM produtos WHERE id = ?",[id])
        return result
    }
    async alterar(id:string,produto:{id?:string,nome:string,descricao:string,preco:string,imagem:string, data_producao:Date}){
        if(!this.connection) throw new Error("Erro de conexão com o banco de dados.")
        const [result, fields] = await this.connection.query("UPDATE produtos SET nome=?,descricao=?,preco=?,imagem=?, data_producao=? WHERE id=?",[produto.nome,produto.descricao,produto.preco,produto.imagem, produto.data_producao, id])
        return result
    }
    async listarPorId(id:string){
        if(!this.connection) throw new Error("Erro de conexão com o banco de dados.")
        const [result, fields] = await this.connection.query("SELECT * FROM produtos WHERE id = ?",[id]) as RowDataPacket[]
        return result[0]
    }


    async listarDonos() {
        if (!this.connection) throw new Error("Erro de conexão com o banco de dados.");
        const [result, fields] = await this.connection.query("SELECT * FROM donos");
        return result;
    }
    async inserirDonos(dono: { id: number, nomeDono: string, nomeAnimal: string, CPF: string, telefone: string, dataCadastro: string, imagem: string }) {
        if (!this.connection) throw new Error("Erro de conexão com o banco de dados.");
        const [result, fields] = await this.connection.query(
            "INSERT INTO donos VALUES (?,?,?,?,?,?,?)",
            [dono.id, dono.nomeDono, dono.nomeAnimal, dono.CPF, dono.telefone, dono.dataCadastro, dono.imagem]
        );
        return result;
    }
    async excluirDonos(id:string){
        if(!this.connection) throw new Error("Erro de conexão com o banco de dados.")
        const [result, fields] = await this.connection.query("DELETE FROM donos WHERE id = ?",[id])
        return result
    }
    async alterarDonos(id: string, dono: { id?:string, nomeDono:string, nomeAnimal:string, CPF:string, telefone:string, dataCadastro:Date, imagem:string }) {
        if (!this.connection) throw new Error("Erro de conexão com o banco de dados.");
        const [result, fields] = await this.connection.query("UPDATE donos SET nomeDono=?, nomeAnimal=?, CPF=?, telefone=?, dataCadastro=?, imagem=? WHERE id=?",[dono.nomeDono, dono.nomeAnimal, dono.CPF, dono.telefone, dono.dataCadastro, dono.imagem, id]
        );
        return result;
    }
    async listarPorIdDonos(id: string) {
        if (!this.connection) throw new Error("Erro de conexão com o banco de dados.");
        const [result, fields] = await this.connection.query("SELECT * FROM donos WHERE id = ?", [id]) as RowDataPacket[];
        return result[0];
    }
    async listarConsulta(){
        if(!this.connection) throw new Error("Erro de conexão com o banco de dados.")
        const [result, fields] = await this.connection.query("SELECT * FROM consulta")
        return result
    }
    async inserirConsulta(consulta:{id:number,dataConsulta:string,nomePaciente:string,tipoConsulta:string,veterinario:string}){
        if(!this.connection) throw new Error("Erro de conexão com o banco de dados.")
        const [result, fields] = await this.connection.query("INSERT INTO consulta VALUES (?,?,?,?,?)",[consulta.id,consulta.dataConsulta,consulta.nomePaciente,consulta.tipoConsulta,consulta.veterinario])
        return result
    }
    async listarFuncionario(){
        if(!this.connection) throw new Error("Erro de conexão com o banco de dados.")
        const [result, fields] = await this.connection.query("SELECT * FROM funcionario")
        return result
    }
    async inserirFuncionario(funcionario:{id:number,nomeFuncionario:string,areaEspecializacao:string,email:string,telefone:string,imagem:string}){
        if(!this.connection) throw new Error("Erro de conexão com o banco de dados.")
        const [result, fields] = await this.connection.query("INSERT INTO funcionario VALUES (?,?,?,?,?,?)",[funcionario.id,funcionario.nomeFuncionario,funcionario.areaEspecializacao,funcionario.email,funcionario.telefone, funcionario.imagem])
        return result
    }
    async listarAnimal(){
        if(!this.connection) throw new Error("Erro de conexão com o banco de dados.")
        const [result, fields] = await this.connection.query("SELECT * FROM animal")
        return result
    }
    async inserirAnimal(animal:{id:number,nomeAnimal:string,peso:number,idade:string,raca:string,consultaRealizada:string,imagem:string}){
        if(!this.connection) throw new Error("Erro de conexão com o banco de dados.")
        const [result, fields] = await this.connection.query("INSERT INTO animal VALUES (?,?,?,?,?,?,?)",[animal.id,animal.nomeAnimal,animal.peso,animal.idade,animal.raca,animal.consultaRealizada,animal.imagem])
        return result
    }

}



export default BancoMysql