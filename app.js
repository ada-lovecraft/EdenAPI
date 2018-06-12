const express = require('express');
const LOG = require('morgan');
const BP = require('body-parser')
const APP = express();
const UTIL = require('./util');

const routes = [];
routes[0] = {name : '/entities', ref : require("./API/routes/entities") };
routes[1] = {name : '/mocks', ref : require("./API/routes/mocks") };

APP.use(LOG('dev')); // Every request passes throught Logging
APP.use(BP.json()); // POST requests pass through Parsing
APP.use(UTIL.cors_handler); // Manage CORS errors

// Handle the request in one of the defined routes
routes.forEach(r=> {
    APP.use(r.name, r.ref);
})

APP.use(UTIL.error_404_handler); // Handle 404 errors when route isn't valide
APP.use(UTIL.error_handler) // Handle other thrown errors

module.exports = APP;