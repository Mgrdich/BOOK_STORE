/**
 * @type {{
 *     MONGODB_URI:String,
 *     SECRET_KEY:String,
 *     USER_1_NAME:String,
 *     USER_1_PASSWORD:String,
 *     USER_1_PASSWORD:String,
 *     USER_TEST_DEFAULT_NAME:String,
 *     USER_TEST_DEFAULT_PASSWORD:String
 * }}
 * */
// TODO this from the node application do it without After better key management app
// bear in mind node have to be started for this for the process to be evaluated.
JEST_CONSTANTS = {
    MONGODB_URI: `mongodb://localhost:${process.env.MONGODB_PORT}`,
    USER_1_NAME: process.env.USER_1_NAME,
    USER_1_PASSWORD: process.env.USER_1_PASSWORD,
    CLIENT_URL: process.env.CLIENT_URL,
    SECRET_KEY: process.env.SECRET_KEY,
    USER_TEST_DEFAULT_NAME: process.env.USER_TEST_DEFAULT_NAME,
    USER_TEST_DEFAULT_PASSWORD: process.env.USER_TEST_DEFAULT_PASSWORD
};

module.exports = JEST_CONSTANTS;