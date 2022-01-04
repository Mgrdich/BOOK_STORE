require('dotenv').config();

/**
 * @type {{
 *     MONGODB_URI:String,
 *     USER_1_NAME:String,
 *     USER_1_PASSWORD:String,
 *     CLIENT_URL:String
 * }}
 * */

// TODO this from the node application do it without
// bear in mind node have to be started for this for the process to be evaluated.
JEST_CONSTANTS = {
    MONGODB_URI: `mongodb://localhost:${process.env.MONGODB_PORT}`,
    USER_1_NAME : process.env.USER_1_NAME,
    USER_1_PASSWORD: process.env.USER_1_PASSWORD,
    CLIENT_URL: process.env.CLIENT_URL
};

module.exports = JEST_CONSTANTS;