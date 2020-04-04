var models = require("../../database/models/index");
var userDao = {};

/**
 * Data Access Object that performs the data fetch for one user in the system
 *
 * @param {Object} request
 * @param {Function} getOneCB
 */
userDao.getOne = function (request, getOneCB) {
	console.log('request: ', request.params.id);
	models.User.findOne({
		where: {
			id: request.params.id
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

/**
 * Data Access Object that performs the data fetch for customer list
 * 
 * @param {Object} request
 * @param {Function} getListCB
 */
userDao.getList = function(request, getListCB) {
    models.User.findAll({}).then(function(customers) {
        return getListCB(null, customers);
    }, function(error) {
        return getListCB({
            error: error,
            message: error.parent
        });
    });
};

module.exports = userDao;
