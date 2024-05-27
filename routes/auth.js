'use strict';

module.exports = function (app) {
    let auth = require('../controllers/auth');

    app.route('/auth/login').post(auth.login);
    app.route('/auth/verification').get(auth.verification);
}