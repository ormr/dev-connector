"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setAuthToken = void 0;
var api_1 = require("./api");
var setAuthToken = function (token) {
    if (token) {
        api_1.api.defaults.headers.common['x-auth-token'] = token;
        localStorage.setItem('token', token);
    }
    else {
        delete api_1.api.defaults.headers.common['x-auth-token'];
        localStorage.removeItem('token');
    }
};
exports.setAuthToken = setAuthToken;
