var fs = require("fs");
var path = require("path");
var lodash = require("lodash");
var Sequelize = require("sequelize");
var basename = path.basename(__filename);
var dbConfig = require("../config/datasources");
var db = {};

const sequelize = new Sequelize(
	dbConfig.database,
	dbConfig.username,
	dbConfig.password,
	{
		host: dbConfig.host,
		dialect: dbConfig.dialect,
		operatorsAliases: false,
		logging: lodash.has(dbConfig, "logging") ? dbConfig.logging : console.log,
		pool: {
			max: dbConfig.pool.max,
			min: dbConfig.pool.min,
			acquire: dbConfig.pool.acquire,
			idle: dbConfig.pool.idle
		}
	}
);

fs.readdirSync(__dirname)
	.filter(function(file) {
		return (
			file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
		);
	})
	.forEach(function(file) {
		var model = sequelize["import"](path.join(__dirname, file));
		db[model.name] = model;
	});

Object.keys(db).forEach(function(modelName) {
	if (db[modelName].associate) {
		db[modelName].associate(db);
	}
});

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;
