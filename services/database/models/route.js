/**
 * Route Model
 */
module.exports = function(sequelize, DataTypes) {
	var Route = sequelize.define(
		"route",
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true
			},
			ticketId: {
				type: DataTypes.STRING,
				allowNull: false
			},
			departureStation: {
				type: DataTypes.STRING,
				allowNull: false
			},
			departureTime: {
				type: DataTypes.STRING,
				allowNull: false
			},
			arrivalStation: {
				type: DataTypes.STRING(80),
				allowNull: false
			},
			arrivalTime: {
				type: DataTypes.STRING(255),
				allowNull: false
			},
			distanceKm: {
				type: DataTypes.STRING(9),
				allowNull: true
			},
			stopDurationMin: {
				type: DataTypes.DATE,
				allowNull: false,
				defaultValue: DataTypes.NOW
			},
			price: {
				type: DataTypes.STRING,
				allowNull: true
			},
			createdTime: {
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
			tableName: "route",
			timestamps: false
		}
	);

	return Route;
};
