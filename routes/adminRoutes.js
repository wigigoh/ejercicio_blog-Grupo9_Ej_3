const express = require("express");
const router = express.Router();
const pagesController = require("../controllers/pagesController");

// Rutas relacionadas a los usuarios:
// ...

router.get("/admin", pagesController.showAdmin);

module.exports = router;
