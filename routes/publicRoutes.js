const express = require("express");
const router = express.Router();
const { showHome, showArticle, showAdmin } = require("../controllers/pagesController");

// Rutas relacionadas a la parte pública del sitio web:
// ...

// router.get("/", showHome);
// router.get("/article/:id", showArticle);
// router.get("/admin", showAdmin);

module.exports = router;
