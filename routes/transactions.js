'use strict';

module.exports = function (app) {
    var transaction = require('../controllers/transactions');
    app.route('/transaction').post(transaction.add);
    app.route('/get-transaction').get(transaction.get);
    app.route('/update-transaction/:id').put(transaction.update);
}