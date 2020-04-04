/**
 * Route Model
 */
module.exports = function(sequelize, DataTypes) {
	var Route = sequelize.define(
		"Route",
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
			},
			departureStation: {
				type: DataTypes.STRING,
				allowNull: false,
				field: "departure_station",
			},
			departureTime: {
				type: DataTypes.STRING,
				allowNull: false,
				field: "departure_time",
			},
			arrivalStation: {
				type: DataTypes.STRING(80),
				allowNull: false,
				field: "arrival_station",
			},
			arrivalTime: {
				type: DataTypes.STRING(255),
				allowNull: false,
				field: "arrival_time",
			},
			distanceKm: {
				type: DataTypes.STRING(9),
				allowNull: true,
				field: "distance",
			},
			stopDurationMin: {
				type: DataTypes.DATE,
				allowNull: false,
				defaultValue: DataTypes.NOW,
				field: "stop_duration_min",
			},
			price: {
				type: DataTypes.STRING,
				allowNull: true,
				field: "price",
			},
		},
		{
			freezeTableName: true,
			tableName: "route",
			timestamps: false,
		}
	);

	return Route;
};
