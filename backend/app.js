const express = require("express")
const cors = require("cors")
const { route } = require("./src/routes/routes")

const port = process.env.PORT || 3000

const app = express()

app.use(cors())
app.use(express.json())
app.use(route)


app.listen(port, () => console.info(`Connect on port -> ${port}`))

