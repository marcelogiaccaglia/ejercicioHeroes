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

app.listen(3030, () => console.log("Server running in 3030 port"));

