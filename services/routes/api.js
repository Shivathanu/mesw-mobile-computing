var express = require("express");
var router = express.Router();

// Controller imports
var userController = require("../src/controllers/userController");

router.use("/users", userController);

module.exports = router;
