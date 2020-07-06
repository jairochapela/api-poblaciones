const express = require('express')
const app = express()

app.get("/", function (req, res) {
    res.json("hola");
})


app.listen(3000)