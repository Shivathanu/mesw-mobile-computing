"use strict";
module.exports = {
	up: function(queryInterface, Sequelize) {
		return queryInterface.createTable("train", {
			id: {
				type: Sequelize.INTEGER,
				autoIncrement: true,
				primaryKey: true,
				allowNull: false
			},
			model: {
				type: Sequelize.STRING,
				allowNull: false
			},
			max_capacity: {
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
		return queryInterface.dropTable("train");
	}
};
