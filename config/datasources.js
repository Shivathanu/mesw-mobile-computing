module.exports = {
	database: "mobile_railway_reservation_db",
	username: "mobile_railway_user",
	password: "mobile_railway_password",
	host: "34.70.174.112",
	dialect: "mysql",
	logging: false,
	pool: {
		max: 10,
		min: 1,
		acquire: 30000,
		idle: 10000
	}
};
