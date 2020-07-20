"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var react_1 = __importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
var Navbar_1 = require("./components/layout/Navbar");
var Landing_1 = require("./components/layout/Landing");
var Register_1 = require("./components/auth/Register");
var Login_1 = require("./components/auth/Login");
var Alert_1 = require("./components/layout/Alert");
require("./App.css");
// Redux
var react_redux_1 = require("react-redux");
var store_1 = require("./store");
var App = function () {
    return (react_1.default.createElement(react_redux_1.Provider, { store: store_1.store },
        react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
            react_1.default.createElement(react_1.Fragment, null,
                react_1.default.createElement(Navbar_1.Navbar, null),
                react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/", component: Landing_1.Landing }),
                react_1.default.createElement("section", { className: "container" },
                    react_1.default.createElement(Alert_1.Alert, null),
                    react_1.default.createElement(react_router_dom_1.Switch, null,
                        react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/register", component: Register_1.Register }),
                        react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/login", component: Login_1.Login })))))));
};
exports.App = App;
