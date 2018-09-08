const feathers = require('@feathersjs/feathers');
const configuration = require('@feathersjs/configuration');
const express = require('@feathersjs/express');
const config = require('./config')
const Logger = require('./logger')

const { PORT, HOSTNAME } = config

const app = express(feathers());

const conf = configuration();

app.configure(conf);

app.configure(express.rest());

app.use(express.errorHandler({ logger: Logger }));

app.get('/', function (req, res, next) {
  res.send('Helloooo')
})

module.exports = app