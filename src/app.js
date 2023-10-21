const express = require('express');
const morgan = require('morgan');
const senorRouter = require('./routes/sensor.router');

const app = express();

app.set('PORT', process.env.PORT || 3000);
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

app.use('/', senorRouter)

module.exports = app;