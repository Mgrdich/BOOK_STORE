// GLOBAL SETUP FOR JEST

// this environment is crucial here
require('dotenv').config();

const mongoose = require('mongoose');

const {MONGODB_URI, MONGOOSE_OPTIONS} = require("../src/config/keys");

mongoose.connect(MONGODB_URI, MONGOOSE_OPTIONS).then(function () {})
    .catch(function (err) {
    console.log(err);
});