const express = require("express");
const router = express.Router();
const articleController = require("../controllers/articleController");
const commentController = require("../controllers/commentController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const authRole = require("../middlewares/authRole");

// Rutas relacionadas a los artículos:
// ...

router.get("/", articleController.index);
router.get("/crear", authRole.isWriter, articleController.create);
router.post("/crear", ensureAuthenticated, articleController.store);
router.post("/:id", ensureAuthenticated, commentController.store);
router.get("/:id", articleController.show);
router.get("/:id/editar", authRole.isWriter, articleController.edit);
router.patch("/:id", authRole.isWriter, articleController.update);
router.delete("/:id/eliminar", authRole.isWriter, articleController.destroy);

module.exports = router;
