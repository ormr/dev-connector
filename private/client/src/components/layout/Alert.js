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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWxlcnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvbGF5b3V0L0FsZXJ0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxnREFBMEI7QUFDMUIsMERBQW1DO0FBQ25DLDJDQUFzQztBQU90QyxJQUFNLFNBQVMsR0FBb0IsVUFBQyxFQUFVO1FBQVIsTUFBTSxZQUFBO0lBQ3hDLE9BQUEsTUFBTSxLQUFLLElBQUksSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQUMsRUFBNkI7WUFBNUIsRUFBRSxRQUFBLEVBQUUsU0FBUyxlQUFBLEVBQUUsR0FBRyxTQUFBO1FBQWUsT0FBQSxDQUNsRix1Q0FBSyxHQUFHLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxpQkFBZSxTQUFXLElBQzdDLEdBQUcsQ0FDSCxDQUNUO0lBSnFGLENBSXJGLENBQ0o7QUFMRyxDQUtILENBQUM7QUFFRixTQUFTLENBQUMsU0FBUyxHQUFHO0lBQ2xCLE1BQU0sRUFBRSxvQkFBUyxDQUFDLEtBQUssQ0FBQyxVQUFVO0NBQ3JDLENBQUE7QUFFRCxJQUFNLGVBQWUsR0FBRyxVQUFDLEtBQVUsSUFBSyxPQUFBLENBQUM7SUFDckMsTUFBTSxFQUFFLEtBQUssQ0FBQyxLQUFLO0NBQ3RCLENBQUMsRUFGc0MsQ0FFdEMsQ0FBQTtBQUVGLElBQU0sS0FBSyxHQUFHLHFCQUFPLENBQUMsZUFBZSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUE7QUFHN0Msc0JBQUsifQ==