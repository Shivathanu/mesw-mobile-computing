"use strict";
module.exports = {
	up: function(queryInterface, Sequelize) {
		return queryInterface.createTable("credit_card", {
			id: {
				type: Sequelize.INTEGER,
				autoIncrement: true,
				primaryKey: true,
				allowNull: false
			},
			type: {
				type: Sequelize.STRING
			},
			number: {
				type: Sequelize.STRING
			},
			validity: {
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
		return queryInterface.dropTable("credit_card");
	}
};
