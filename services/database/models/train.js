/**
 * Train Model
 */
module.exports = function(sequelize, DataTypes) {
	var Train = sequelize.define(
		"train",
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true
			},
			model: {
				type: DataTypes.STRING,
				allowNull: false
			},
			maxCapacity: {
				type: DataTypes.INTEGER,
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
			tableName: "train",
			timestamps: false
		}
	);

	return Train;
};
