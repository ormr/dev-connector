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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmF2YmFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vY2xpZW50L3NyYy9jb21wb25lbnRzL2xheW91dC9OYXZiYXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGdEQUEwQjtBQUMxQixxREFBdUM7QUFDdkMsSUFBTSxNQUFNLEdBQWE7SUFDdkIsT0FBTyxDQUNMLHVDQUFLLFNBQVMsRUFBQyxnQkFBZ0I7UUFDN0I7WUFDRSw4QkFBQyx1QkFBSSxJQUFDLEVBQUUsRUFBQyxHQUFHO2dCQUFDLHFDQUFHLFNBQVMsRUFBQyxhQUFhLEdBQUs7Z0NBQW9CLENBQzdEO1FBQ0w7WUFDRTtnQkFBSSw4QkFBQyx1QkFBSSxJQUFDLEVBQUUsRUFBQyxJQUFJLGlCQUFrQixDQUFLO1lBQ3hDO2dCQUFJLDhCQUFDLHVCQUFJLElBQUMsRUFBRSxFQUFDLFdBQVcsZUFBZ0IsQ0FBSztZQUM3QztnQkFBSSw4QkFBQyx1QkFBSSxJQUFDLEVBQUUsRUFBQyxRQUFRLFlBQWEsQ0FBSyxDQUNwQyxDQUNELENBQ1AsQ0FBQztBQUNKLENBQUMsQ0FBQTtBQUdDLHdCQUFNIn0=