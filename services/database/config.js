const env = process.env.NODE_ENV || "development";

module.exports = {
	[env]: {
		database: "mobile_railway_reservation_db",
		username: "mobile_railway_user",
		password: "mobile_railway_password",
		host: "34.70.174.112",
		dialect: "mysql",
		logging: !!process.env.DEBUG,
		migrationStorageTableName: "_migrations",
		pool: {
			max: 10,
			min: 1,
			acquire: 30000,
			idle: 10000,
		},
	},
};
