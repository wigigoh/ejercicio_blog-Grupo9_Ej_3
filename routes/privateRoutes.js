const express = require("express");
const router = express.Router();
const ensureAuthenticated = require("../middleware/ensureAuthenticated");
const authController = require("../controllers/authController");

// Rutas relacionadas al panel de control (Admin):
// ...

router.get("/welcome", ensureAuthenticated, function (req, res) {
  res.send(`Te damos la bienvenida, ${req.user.firstname}!!`);
});

module.exports = router;
