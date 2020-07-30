const fs = require("fs");
const path = require("path");

heroesController = {
    mainHeroes: (req, res) => {
        res.send(JSON.parse(fs.readFileSync(path.resolve(__dirname + "/../data/heroes.json"))));
    },
    nameProfesion: (req, res) => {
        let heroe = JSON.parse(fs.readFileSync(path.resolve(__dirname + "/../data/heroes.json")));
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
      },
    resenia: (req, res) => {
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
    },
    reseniaEntry: (req, res) => {

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
      },
    reseniaBadWord: (req, res) => {

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
    }
}


module.exports = heroesController