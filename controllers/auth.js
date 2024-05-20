'use strict';

const nodeRsa = require('node-rsa');

exports.login = (req, res) => {
    const fullname = 'adhika putra sutrawan';
    const base64Fullname = Buffer.from(fullname).toString('base64');
    const tokenAuthorization = `Bearer ${base64Fullname}`;
    const url = ' https://yourdomain.com/deposit'

    const config = {
        headers: {
            Authorization: tokenAuthorization
        },
        url: url
    }

    res.status(200).json({
        message: 'success',
        data: config
    })
}
