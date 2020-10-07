// Loading environment variables
require("dotenv").config({ path: './config/.env' });

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const databaseConnection = require('./config/database');

// routes exports
const signUp = require("./core/router/signUp");

const app = express();
databaseConnection();

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', signUp);
module.exports = app;
