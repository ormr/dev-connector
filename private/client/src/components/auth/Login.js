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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = void 0;
var react_1 = __importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
var Login = function () {
    var minLength = 6;
    var initialState = {
        email: '',
        password: ''
    };
    var _a = __read(react_1.useState(initialState), 2), formData = _a[0], setFormData = _a[1];
    var email = formData.email, password = formData.password;
    var onChange = function (e) {
        var _a;
        setFormData(__assign(__assign({}, formData), (_a = {}, _a[e.target.name] = e.target.value, _a)));
    };
    var onSubmit = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            e.preventDefault();
            console.log('SUCCESS');
            return [2 /*return*/];
        });
    }); };
    return (react_1.default.createElement(react_1.Fragment, null,
        react_1.default.createElement("h1", { className: "large text-primary" }, "Sign In"),
        react_1.default.createElement("p", { className: "lead" },
            react_1.default.createElement("i", { className: "fas fa-user" }),
            " Sign in to Your Account"),
        react_1.default.createElement("form", { className: "form", onSubmit: function (e) { return onSubmit(e); } },
            react_1.default.createElement("div", { className: "form-group" },
                react_1.default.createElement("input", { type: "email", placeholder: "Email Address", value: email, onChange: function (e) { return onChange(e); }, name: "email", required: true })),
            react_1.default.createElement("div", { className: "form-group" },
                react_1.default.createElement("input", { type: "password", placeholder: "Password", name: "password", value: password, onChange: function (e) { return onChange(e); }, minLength: minLength })),
            react_1.default.createElement("input", { type: "submit", className: "btn btn-primary", value: "Login" })),
        react_1.default.createElement("p", { className: "my-1" },
            "Don't have an account? ",
            react_1.default.createElement(react_router_dom_1.Link, { to: "/register" }, "Sign up"))));
};
exports.Login = Login;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvYXV0aC9Mb2dpbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZDQUFrRDtBQUNsRCxxREFBd0M7QUFPeEMsSUFBTSxLQUFLLEdBQWE7SUFDdEIsSUFBTSxTQUFTLEdBQVcsQ0FBQyxDQUFDO0lBRTVCLElBQU0sWUFBWSxHQUFjO1FBQzlCLEtBQUssRUFBRSxFQUFFO1FBQ1QsUUFBUSxFQUFFLEVBQUU7S0FDYixDQUFBO0lBQ0ssSUFBQSxLQUFBLE9BQTBCLGdCQUFRLENBQUMsWUFBWSxDQUFDLElBQUEsRUFBL0MsUUFBUSxRQUFBLEVBQUUsV0FBVyxRQUEwQixDQUFDO0lBRS9DLElBQUEsS0FBSyxHQUFlLFFBQVEsTUFBdkIsRUFBRSxRQUFRLEdBQUssUUFBUSxTQUFiLENBQWM7SUFFckMsSUFBTSxRQUFRLEdBQUcsVUFBQyxDQUFzQzs7UUFDdEQsV0FBVyx1QkFBTSxRQUFRLGdCQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxPQUFHLENBQUE7SUFDL0QsQ0FBQyxDQUFBO0lBRUQsSUFBTSxRQUFRLEdBQUcsVUFBTyxDQUFNOztZQUM1QixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQzs7O1NBQ3hCLENBQUE7SUFFRCxPQUFPLENBQ0wsOEJBQUMsZ0JBQVE7UUFDUCxzQ0FBSSxTQUFTLEVBQUMsb0JBQW9CLGNBQWE7UUFDL0MscUNBQUcsU0FBUyxFQUFDLE1BQU07WUFDakIscUNBQUcsU0FBUyxFQUFDLGFBQWEsR0FBSzt1Q0FDN0I7UUFDSix3Q0FBTSxTQUFTLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBRSxVQUFBLENBQUMsSUFBSSxPQUFBLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBWCxDQUFXO1lBQy9DLHVDQUFLLFNBQVMsRUFBQyxZQUFZO2dCQUN6Qix5Q0FDRSxJQUFJLEVBQUMsT0FBTyxFQUNaLFdBQVcsRUFBQyxlQUFlLEVBQzNCLEtBQUssRUFBRSxLQUFLLEVBQ1osUUFBUSxFQUFFLFVBQUMsQ0FBQyxJQUFLLE9BQUEsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFYLENBQVcsRUFDNUIsSUFBSSxFQUFDLE9BQU8sRUFDWixRQUFRLFNBQ1IsQ0FDRTtZQUNOLHVDQUFLLFNBQVMsRUFBQyxZQUFZO2dCQUN6Qix5Q0FDRSxJQUFJLEVBQUMsVUFBVSxFQUNmLFdBQVcsRUFBQyxVQUFVLEVBQ3RCLElBQUksRUFBQyxVQUFVLEVBQ2YsS0FBSyxFQUFFLFFBQVEsRUFDZixRQUFRLEVBQUUsVUFBQyxDQUFDLElBQUssT0FBQSxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQVgsQ0FBVyxFQUM1QixTQUFTLEVBQUUsU0FBUyxHQUNwQixDQUNFO1lBQ04seUNBQU8sSUFBSSxFQUFDLFFBQVEsRUFBQyxTQUFTLEVBQUMsaUJBQWlCLEVBQUMsS0FBSyxFQUFDLE9BQU8sR0FBRyxDQUM1RDtRQUNQLHFDQUFHLFNBQVMsRUFBQyxNQUFNOztZQUNNLDhCQUFDLHVCQUFJLElBQUMsRUFBRSxFQUFDLFdBQVcsY0FBZSxDQUN4RCxDQUNLLENBQ1osQ0FBQztBQUNKLENBQUMsQ0FBQTtBQUdDLHNCQUFLIn0=