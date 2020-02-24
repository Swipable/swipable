const Sequelize = require("sequelize");

const sequelize = new Sequelize('swipable_db', 'root', 'DebbieDoo', {
    host: "localhost",
    port: 3306,
    dialect: 'mysql',
    pool: {
        max: 5,
        min:0,
        acquire: 30000,
        idle: 10000 //in milliseconds
    },
    operatorAliases: false
});

module.exports = sequelize;