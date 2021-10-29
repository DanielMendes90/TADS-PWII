const mysql = require('mysql')
//Cria a conexão com o banco de dados passando os parâmetros necessários
const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'admin',
    database: 'agenda-petshop'
})
//Exportação do objeto de conexão com o banco de dados
module.exports = conexao