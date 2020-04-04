"use strict";
module.exports = {
	up: function(queryInterface, Sequelize) {
		return queryInterface.createTable("ticket", {
			id: {
				type: Sequelize.INTEGER,
				autoIncrement: true,
				primaryKey: true,
				allowNull: false,
			},
			uuid: {
				type: Sequelize.STRING,
			},
			train: {
				type: Sequelize.STRING,
			},
			verified: {
				type: Sequelize.BOOLEAN,
			},
			create_time: {
				allowNull: false,
				defaultValue: new Date(),
				type: Sequelize.DATE,
			},
			update_time: {
				type: Sequelize.DATE,
			},
			delete_time: {
				type: Sequelize.DATE,
			},
		});
	},
	down: function(queryInterface, Sequelize) {
		return queryInterface.dropTable("ticket");
	}
};
