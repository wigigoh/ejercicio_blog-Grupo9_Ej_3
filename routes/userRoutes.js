const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/registro", userController.create);
router.post("/registro", userController.store);

module.exports = router;
