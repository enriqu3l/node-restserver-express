require('./config/config') //Leemos el archivo de configuracion donde tenemos el puerto para que funcione en dev y en produccion
const express = require('express')
const app = express()
const bodyParser = require('body-parser')


//Los app.use son middlewares!!!
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// app.get('/', function(req, res) {
//     res.json('Hello World')
// })

app.get('/usuario', function(req, res) {
    res.json('get Ususario')
})

app.post('/usuario', function(req, res) {
    let body = req.body;

    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        })
    } else {
        res.json({
            persona: body
        })
    }
})

app.put('/usuario/:id', function(req, res) {
    let id = req.params.id;

    res.json({
        id
    })
})

app.delete('/usuario', function(req, res) {
    res.json('delete Ususario')
})

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto ', process.env.PORT);
})