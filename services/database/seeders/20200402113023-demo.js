import creditCardData from "../fixtures/credit-card-data.json";
import ticketData from "../fixtures/ticket-data.json";
import timeTableData from "../fixtures/time-table-data.json";
import trainData from "../fixtures/train-data.json";
import routeData from "../fixtures/route-data";
import stationData from "../fixtures/station-data.json";
import usersData from "../fixtures/user-data.json";


export default {
	up: async queryInterface => {
		await queryInterface.bulkInsert("credit_card", creditCardData);
		await queryInterface.bulkInsert("route", routeData);
		await queryInterface.bulkInsert("station", stationData);
		await queryInterface.bulkInsert("time_table", timeTableData);
		await queryInterface.bulkInsert("ticket", ticketData);
		await queryInterface.bulkInsert("train", trainData);
		await queryInterface.bulkInsert("users", usersData);
	},

	down: async queryInterface => {
		await queryInterface.bulkDelete("credit_card", creditCardData);
		await queryInterface.bulkDelete("route", routeData);
		await queryInterface.bulkDelete("station", stationData);
		await queryInterface.bulkDelete("time_table", timeTableData);
		await queryInterface.bulkDelete("ticket", ticketData);
		await queryInterface.bulkDelete("train", trainData);
		await queryInterface.bulkDelete("users", usersData);
	}
};
