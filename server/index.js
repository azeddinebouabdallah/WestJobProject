const express = require('express')
const bodyParser = require('body-parser')
const pg = require('pg')

const PORT = 3000

let app = express()

app.use(bodyParser)

app.use(bodyParser.urlencoded({
    extended: true
}))

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})