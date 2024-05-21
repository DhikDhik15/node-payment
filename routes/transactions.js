'use strict';

module.exports = function (app) {
    var transaction = require('../controllers/transactions');
    app.route('/transaction').post(transaction.add);
}