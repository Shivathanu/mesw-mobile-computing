/**
 * Ticket Model
 */
module.exports = function(sequelize, DataTypes) {
	var Ticket = sequelize.define(
		"Ticket",
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
			},
			uuid: {
				type: DataTypes.UUIDV4,
				allowNull: false,
			},
			train: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			verified: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
			},
		},
		{
			freezeTableName: true,
			tableName: "ticket",
			timestamps: false,
		}
	);

	return Ticket;
};
