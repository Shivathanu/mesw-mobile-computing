"use strict";
module.exports = {
	up: function(queryInterface, Sequelize) {
		return queryInterface.createTable("user", {
			id: {
				type: Sequelize.INTEGER,
				autoIncrement: true,
				primaryKey: true,
				allowNull: false
			},
			first_name: {
				type: Sequelize.STRING,
				allowNull: false
			},
			last_name: {
				type: Sequelize.STRING
			},
			email: {
				type: Sequelize.STRING
			},
			password: {
				type: Sequelize.STRING
			},
			phone: {
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
		return queryInterface.dropTable("user");
	}
};
