const express = require("express");
const router = express.Router();
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const pagesController = require("../controllers/pagesController");
const authController = require("../controllers/authController");
const authRole = require("../middlewares/authRole");

// Rutas relacionadas al panel de control (Admin):
// ...

router.get("/welcome", ensureAuthenticated, function (req, res) {
  console.log(req.user.firstname);
  return res.redirect("/");
});

router.get("/", ensureAuthenticated, pagesController.showAdmin);

router.get("/logOut", authController.logout);

router.get("/panel-usuarios", ensureAuthenticated, authRole.isAdmin, pagesController.show);
router.get(
  "/panel-usuarios/:id/editar",
  ensureAuthenticated,
  authRole.isAdmin,
  pagesController.edit,
);
router.patch("/panel-usuarios/:id", ensureAuthenticated, authRole.isAdmin, pagesController.update);
router.delete(
  "/panel-usuarios/:id/eliminar",
  ensureAuthenticated,
  authRole.isAdmin,
  pagesController.destroy,
);

module.exports = router;
