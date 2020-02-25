module.exports = {
  "development": {
    "username": process.env.MYSQL_USER,
    "password": process.env.MYSQL_PASS,
    "database": process.env.MYSQL_DATABASE,
    "host": process.env.MYSQL_HOST,
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "production": {
    "use_env_variable" : "JAWSDB_URL",
    "dialect": "mysql"
  }
}