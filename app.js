// Require de Express
const express = require("express");

// Require de FS
const fs = require("fs");
const { dirname } = require("path");

// Ejecución de Express
const app = express();
app.use(express.static("public"));

const routesHeroes = require("./routes/heroes");
app.use("/heroes", routesHeroes);

const routesMain = require("./routes/main");
app.use("/", routesMain);


// Levantando el Servidor en el puerto 3030
app.listen(3030, () => console.log("Server running in 3030 port"));

// Leyendo y parseando (en array) el contenido de heroes.json
const heroes = JSON.parse(fs.readFileSync(__dirname + "/data/heroes.json", "utf-8"));

// Ruta Raíz / ➝ Home


/*
// Ruta Créditos
// ¿?

// Ruta... ¿Pára qué sirve esto?
app.get('*', (req, res) => {
	res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
});*/
