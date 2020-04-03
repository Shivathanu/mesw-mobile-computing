"use strict";
module.exports = {
	up: function(queryInterface, Sequelize) {
		return queryInterface.createTable("time_table", {
			id: {
				type: Sequelize.INTEGER,
				autoIncrement: true,
				primaryKey: true,
				allowNull: false
			},
			description: {
				type: Sequelize.STRING,
				field: "description"
			},
			defined: {
				type: Sequelize.STRING,
				field: "defined"
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
		return queryInterface.dropTable("time_table");
	}
};
