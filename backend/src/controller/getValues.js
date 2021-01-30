const mysql = require("mysql")
const data = require("../API/data")

module.exports = {
    getSearchValues: async (req, res) =>{
        
        try {
            let resultado = req.body.text;
            const getData = await data.getData(resultado)
            res.json(getData)

        } catch (error) {
            console.log("Erro", error)
            res.end()
        }
    },
    getUsersData: async (req, res) =>{
        
        try {
            let id = req.params.id;
            console.log(id)
            const getUsersDate = await data.getUser(id)
            res.json(getUsersDate)

        } catch (error) {
            console.log("Erro", error)
            res.end()
        }
    }
}