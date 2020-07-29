// Require de Express
const express = require("express");

// Require de FS
const fs = require("fs");
const { dirname } = require("path");

// Ejecución de Express
const app = express();
app.use(express.static("public"));

// Levantando el Servidor en el puerto 3030
app.listen(3030, () => console.log("Server running in 3030 port"));

// Leyendo y parseando (en array) el contenido de heroes.json
const heroes = JSON.parse(fs.readFileSync(__dirname + "/data/heroes.json", "utf-8"));

// Ruta Raíz / ➝ Home
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

// Ruta /heroes ➝ se envía todo el array y Express lo parsea para el browser como JSON :D
app.get("/heroes", (req, res) => {
  res.send(JSON.parse(fs.readFileSync("./data/heroes.json")));
});

// Ruta /heroes/n ➝ se envía el nombre y profesión del héroe solicitado
app.get("/heroes/:n", (req, res) => {
  // Acá lo primero será encontrar al héroe que corresponda
  let heroe = JSON.parse(fs.readFileSync("./data/heroes.json"));
  /*   console.log(parseInt(req.params.id)); */
  let pos = parseInt(req.params.n) - 1;

  if (heroe.length >= req.params.n) {
    let resultado = {
      nombre: heroe[pos].nombre,
      profesion: heroe[pos].profesion,
    };

    res.send(JSON.stringify(resultado));
  } else {
    res.send("No se encontró al heroe");
  }

  // Si se encuentra al héroe se envía el nombre y su profesión
  // Si NO se encuentra se envía el mensaje de no encontrado
});

app.get("/heroes/:n/resenia/completa", (req, res) => {
  let heroe = JSON.parse(fs.readFileSync("./data/heroes.json"));

  let pos = parseInt(req.params.n) - 1;

  if (heroe.length >= req.params.n) {
    let resultado = {
      nombre: heroe[pos].nombre,
      resenia: heroe[pos].resenia,
    };
    res.send(JSON.stringify(resultado));
  } else {
    res.send("​No tenemos en nuestra base ningún héroe ni heroína con ese id.");
  }
});

app.get("/heroes/:n/resenia", (req, res) => {

  let heroe = JSON.parse(fs.readFileSync("./data/heroes.json"));
  let pos = parseInt(req.params.n) - 1;


  if (heroe.length >= req.params.n) {

    let arrPalabras = heroe[pos].resenia.split(" ");
    let reseniaCorta = ""
    for (let i = 0; i < 29; i++) {
      reseniaCorta += `${arrPalabras[i]} ` /* arrPalabras[i] + " " */
    }
    reseniaCorta += "..."
    console.log(arrPalabras);

    let resultado = {
      nombre: heroe[pos].nombre,
      resenia: reseniaCorta,
    };
    res.send(JSON.stringify(resultado));
  } else {
    res.send("​No tenemos en nuestra base ningún héroe ni heroína con ese id.");
  }
});


// Ruta /heroes/n/bio ➝ se envía la bio del héroe solicitado
app.get("/heroes/:n/resenia/*", (req, res) => {

  let heroe = JSON.parse(fs.readFileSync("./data/heroes.json"));
  let pos = parseInt(req.params.n) - 1;


  if (heroe.length >= req.params.n) {

    let arrPalabras = heroe[pos].resenia.split(" ");
    let reseniaCorta = ""
    for (let i = 0; i < 29; i++) {
      reseniaCorta += `${arrPalabras[i]} ` /* arrPalabras[i] + " " */
    }
    reseniaCorta += "..."
    console.log(arrPalabras);

    let resultado = {
      nombre: heroe[pos].nombre,
      resenia: reseniaCorta,
    };
    res.send(JSON.stringify(resultado));
  } else {
    res.send("​No tenemos en nuestra base ningún héroe ni heroína con ese id.");
  }
});

app.get("/creditos", (req, res) => {
    res.sendFile(__dirname + "/views/creditos.html")
});


/*
// Ruta Créditos
// ¿?

// Ruta... ¿Pára qué sirve esto?
app.get('*', (req, res) => {
	res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
});*/
