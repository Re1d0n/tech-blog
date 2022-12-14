// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
// import our database connection from config.js
const sequelize = require('../config/db');

// Initialize Product model (table) by extending off Sequelize's Model class
class User extends Model {
    checkPassword(password) {
        return bcrypt.compareSync(password, this.password);
    }
}

// set up fields and rules for Product model
User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        hooks: {
            async beforeCreate(user) {
                user.password = await bcrypt.hash(user.password, 10)
                return user
            }
        },
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
    }
);

module.exports = User;