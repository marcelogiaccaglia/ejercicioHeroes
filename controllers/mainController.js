const path = require("path");

mainController = {
    main: (req, res) => {
        res.sendFile(path.resolve(__dirname + "/../views/index.html"));
    },
    credits: (req, res) => {
        res.sendFile(path.resolve(__dirname + "/../views/creditos.html"))
    }
}

module.exports = mainController