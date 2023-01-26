const Sequelize = require('sequelize');
const connection = new Sequelize('supermarket', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;