const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

// routes exports
const signUp = require("./core/router/signUp");

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


module.exports = app;
