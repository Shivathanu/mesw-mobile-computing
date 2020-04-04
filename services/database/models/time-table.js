/**
 * Time Table Model
 */
module.exports = function(sequelize, DataTypes) {
	var TimeTable = sequelize.define(
		"TimeTable",
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
			},
			description: {
				type: DataTypes.STRING(60),
				allowNull: false,
			},
			defined: {
				type: DataTypes.STRING(60),
				allowNull: false,
			},
			items: {
				type: DataTypes.STRING(80),
				allowNull: false,
			},
		},
		{
			freezeTableName: true,
			tableName: "time_table",
			timestamps: false,
		}
	);

	return TimeTable;
};
