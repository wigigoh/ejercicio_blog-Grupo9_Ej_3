const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const isAdmin = require("../middlewares/isAdmin");
const isEditor = require("../middlewares/isEditor");
const isWriter = require("../middlewares/isWriter");

// Rutas relacionadas a los comentarios:
router.get("/:id/editar", ensureAuthenticated, isEditor, commentController.edit);
router.patch("/:id", ensureAuthenticated, isEditor, commentController.update);
router.delete("/:id/eliminar", ensureAuthenticated, isEditor, commentController.destroy);

module.exports = router;
