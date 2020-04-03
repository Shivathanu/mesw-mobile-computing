"use strict";
module.exports = {
	up: function(queryInterface, Sequelize) {
		return queryInterface.createTable("route", {
			id: {
				type: Sequelize.INTEGER,
				autoIncrement: true,
				primaryKey: true,
				allowNull: false
			},
			departure_station: {
				type: Sequelize.STRING
			},
			departure_time: {
				type: Sequelize.STRING
			},
			arrival_station: {
				type: Sequelize.STRING
			},
			arrival_time: {
				type: Sequelize.STRING
			},
			distance: {
				type: Sequelize.STRING
			},
			stop_duration: {
				type: Sequelize.INTEGER
            },
			price: {
				type: Sequelize.STRING
			},
			create_time: {
				allowNull: false,
				defaultValue: new Date(),
				type: Sequelize.DATE
			},
			update_time: {
				type: Sequelize.DATE
			},
			delete_time: {
				type: Sequelize.DATE
			}
		});
	},
	down: function(queryInterface, Sequelize) {
		return queryInterface.dropTable("route");
	}
};
