"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alert = void 0;
var react_1 = __importDefault(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var react_redux_1 = require("react-redux");
var AlertView = function (_a) {
    var alerts = _a.alerts;
    return alerts !== null && alerts.length > 0 && alerts.map(function (_a) {
        var id = _a.id, alertType = _a.alertType, msg = _a.msg;
        return (react_1.default.createElement("div", { key: id, className: "alert alert-" + alertType }, msg));
    });
};
AlertView.propTypes = {
    alerts: prop_types_1.default.array.isRequired
};
var mapStateToProps = function (state) { return ({
    alerts: state.alert
}); };
var Alert = react_redux_1.connect(mapStateToProps)(AlertView);
exports.Alert = Alert;
