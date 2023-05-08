const express = require("express");
const router = express.Router();
const apiController = require("../controllers/apiController");

// Rutas relacionadas a los comentarios:
// ...
router.get("/articulos", apiController.index);

module.exports = router;
