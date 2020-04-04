var fs = require("fs");
var path = require("path");
var lodash = require("lodash");
var Sequelize = require("sequelize");
var basename = path.basename(__filename);
var config = require("../config")[process.env.NODE_ENV || "development"];
var db = {};

var sequelize = new Sequelize(
	config.database,
	config.username,
	config.password,
	{
		host: config.host,
		dialect: config.dialect,
		logging: lodash.has(config, "logging") ? config.logging : console.log,
		pool: config.pool,
	}
);

// Override timezone formatting for MSSQL
// Known issue with Sequelize: https://github.com/sequelize/sequelize/issues/7879
Sequelize.DATE.prototype._stringify = function _stringify(date, options) {
	return this._applyTimezone(date, options).format("YYYY-MM-DD HH:mm:ss.SSS");
};

fs.readdirSync(__dirname)
	.filter(function (file) {
		return (
			file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
		);
	})
	.forEach(function (file) {
		var model = sequelize["import"](path.join(__dirname, file));
		db[model.name] = model;
	});

Object.keys(db).forEach(function (modelName) {
	if (db[modelName].associate) {
		db[modelName].associate(db);
	}
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
