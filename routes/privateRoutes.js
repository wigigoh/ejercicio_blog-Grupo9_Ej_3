const express = require("express");
const router = express.Router();
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const pagesController = require("../controllers/pagesController");
const authController = require("../controllers/authController");
const isAdmin = require("../middlewares/isAdmin");
const isEditor = require("../middlewares/isEditor");
const isWriter = require("../middlewares/isWriter");
// Rutas relacionadas al panel de control (Admin):
// ...

router.get("/welcome", ensureAuthenticated, function (req, res) {
  return res.redirect("/");
});

router.get("/", ensureAuthenticated, pagesController.showAdmin);

router.get("/logOut", authController.logout);

router.get("/panel-usuarios", ensureAuthenticated, isAdmin, pagesController.show);
router.get("/panel-usuarios/:id/editar", ensureAuthenticated, isAdmin, pagesController.edit);
router.patch("/panel-usuarios/:id", ensureAuthenticated, isAdmin, pagesController.update);
router.delete(
  "/panel-usuarios/:id/eliminar",
  ensureAuthenticated,
  isAdmin,
  pagesController.destroy,
);

module.exports = router;
