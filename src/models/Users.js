const {Schema,model} = require("mongoose");
const {USER_ROLES, ALL_USER_ROLES} =  require("../roles.js");

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: USER_ROLES.User,
        enum: ALL_USER_ROLES
    },
    disabled: {
        type:Boolean
    }
},{timestamps:true});

const Users = model('Users', userSchema);

module.exports = {Users};