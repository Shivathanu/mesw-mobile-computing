/**
 * User Model
 */
module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define(
		"User",
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true
			},
			name: {
				type: DataTypes.STRING(60),
				allowNull: false
			},
			password: {
				type: DataTypes.STRING(255),
				allowNull: false
			},
			address: {
				type: DataTypes.INTEGER
			},
			dateOfBirth: {
				type: DataTypes.DATE
			},
			nationality: {
				type: DataTypes.STRING
			},
			email: {
				type: DataTypes.STRING(80),
				allowNull: false
			},
			phoneNumber: {
				type: DataTypes.STRING(15),
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
			}
		},
		{
			freezeTableName: true,
			tableName: "User",
			timestamps: false
		}
	);

	return User;
};
