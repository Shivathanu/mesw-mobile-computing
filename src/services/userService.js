var userDao = require("../dao/userDao");
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

module.exports = userService;
