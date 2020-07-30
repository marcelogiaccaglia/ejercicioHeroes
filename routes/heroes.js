const express = require("express");
const router = express.Router();
const heroesController = require("../controllers/heroesController");


router.get("/", heroesController.mainHeroes);
  
router.get("/:n", heroesController.nameProfesion);
  
router.get("/:n/resenia/completa", heroesController.resenia);

router.get("/:n/resenia", heroesController.reseniaEntry);

router.get("/:n/resenia/*", heroesController.reseniaBadWord);

module.exports = router;