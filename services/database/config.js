const config = require("config");
const env = process.env.NODE_ENV || "development";

module.exports = {
	[env]: {
		logging: !!process.env.DEBUG,
		dialect: "mysql",
		migrationStorageTableName: "_migrations",
		url: config.get("database").cstring
	}
};
