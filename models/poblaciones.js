const Sequelize = require('sequelize');
const sequelize = require('./db');

const Poblacion = sequelize.define('poblacion', {
    id: Sequelize.INTEGER,
    nombre: Sequelize.STRING,
    codigo: Sequelize.INTEGER,
    habitantes: Sequelize.INTEGER
});

module.exports = Poblacion;