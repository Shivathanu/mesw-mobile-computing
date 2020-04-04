var models = require('../models');

/**
 * Credit Card Model
 */
module.exports = function(sequelize, DataTypes) {
	var CreditCard = sequelize.define(
		"CreditCard",
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
			},
			type: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			number: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			validity: {
				type: DataTypes.STRING,
				allowNull: false,
			}
		},
		{
			freezeTableName: true,
			tableName: "credit_card",
			timestamps: false,
		}
	);

	return CreditCard;
};
