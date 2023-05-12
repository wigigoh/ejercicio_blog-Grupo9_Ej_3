const express = require("express");
const router = express.Router();
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const pagesController = require("../controllers/pagesController");

// Rutas relacionadas al panel de control (Admin):
// ...

router.get("/welcome", ensureAuthenticated, function (req, res) {
  console.log(req.user.firstname);
  res.send(`Te damos la bienvenida, ${req.user.authorFirstname}!!`);
});

router.get("/", ensureAuthenticated, pagesController.showAdmin);

module.exports = router;
