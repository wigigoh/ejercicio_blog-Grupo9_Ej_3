const express = require("express");
const router = express.Router();
const articleController = require("../controllers/articleController");
const commentController = require("../controllers/commentController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const isAdmin = require("../middlewares/isAdmin");
const isWriter = require("../middlewares/isWriter");

// Rutas relacionadas a los artículos:
// ...

router.get("/", articleController.index);
router.get("/crear", ensureAuthenticated, isWriter, articleController.create);
router.post("/crear", ensureAuthenticated, articleController.store);
router.post("/:id", ensureAuthenticated, commentController.store);
router.get("/:id", articleController.show);
router.get("/:id/editar", ensureAuthenticated, isWriter, articleController.edit);
router.patch("/:id", ensureAuthenticated, isWriter, articleController.update);
router.delete("/:id/eliminar", ensureAuthenticated, isWriter, articleController.destroy);

module.exports = router;
