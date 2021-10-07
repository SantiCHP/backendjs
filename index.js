var mongoose = require('mongoose');
var app = require('./app');
var port = 3700;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://santichp:santivarsha@cluster0.6vm51.mongodb.net/portafolio?retryWrites=true&w=majority')
    .then(() => {
        console.log("Conexion a la base de datos establecida con éxito");

        // Creacion del servidor
        app.listen(port, () => {
            console.log("Servidor corriendo correctamente en localhost:3700")
        });
    })
    .catch(err => console.log(err));