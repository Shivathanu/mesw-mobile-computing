/**
 * Ticket Model
 */
module.exports = function(sequelize, DataTypes) {
	var Ticket = sequelize.define(
		"ticket",
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true
			},
			uuid: {
				type: DataTypes.UUIDV4,
				allowNull: false
			},
			createTime: {
				type: DataTypes.DATE,
				allowNull: false,
				defaultValue: DataTypes.NOW
			},
			updateTime: {
				type: DataTypes.DATE,
				allowNull: true
			},
			deleteTime: {
				type: DataTypes.DATE,
				allowNull: true
			}
		},
		{
			freezeTableName: true,
			tableName: "users",
			timestamps: false
		}
	);

	return Ticket;
};
