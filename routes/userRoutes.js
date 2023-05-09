const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/registro", userController.create);
// router.post("/registro", userController.store);
// router.get("/login", userController.show);
// router.post("/login", userController.entrar);
// router.get("/logout", userController.salir);

module.exports = router;
