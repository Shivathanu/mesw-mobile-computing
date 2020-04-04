var express = require("express");
var userController = express.Router();
var userService = require("../services/user-service");
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
			console.log("error: ", error);
			logger.error("Error occurred while fetching user information", {
				error: error,
				params: request.body
			});
			response.status(500).send(error);
		}
		response.send(user);
	});
};

/**
 * Controller method to get the details of all users
 * 
 * @param {Object} request
 * @param {Object} response
 */
var getUsers = function(request, response) {
    userService.getList(request, function(error, list) {
        if (error) {
            logger.error('Error occurred while fetching the user list', {
                error: error,
                params: request.body
            });
            response.status(500).send(error);
        }
        response.send(list);
    });
};

userController.get("/:id", getOneUser);

userController.get("/", getUsers);

module.exports = userController;
