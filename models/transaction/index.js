'use strict';
const dbConfig = require('../../config/sequelize/payment');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD,{ //set configure connection
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorAliases: false,

    pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
    }
});

// import configure sequelize
const db = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// send params from configure to model
db.payment = require('../transaction/transaction')(sequelize, Sequelize);

module.exports = db;

