"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = void 0;
var axios_1 = __importDefault(require("axios"));
var api = axios_1.default.create({
    baseURL: 'http://localhost:5000/api',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:3000'
    }
});
exports.api = api;
/**
 intercept any error responses from the api
 and check if the token is no longer valid.
 ie. Token has expired
 logout the user if the token has expired
**/
api.interceptors.response.use(function (res) { return res; }, function (err) {
    if (err.response.data.msg === 'Token is not valid') {
        // store.dispatch({ type: LOGOUT });
        console.log(err);
    }
    return Promise.reject(err);
});
