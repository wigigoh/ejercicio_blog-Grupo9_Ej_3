const express = require("express");
const router = express.Router();
const pageController = require("../controllers/pagesController");

router.get("/admin", pageController.showAdmin);

module.exports = router;
