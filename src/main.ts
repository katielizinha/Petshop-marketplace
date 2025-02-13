import express from 'express'
import mysql from 'mysql2/promise'
import cors from 'cors'
import BancoMysql from './db/banco-mysql'
import BancoMongo from './db/banco-mongo'

const app = express()
app.use(express.json())
app.use(cors())


app.get("/produtos", async (req, res) => {
    try {
        const banco = new BancoMysql()
        await banco.criarConexao()
        const result = await banco.listar()
        await banco.finalizarConexao()
        res.send(result)
    } catch (e) {
        console.log(e)
        res.status(500).send("Server ERROR")
    }
})
app.get("/produtos/:id", async (req, res) => {
    try {
        
        const banco = new BancoMysql()
        await banco.criarConexao()
        const result = await banco.listarPorId(req.params.id)
        await banco.finalizarConexao()
        res.send(result)
    } catch (e) {
        console.log(e)
        res.status(500).send("Server ERROR")
    }
})
app.post("/produtos", async (req, res) => {
    try {
        const {id,nome,descricao,preco,imagem,data_producao} = req.body
        const banco = new BancoMysql()
        await banco.criarConexao()
        const produto = {id:parseInt(id),nome,descricao,preco,imagem,data_producao}
        const result = await banco.inserir(produto)
        await banco.finalizarConexao()
        res.send(result) 
    } catch (e) {
        console.log(e)
        res.status(500).send(e)
    }
})

//DELETAR
app.delete("/produtos/:id", async (req, res) => {
    try {
        const banco = new BancoMysql()
        await banco.criarConexao()
        const result = await banco.excluir(req.params.id)
        await banco.finalizarConexao()
        res.status(200).send("Produto excluído com sucesso id: " + req.params.id)
    } catch (e) {
        console.log(e)
        res.status(500).send("Erro ao excluir")
    }
})


//ALTERAR
app.put("/produtos/:id",async(req,res)=>{
    const {nome,descricao,preco,imagem,data_producao} = req.body
    const produto = {nome,descricao,preco,imagem,data_producao}
    const banco = new BancoMysql()
    await banco.criarConexao()
    const result = await banco.alterar(req.params.id,produto)
    await banco.finalizarConexao()
    res.status(200).send("Produto alterado com sucesso id: "+req.params.id)
})


//Conexão Com a tabela donos
app.get("/donos", async (req, res) => {
    try {
        const banco = new BancoMysql()
        await banco.criarConexao()
        const result = await banco.listarDonos()
        await banco.finalizarConexao()
        res.send(result)
    } catch (e) {
        console.log(e)
        res.status(500).send("Server ERROR")
    }
})
app.get("/donos/:id", async (req, res) => {
    try {
       
        const banco = new BancoMysql()
        await banco.criarConexao()
        const result = await banco.listarPorIdDonos(req.params.id)
        await banco.finalizarConexao()
        res.send(result)
    } catch (e) {
        console.log(e)
        res.status(500).send("Server ERROR")
    }
})
app.post("/donos", async (req, res) => {
    try {
        const {id,nomeDono,nomeAnimal,CPF,telefone,dataCadastro,imagem} = req.body
        const banco = new BancoMysql()
        await banco.criarConexao()
        const donos = {id:parseInt(id),nomeDono,nomeAnimal,CPF,telefone,dataCadastro,imagem}
        const result = await banco.inserirDonos(donos)
        await banco.finalizarConexao()
        res.send(result)
    } catch (e) {
        console.log(e)
        res.status(500).send(e)
    }
})


app.delete("/donos/:id", async (req, res) => {
    try {
      const banco = new BancoMysql()
      await banco.criarConexao()
      const result = await banco.excluirDonos(req.params.id)
      await banco.finalizarConexao()
      res.status(200).send("Dono excluído com sucesso id: " + req.params.id)
    } catch (e) {
      console.log(e)
      res.status(500).send("Erro ao excluir dono")
    }
  })

//ALTERAR
app.put("/donos/:id",async(req,res)=>{
    const {id,nomeDono,nomeAnimal,CPF,telefone,dataCadastro,imagem} = req.body
    const donos = {id,nomeDono,nomeAnimal,CPF,telefone,dataCadastro,imagem}
    const banco = new BancoMysql()
    await banco.criarConexao()
    const result = await banco.alterarDonos(req.params.id,donos)
    await banco.finalizarConexao()
    res.status(200).send("Dono alterado com sucesso id: "+req.params.id)
})


//Consulta
app.get("/consulta", async (req, res) => {
    try {
        const banco = new BancoMysql()
        await banco.criarConexao()
        const result = await banco.listarConsulta()
        await banco.finalizarConexao()
        res.send(result)
    } catch (e) {
        console.log(e)
        res.status(500).send("Server ERROR")
    }
})

app.post("/consulta", async (req, res) => {
    try {
        const {id,dataConsulta,nomePaciente,tipoConsulta,veterinario} = req.body
        const banco = new BancoMysql()
        await banco.criarConexao()
        const consulta = {id:parseInt(id),dataConsulta,nomePaciente,tipoConsulta,veterinario}
        const result = await banco.inserirConsulta(consulta)
        await banco.finalizarConexao()
        res.send(result) 
    } catch (e) {
        console.log(e)
        res.status(500).send(e)
    }
})

//Funcionario
app.get("/funcionarios", async (req, res) => {
    try {
        const banco = new BancoMysql()
        await banco.criarConexao()
        const result = await banco.listarFuncionario()
        await banco.finalizarConexao()
        res.send(result)
    } catch (e) {
        console.log(e)
        res.status(500).send("Server ERROR")
    }
})

app.post("/funcionarios", async (req, res) => {
    try {
        const {id,nomeFuncionario,areaEspecializacao,email,telefone,imagem} = req.body
        const banco = new BancoMysql()
        await banco.criarConexao()
        const funcionario = {id:parseInt(id),nomeFuncionario,areaEspecializacao,email,telefone,imagem}
        const result = await banco.inserirFuncionario(funcionario)
        await banco.finalizarConexao()
        res.send(result) 
    } catch (e) {
        console.log(e)
        res.status(500).send(e)
    }
})

//Animais
app.get("/animais", async (req, res) => {
    try {
        const banco = new BancoMysql()
        await banco.criarConexao()
        const result = await banco.listarAnimal()
        await banco.finalizarConexao()
        res.send(result)
    } catch (e) {
        console.log(e)
        res.status(500).send("Server ERROR")
    }
})

app.post("/animais", async (req, res) => {
    try {
        const {id,nomeAnimal,peso,idade,raca,consultaRealizada,imagem} = req.body
        const banco = new BancoMysql()
        await banco.criarConexao()
        const animal = {id:parseInt(id),nomeAnimal,peso,idade,raca,consultaRealizada,imagem}
        const result = await banco.inserirAnimal(animal)
        await banco.finalizarConexao()
        res.send(result) 
    } catch (e) {
        console.log(e)
        res.status(500).send(e)
    }
})


app.listen(8000, () => {
    console.log("Iniciei o servidor")
})


