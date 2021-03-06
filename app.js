const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Rotas...
const index = require('./routes/index');

app.use('/', index);

module.exports = app;
