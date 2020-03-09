const Sequelize = require("sequelize");
// const caching_sha2_password = require('mysql2/lib/auth_plugins/caching_sha2_password');

require('dotenv').config();

const sequelize = new Sequelize(process.env.MYSQL_DATABASE, process.env.MYSQL_USER, process.env.MYSQL_PASS, {
    // authPlugins: {
        // sha256_password: caching_sha2_password({})
    // },
    define: {
        timestamps: false
    },
    host: process.env.MYSQL_HOST,
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