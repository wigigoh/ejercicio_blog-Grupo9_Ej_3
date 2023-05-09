const express = require("express");
const router = express.Router();
const articleController = require("../controllers/articleController");
const commentController = require("../controllers/commentController");

// Rutas relacionadas a los artículos:
// ...

router.get("/", articleController.index);
router.get("/articulos/crear", articleController.create);
router.post("/articulos/crear", articleController.store);
router.post("/articulos/:id", commentController.store);
router.get("/articulos/:id", articleController.show);
router.get("/articulos/:id/editar", articleController.edit);
router.patch("/articulos/:id", articleController.update);
router.delete("/articulos/:id", articleController.destroy);

module.exports = router;
