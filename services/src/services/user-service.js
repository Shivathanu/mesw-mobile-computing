var userDao = require("../dao/user-dao");
var userService = {};

/**
 * Service layer to call the Data Access Object (DAO) for database operations
 *
 * @param {Object} request
 * @param {Function} getOneCB
 */
userService.getOne = function(request, getOneCB) {
	userDao.getOne(request, function(error, result) {
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
userService.getList = function (request, getListCB) {
	userDao.getList(request, function (error, result) {
		if (error) {
			return getListCB(error);
		}
		return getListCB(null, result);
	});
};

module.exports = userService;
