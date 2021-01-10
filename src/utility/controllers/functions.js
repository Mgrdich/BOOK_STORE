const modelUtil = require("../model");
const {MESSAGES,messageAlert} = require("../constants");
const {errorValidation,errorThrower,errorCatcher} = require("./errors");
const {Fn} = require("../functions");
const  {alert,noResult} = require("./messages");

let getCtrlFn = {};

getCtrlFn.Delete = function (myModel) {
    if(modelUtil.isModel(myModel)) {
        console.error("Model not defined");
        return Fn.noop;
    }
    return async function (req,res,next) {
        try {
            errorValidation(req);
            const p = await Model.disableById(req.params.id);

            if (Fn.isEmpty(p)) {
                errorThrower(MESSAGES.NO_SUCH_DATA_EXISTS, 422);
            }
            return alert(res, 200, messageAlert.success, MESSAGES.ITEM_DELETED);

        } catch (err) {
            errorCatcher(next, err);
        }
    }
}

getCtrlFn.getAll = function (myModel) {
    if(modelUtil.isModel(myModel)) {
        console.error("Model not defined");
        return Fn.noop;
    }
    return async function (req,res,next) {
        let books = await Model.getAll();
        if (books.length) {
            return res.status(200).json(books);
        }
        noResult(res);
    }
}

getCtrlFn.getId = function (myModel) {
    if(modelUtil.isModel(myModel)) {
        console.error("Model not defined");
        return Fn.noop;
    }
    return async function (req,res,next) {
        try {
            errorValidation(req);
            const book = await Model.getById(req.params.id);
            if (book) {
                return res.status(200).json(book);
            }
            noResult(res);
        } catch (err) {
            errorCatcher(next, err);
        }
    }
}

module.exports = {getCtrlFn};