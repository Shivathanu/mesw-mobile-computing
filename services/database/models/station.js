/**
 * Station Model
 */
module.exports = function(sequelize, DataTypes) {
	var Station = sequelize.define(
		"station",
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true
			},
			shortName: {
				type: DataTypes.STRING,
				allowNull: false
			},
			name: {
				type: DataTypes.STRING,
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
			tableName: "station",
			timestamps: false
		}
	);

	return Station;
};
