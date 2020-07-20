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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Register = void 0;
var react_1 = __importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
var react_redux_1 = require("react-redux");
var alert_1 = require("../../actions/alert");
var auth_1 = require("../../actions/auth");
var prop_types_1 = __importDefault(require("prop-types"));
var RegisterView = function (_a) {
    var setAlert = _a.setAlert, register = _a.register;
    var minLength = 6;
    var initialState = {
        name: '',
        email: '',
        password: '',
        password2: ''
    };
    var _b = __read(react_1.useState(initialState), 2), formData = _b[0], setFormData = _b[1];
    var name = formData.name, email = formData.email, password = formData.password, password2 = formData.password2;
    var onChange = function (e) {
        var _a;
        setFormData(__assign(__assign({}, formData), (_a = {}, _a[e.target.name] = e.target.value, _a)));
    };
    var onSubmit = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            e.preventDefault();
            if (password !== password2) {
                setAlert('Passwords do not match', 'danger');
            }
            else {
                register({ name: name, email: email, password: password });
            }
            return [2 /*return*/];
        });
    }); };
    return (react_1.default.createElement(react_1.Fragment, null,
        react_1.default.createElement("h1", { className: "large text-primary" }, "Sign Up"),
        react_1.default.createElement("p", { className: "lead" },
            react_1.default.createElement("i", { className: "fas fa-user" }),
            " Create Your Account"),
        react_1.default.createElement("form", { className: "form", onSubmit: function (e) { return onSubmit(e); } },
            react_1.default.createElement("div", { className: "form-group" },
                react_1.default.createElement("input", { type: "text", placeholder: "Name", name: "name", value: name, onChange: function (e) { return onChange(e); } })),
            react_1.default.createElement("div", { className: "form-group" },
                react_1.default.createElement("input", { type: "email", placeholder: "Email Address", value: email, onChange: function (e) { return onChange(e); }, name: "email" }),
                react_1.default.createElement("small", { className: "form-text" }, "This site uses Gravatar so if you want a profile image, use a Gravatar email")),
            react_1.default.createElement("div", { className: "form-group" },
                react_1.default.createElement("input", { type: "password", placeholder: "Password", name: "password", value: password, onChange: function (e) { return onChange(e); } })),
            react_1.default.createElement("div", { className: "form-group" },
                react_1.default.createElement("input", { type: "password", placeholder: "Confirm Password", name: "password2", value: password2, onChange: function (e) { return onChange(e); } })),
            react_1.default.createElement("input", { type: "submit", className: "btn btn-primary", value: "Register" })),
        react_1.default.createElement("p", { className: "my-1" },
            "Already have an account? ",
            react_1.default.createElement(react_router_dom_1.Link, { to: "/login" }, "Sign in"))));
};
RegisterView.propTypes = {
    setAlert: prop_types_1.default.func.isRequired,
    register: prop_types_1.default.func.isRequired
};
var Register = react_redux_1.connect(null, { setAlert: alert_1.setAlert, register: auth_1.register })(RegisterView);
exports.Register = Register;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVnaXN0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvYXV0aC9SZWdpc3Rlci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZDQUFrRDtBQUNsRCxxREFBd0M7QUFDeEMsMkNBQXNDO0FBQ3RDLDZDQUErQztBQUMvQywyQ0FBOEM7QUFDOUMsMERBQW1DO0FBY25DLElBQU0sWUFBWSxHQUFvQixVQUFDLEVBQXNCO1FBQXBCLFFBQVEsY0FBQSxFQUFFLFFBQVEsY0FBQTtJQUN6RCxJQUFNLFNBQVMsR0FBVyxDQUFDLENBQUM7SUFFNUIsSUFBTSxZQUFZLEdBQWM7UUFDOUIsSUFBSSxFQUFFLEVBQUU7UUFDUixLQUFLLEVBQUUsRUFBRTtRQUNULFFBQVEsRUFBRSxFQUFFO1FBQ1osU0FBUyxFQUFFLEVBQUU7S0FDZCxDQUFBO0lBQ0ssSUFBQSxLQUFBLE9BQTBCLGdCQUFRLENBQUMsWUFBWSxDQUFDLElBQUEsRUFBL0MsUUFBUSxRQUFBLEVBQUUsV0FBVyxRQUEwQixDQUFDO0lBRS9DLElBQUEsSUFBSSxHQUFpQyxRQUFRLEtBQXpDLEVBQUUsS0FBSyxHQUEwQixRQUFRLE1BQWxDLEVBQUUsUUFBUSxHQUFnQixRQUFRLFNBQXhCLEVBQUUsU0FBUyxHQUFLLFFBQVEsVUFBYixDQUFjO0lBRXRELElBQU0sUUFBUSxHQUFHLFVBQUMsQ0FBc0M7O1FBQ3RELFdBQVcsdUJBQU0sUUFBUSxnQkFBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksSUFBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssT0FBRyxDQUFBO0lBQy9ELENBQUMsQ0FBQTtJQUVELElBQU0sUUFBUSxHQUFHLFVBQU8sQ0FBbUM7O1lBQ3pELENBQUMs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