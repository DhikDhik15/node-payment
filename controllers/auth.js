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

exports.verification = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const fullname = 'adhika putra sutrawan';

    if (!authHeader) {
        res.setHeader('adhika putra sutrawan', 'Basic');
        return res.status(401).json({ message: 'Unauthorized' })
    }

    const credentials = Buffer.from(authHeader, 'base64').toString('ascii');

    if (credentials == fullname) {
        return res.status(200).json({ message: 'authorization', fullname})
    } else {
        return res.status(401).json({ message: 'Unauthorized' });
    }
}