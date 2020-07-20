"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.alert = void 0;
var constants_1 = require("../actions/constants");
var initialState = [];
var alert = function (state, action) {
    if (state === void 0) { state = initialState; }
    var type = action.type, payload = action.payload;
    switch (type) {
        case constants_1.SET_ALERT:
            return __spread(state, [payload]);
        case constants_1.REMOVE_ALERT:
            return state.filter(function (alert) { return alert.id !== payload; });
        default:
            return state;
    }
};
exports.alert = alert;
