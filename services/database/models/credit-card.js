/**
 * Credit Card Model
 */
module.exports = function(sequelize, DataTypes) {
	var CreditCard = sequelize.define(
		"credit_card",
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true
			},
			userId: {
				type: DataTypes.STRING(255),
            	allowNull: false
			},
			type: {
				type: DataTypes.STRING(60),
				allowNull: false
			},
			number: {
				type: DataTypes.STRING(60),
				allowNull: false
			},
			validity: {
				type: DataTypes.STRING(80),
				allowNull: false
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
			tableName: "credit_card",
			timestamps: false
		}
	);

	models.CreditCard.belongsTo(models.User, {
		as: 'userCreditCard',
		foreignKey: 'userId',
		foreignKeyConstraint: true,
	});

	return CreditCard;
};
