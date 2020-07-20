"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootReducer = void 0;
var redux_1 = require("redux");
var alert_1 = require("./alert");
var auth_1 = require("./auth");
var rootReducer = redux_1.combineReducers({
    alert: alert_1.alert,
    auth: auth_1.auth
});
exports.rootReducer = rootReducer;
