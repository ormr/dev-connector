"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Landing = void 0;
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var Landing = function () {
    return (react_1.default.createElement("section", { className: "landing" },
        react_1.default.createElement("div", { className: "dark-overlay" },
            react_1.default.createElement("div", { className: "landing-inner" },
                react_1.default.createElement("h1", { className: "x-large" }, "Developer Connector"),
                react_1.default.createElement("p", { className: "lead" }, "Create a developer profile/portfolio, share posts and get help from other developers"),
                react_1.default.createElement("div", { className: "buttons" },
                    react_1.default.createElement(react_router_dom_1.Link, { to: "/register", className: "btn btn-primary" }, "Sign Up"),
                    react_1.default.createElement(react_router_dom_1.Link, { to: "/login", className: "btn btn-light" }, "Login"))))));
};
exports.Landing = Landing;
