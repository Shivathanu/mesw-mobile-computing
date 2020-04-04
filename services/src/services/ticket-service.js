var ticketDao = require("../dao/ticket-dao");
var ticketService = {};

/**
 * Service layer to call the Data Access Object (DAO) for database operations
 *
 * @param {Object} request
 * @param {Function} getOneCB
 */
ticketService.getOne = function(request, getOneCB) {
	ticketDao.getOne(request, function(error, result) {
		if (error) {
			return getOneCB(error);
		}
		return getOneCB(null, result);
	});
};

/**
 * Service layer to call the Data Access Object (DAO) for database operations
 * 
 * @param {Object} request
 * @param {Function} getListCB
 */
ticketService.getList = function (request, getListCB) {
	ticketDao.getList(request, function (error, result) {
		if (error) {
			return getListCB(error);
		}
		return getListCB(null, result);
	});
};

module.exports = ticketService;
