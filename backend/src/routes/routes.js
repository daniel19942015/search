const route = require("express").Router()
const controller = require("../controller/getValues")

route.post("/", controller.getSearchValues)
route.post("/:id", controller.getUsersData)

module.exports = {
    route
}