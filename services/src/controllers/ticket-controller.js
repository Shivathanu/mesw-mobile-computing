var express = require("express");
var ticketController = express.Router();
var ticketService = require("../services/ticket-service");
var logger = require("../../config/log");
/**
 * Controller method to get details of a single ticket
 *
 * @param {Object} request
 * @param {Object} response
 */
var getOneticket = function(request, response) {
	ticketService.getOne(request, function(error, ticket) {
		if (error) {
			logger.error("Error occurred while fetching ticket information", {
				error: error,
				params: request.body
			});
			response.status(500).send(error);
		}
		response.send(ticket);
	});
};

/**
 * Controller method to get the details of all tickets
 * 
 * @param {Object} request
 * @param {Object} response
 */
var getTickets = function(request, response) {
    ticketService.getList(request, function(error, list) {
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

ticketController.get("/:id", getOneticket);

ticketController.get("/", getTickets);

module.exports = ticketController;
