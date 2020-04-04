var models = require("../../database/models/index");
var ticketDao = {};

/**
 * Data Access Object that performs the data fetch for one ticket in the system
 *
 * @param {Object} request
 * @param {Function} getOneCB
 */
ticketDao.getOne = function (request, getOneCB) {
	models.Ticket.findOne({
		where: {
			id: request.params.id,
		},
	}).then(
		function (ticket) {
			return getOneCB(null, ticket);
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
ticketDao.getList = function(request, getListCB) {
    models.Ticket.findAll({}).then(function(customers) {
        return getListCB(null, customers);
    }, function(error) {
        return getListCB({
            error: error,
            message: error.parent
        });
    });
};

module.exports = ticketDao;
