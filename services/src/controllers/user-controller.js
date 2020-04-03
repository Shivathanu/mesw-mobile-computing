var express = require("express");
var userController = express.Router();
var userService = require("../services/userService");
var logger = require("../../config/log");
/**
 * Controller method to get details of a single user
 *
 * @param {Object} request
 * @param {Object} response
 */
var getOneUser = function(request, response) {
	userService.getOne(request, function(error, user) {
		if (error) {
			logger.error("Error occurred while fetching user information", {
				error: error,
				params: request.body
			});
			response.json(500).send(error);
		}
		response.send(user);
	});
};

userController.get("/:id", requireSignIn, isAdmin, getOneUser);

module.exports = userController;
