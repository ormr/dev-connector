"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
var constants_1 = require("../actions/constants");
var initialState = {
    token: localStorage.getItem('token'),
    isAuthenicated: null,
    loading: true,
    user: null
};
exports.auth = function (state, action) {
    if (state === void 0) { state = initialState; }
    var type = action.type, payload = action.payload;
    switch (type) {
        case constants_1.REGISTER_SUCCESS:
            localStorage.setItem('token', payload.token);
            return __assign(__assign(__assign({}, state), payload), { isAuthenicated: true, loading: false });
        case constants_1.REGISTER_FAIL:
            localStorage.removeItem('token');
            return __assign(__assign({}, state), { token: null, isAuthenicated: false, loading: false });
        default:
            return state;
    }
};
