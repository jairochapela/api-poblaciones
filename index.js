const express = require('express')
const app = express()
const {Poblacion} = require('./models')
app.use(express.json())

app.get("/", function (req, res) {
    res.json("hola");
})


app.get("/poblaciones", function (req, res) {
    Poblacion.findAll()
    .then(poblaciones => res.json(poblaciones))
    .catch(err => res.json(err))
})

app.get("/poblaciones/:id", function (req, res) {
    const {id} = req.params;
    Poblacion.findOne({where: {id}})
    .then(poblacion => {
        if (poblacion) res.json(poblacion)
        else res.status(404).json("Población no registrada")
    })
    .catch(err => res.json(err))
})

app.post("/poblaciones", function (req, res) {
    const poblacion = req.body;
    Poblacion.create(poblacion)
    .then(poblacion => res.status(201).json(poblacion))
    .catch(err => res.status(400).json(err))
})

app.put("/poblaciones/:id", function (req, res) {
    const {id} = req.params;
    const nuevosDatos = req.body;
    Poblacion.findOne({where: {id}})
    .then(poblacion => {
        if (poblacion) {
            //copia los campos de nuevosDatos al objeto original (población)
            Object.assign(poblacion, nuevosDatos)

            //guarda los datos actualizados y genera respuesta
            poblacion.save()
            .then(poblacion => res.json(poblacion))
        } else {
            res.status(404).json("Población no registrada")
        }
    })
    .catch(err => res.status(400).json(err))
})

app.listen(3000)