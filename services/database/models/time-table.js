/**
 * Time Table Model
 */
module.exports = function(sequelize, DataTypes) {
	var TimeTable = sequelize.define(
		"time_table",
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true
			},
			description: {
				type: DataTypes.STRING(60),
				allowNull: false
			},
			defined: {
				type: DataTypes.STRING(60),
				allowNull: false
			},
			items: {
				type: DataTypes.STRING(80),
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
			tableName: "time_table",
			timestamps: false
		}
	);

	return TimeTable;
};
