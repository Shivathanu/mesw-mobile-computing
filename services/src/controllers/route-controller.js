var express = require("express");
var routeController = express.Router();
var routeService = require("../services/route-service");
var logger = require("../../config/log");
/**
 * Controller method to get details of a single route
 *
 * @param {Object} request
 * @param {Object} response
 */
var getOneRoute = function (request, response) {
	routeService.getOne(request, function (error, route) {
		if (error) {
			logger.error("Error occurred while fetching route information", {
				error: error,
				params: request.body,
			});
			response.status(500).send(error);
		}
		response.send(route);
	});
};

/**
 * Controller method to get the details of all tickets
 * 
 * @param {Object} request
 * @param {Object} response
 */
var getRoutes = function(request, response) {
    routeService.getList(request, function(error, list) {
        if (error) {
            logger.error('Error occurred while fetching the ticket list', {
                error: error,
                params: request.body
            });
            response.status(500).send(error);
        }
        response.send(list);
    });
};

routeController.get("/:id", getOneRoute);

routeController.get("/", getRoutes);

module.exports = routeController;
