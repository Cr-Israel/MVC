const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nodemvc2', 'root', 'mesquita', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;