'use strict'; //all variable in code must be declare and executed

module.exports = function (app) {
    let transaction = require('../controllers/transactions');
    
    app.route('/transaction').post(transaction.add);
    app.route('/get-transaction').get(transaction.get);
    app.route('/update-transaction/:id').put(transaction.update);
}