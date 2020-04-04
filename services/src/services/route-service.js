var routeDao = require("../dao/route-dao");
var routeService = {};

/**
 * Service layer to call the Data Access Object (DAO) for database operations
 *
 * @param {Object} request
 * @param {Function} getOneCB
 */
routeService.getOne = function(request, getOneCB) {
	routeDao.getOne(request, function(error, result) {
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
routeService.getList = function (request, getListCB) {
	routeDao.getList(request, function (error, result) {
		if (error) {
			return getListCB(error);
		}
		return getListCB(null, result);
	});
};

module.exports = routeService;
