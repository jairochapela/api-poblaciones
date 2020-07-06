const express = require('express')
const app = express()
const {Poblacion} = require('./models')

app.get("/", function (req, res) {
    res.json("hola");
})


app.get("/poblaciones", function (req, res) {
    Poblacion.findAll()
    .then(poblaciones => res.json(poblaciones))
    .catch(err => res.json(err))
})


app.listen(3000)