'use strict';
const dbTransaction = require('../models/transaction/index')
const transaction = dbTransaction.payment;

// CREATE
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

// GET
exports.get = (req, res) => {
    transaction.findAll({
        attributes: [
            'order_id','amount'
        ]
    }).then((data) => {
        res.status(200).send({
            data: data,
            message: 'Data payments'
        })
    });
}

// UPDATE
exports.update = async (req, res) => {
    const put = {
        id: req.params.id,
        order_id: req.body.order_id,
        amount: req.body.amount
    }
    
    transaction.update({
        order_id: put.order_id,
        amount: put.amount
    }, {
        where: {
            id: put.id
        }
    }).then((data) => {
        res.status(200).json({
            status: 'success'
        })
    }).catch((err) => {
        res.status(500).json({
        message: err
    })
    })
}