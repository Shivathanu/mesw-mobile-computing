var models = require("../models");

/**
 * User Model
 */
module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define(
		"User",
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
			},
			firstName: {
				type: DataTypes.STRING,
				allowNull: false,
				field: "first_name",
			},
			lastName: {
				type: DataTypes.STRING,
				allowNull: false,
				field: "last_name",
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				field: "email",
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
				field: "password",
			},
			phone: {
				type: DataTypes.STRING,
				allowNull: true,
				field: "phone",
			},
			creditCard: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: models.CreditCard,
					key: "id",
				},
				field: 'credit_card'
			},
		},
		{
			freezeTableName: true,
			tableName: "user",
			timestamps: false,
		}
	);

	return User;
};
