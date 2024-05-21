'use strict';
var dotenv = require('dotenv');
dotenv.config();

module.exports = {
    HOST: process.env.HOST_TRANSACTION,
    USER: process.env.USER_TRANSACTION,
    PASSWORD: process.env.PASSWORD_TRANSACTION,
    DB: process.env.DB_TRANSACTION,
    dialect: "mysql",
    pool:{
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
    }
}

