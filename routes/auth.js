'use strict';

module.exports = function (app) {
    var auth = require('../controllers/auth');

    app.route('/auth/login').post(auth.login);
}