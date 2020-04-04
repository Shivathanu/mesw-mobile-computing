var express = require("express");
var router = express.Router();

// Controller imports
var userController = require("../src/controllers/user-controller");
var routeController = require("../src/controllers/route-controller");
var ticketController = require("../src/controllers/ticket-controller");

router.use("/user", userController);
router.use("/route", routeController);
router.use("/ticket", ticketController);

module.exports = router;
