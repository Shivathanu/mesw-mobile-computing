/**
 * User Model
 */
module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define(
		"users",
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true
			},
			firstname: {
				type: DataTypes.STRING(60),
				allowNull: false
			},
			lastname: {
				type: DataTypes.STRING(60),
				allowNull: false
			},
			email: {
				type: DataTypes.STRING(80),
				allowNull: false
			},
			password: {
				type: DataTypes.STRING(255),
				allowNull: false
			},
			phone: {
				type: DataTypes.STRING(9),
				allowNull: true
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
			tableName: "users",
			timestamps: false
		}
	);

	models.User.hasMany(models.Ticket, {
		foreignKey: "user_id",
		as: "userId"
	});

	models.User.hasMany(models.CreditCard, {
		foreignKey: "userId",
		as: "userId"
	});

	return User;
};
