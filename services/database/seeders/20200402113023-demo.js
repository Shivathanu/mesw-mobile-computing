const creditCardData = require("../fixtures/credit-card-data.json");
const ticketData = require("../fixtures/ticket-data.json");
const timeTableData = require("../fixtures/time-table-data.json");
const trainData = require("../fixtures/train-data.json");
const routeData = require("../fixtures/route-data");
const stationData = require("../fixtures/station-data.json");
const usersData = require("../fixtures/users-data.json");


module.exports = {
	up: async queryInterface => {
		await queryInterface.bulkInsert("credit_card", creditCardData);
		await queryInterface.bulkInsert("route", routeData);
		await queryInterface.bulkInsert("station", stationData);
		await queryInterface.bulkInsert("time_table", timeTableData);
		await queryInterface.bulkInsert("ticket", ticketData);
		await queryInterface.bulkInsert("train", trainData);
		await queryInterface.bulkInsert("user", usersData);
	},

	down: async queryInterface => {
		await queryInterface.bulkDelete("credit_card", creditCardData);
		await queryInterface.bulkDelete("route", routeData);
		await queryInterface.bulkDelete("station", stationData);
		await queryInterface.bulkDelete("time_table", timeTableData);
		await queryInterface.bulkDelete("ticket", ticketData);
		await queryInterface.bulkDelete("train", trainData);
		await queryInterface.bulkDelete("user", usersData);
	}
};
