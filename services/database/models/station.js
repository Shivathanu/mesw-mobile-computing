/**
 * Station Model
 */
module.exports = function(sequelize, DataTypes) {
	var Station = sequelize.define(
		"Station",
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
			},
			shortName: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			freezeTableName: true,
			tableName: "station",
			timestamps: false,
		}
	);

	return Station;
};
