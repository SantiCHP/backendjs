var express = require('express');

var app = express();

// cargar el archivo de rutas
var project_routes = require('./routes/project');

//middlewares
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//CORS
// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); //una vez subido a produccion en la nube se debe de cambiar el asterisco por las urls permitidas
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


//rutas
app.use('/api', project_routes);
// app.get('/', (req, res) => {
//     res.status(200).send( "<h1>Página de inicio</h1>" );
// })

// app.post('/test/:id', (req, res) => {
//     console.log(req.body.nombre); //muestra por consola el valor de nombre pasado por el body de la request
//     console.log(req.query.web); //muestra por consola el valor web pasado por la url
//     console.log(req.params.id); //muestra la id pasada por url e indicado en la ruta
//     res.status(200).send({
//         message: "Hola mundo desde mi API de NodeJS"
//     })
// });

//exportar
module.exports = app;
