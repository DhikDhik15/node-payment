const express = require('express');
const app = express();
const dotenv = require('dotenv');
const bodyParser = require('body-parser')
dotenv.config();

const PORT = process.env.PORT;
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

const dbTransaction = require('./migrate/config/transactions');

require('./routes/transactions');
require('./routes/auth')(app);

app.listen(PORT, () => {
    console.log('server is running', PORT);
})