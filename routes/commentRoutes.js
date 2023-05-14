const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");
const authRole = require("../middlewares/authRole");

// Rutas relacionadas a los comentarios:
router.get("/:id/editar", authRole.isEditor, commentController.edit);
router.patch("/:id", authRole.isEditor, commentController.update);
router.delete("/:id/eliminar", authRole.isEditor, commentController.destroy);

module.exports = router;
