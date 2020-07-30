const express = require("express");
const router = express.Router();

const fs = require("fs");
const path = require("path");


router.get("/", (req, res) => {
    res.send(JSON.parse(fs.readFileSync(path.resolve(__dirname + "/../data/heroes.json"))));
  });
  
  // Ruta /heroes/n ➝ se envía el nombre y profesión del héroe solicitado
  router.get("/:n", (req, res) => {
    // Acá lo primero será encontrar al héroe que corresponda
    let heroe = JSON.parse(fs.readFileSync(path.resolve(__dirname + "/../data/heroes.json")));
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
  
  router.get("/:n/resenia/completa", (req, res) => {
    let heroe = JSON.parse(fs.readFileSync(path.resolve(__dirname + "/../data/heroes.json")));
  
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
  
  router.get("/:n/resenia", (req, res) => {
  
    let heroe = JSON.parse(fs.readFileSync(path.resolve(__dirname + "/../data/heroes.json")));
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
  router.get("/:n/resenia/*", (req, res) => {
  
    let heroe = JSON.parse(fs.readFileSync(path.resolve(__dirname + "/../data/heroes.json")));
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

  module.exports = router;