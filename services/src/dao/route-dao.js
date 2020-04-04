var models = require("../../database/models/index");
var routeDao = {};

/**
 * Data Access Object that performs the data fetch for one route in the system
 *
 * @param {Object} request
 * @param {Function} getOneCB
 */
routeDao.getOne = function (request, getOneCB) {
	models.Route.findOne({
		where: {
			id: request.params.id,
		},
	}).then(
		function (route) {
			return getOneCB(null, route);
		},
		function (error) {
			return getOneCB({
				error: error,
				message: error.parent,
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
routeDao.getList = function(request, getListCB) {
    models.Route.findAll({}).then(function(customers) {
        return getListCB(null, customers);
    }, function(error) {
        return getListCB({
            error: error,
            message: error.parent
        });
    });
};

module.exports = routeDao;
