var models = require("../models/index");
var userDao = {};

/**
 * Data Access Object that performs the data fetch for one user in the system
 *
 * @param {Object} request
 * @param {Function} getOneCB
 */
userDao.getOne = function(request, getOneCB) {
	models.User.findOne({
		where: {
			userId: request.params.id
		}
	}).then(
		function(user) {
			return getOneCB(null, user);
		},
		function(error) {
			return getOneCB({
				error: error,
				message: error.parent
			});
		}
	);
};

module.exports = userDao;
