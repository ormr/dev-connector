"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Navbar = void 0;
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var Navbar = function () {
    return (react_1.default.createElement("nav", { className: "navbar bg-dark" },
        react_1.default.createElement("h1", null,
            react_1.default.createElement(react_router_dom_1.Link, { to: "/" },
                react_1.default.createElement("i", { className: "fas fa-code" }),
                " DevConnector")),
        react_1.default.createElement("ul", null,
            react_1.default.createElement("li", null,
                react_1.default.createElement(react_router_dom_1.Link, { to: "!#" }, "Developers")),
            react_1.default.createElement("li", null,
                react_1.default.createElement(react_router_dom_1.Link, { to: "/register" }, "Register")),
            react_1.default.createElement("li", null,
                react_1.default.createElement(react_router_dom_1.Link, { to: "/login" }, "Login")))));
};
exports.Navbar = Navbar;
