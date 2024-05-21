'use strict';
const dbTransaction = require('../models/transaction/index')
const transaction = dbTransaction.payment;

exports.add = (req, res) => {
    const post = {
        order_id: req.body.order_id,
        amount: req.body.amount
    }

    transaction.create(post)
        .then(data => {
            res.status(200).json({
                data: data,
                status: 'success'
            }).catch((err) => {
                res.status(500).json({
                message: err
            })
        })
    })
}