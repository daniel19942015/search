const mysql = require("mysql")

async function connection(){
    try {
        let coon = mysql.createConnection({
            host: "127.0.0.1",
            user: "root",
            password: "",
            database: "search"

        })
        coon.connect()

        return coon;

    } catch (error) {
        console.info("Não foi possível estabelecer uma conexão", error)
    }
}

async function getData(value){
    try {
        
        return new Promise( async (resolve, reject) =>{
            const conect = await connection();
            conect.query(`select * from clientes where nome like '${value}%'`, (error, result, fields) =>{
                if(error) throw error
                resolve(result);
            })
            conect.end()
        })

    } catch (error) {
        console.log("Não foi possível trazer os dados");
    }
}

async function getUser(id){
    try {
        
        return new Promise( async (resolve, reject) =>{
            const conect = await connection();
            conect.query(`select * from clientes where id = ${id}`, (error, result, fields) =>{
                if(error) throw error
                resolve(result);
            })
            conect.end()
        })

    } catch (error) {
        console.log("Não foi possível trazer os dados");
    }
}

module.exports = {
    getData,
    getUser
}