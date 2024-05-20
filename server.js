const express = require('express');
const app = express();
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
dotenv.config();

const PORT = process.env.PORT;
app.use(express.json());

app.post('/api/login', (req, res) => {
    const user = {
        id: Date.now(),
        email: 'login@mail.com',
        password: '123456'
    }

    jwt.sign({ user }, 'adhikaPutraSutrawan', (err, token) => {
        res.json({
            token
        })
    })
})

app.get('/api/user', verifyToken, (req, res) => {
    jwt.verify(req.token, 'adhikaPutraSutrawan', (err, authData) => {
        if (err) {
            res.sendStatus(403);
        } else {
            res.json({
                message: 'welcome',
                userData:authData
            })
        }
    })
})

function verifyToken(req, res, next) {
    const bearer = req.headers['authorization'];
    if (typeof bearer !== 'undefined') {
        const dataBearer = bearer.split(' ');
        const bearerToken = dataBearer[1];
        req.token = bearerToken;
        next();
    } else {
        res.sendStatus(403);
    }
}
app.listen(PORT, () => {
    console.log('server is running', PORT);
})