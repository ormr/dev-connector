"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootReducer = void 0;
var redux_1 = require("redux");
var alert_1 = require("./alert");
var auth_1 = require("./auth");
var rootReducer = redux_1.combineReducers({
    alert: alert_1.alert,
    auth: auth_1.auth
});
exports.rootReducer = rootReducer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9jbGllbnQvc3JjL3JlZHVjZXJzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLCtCQUF3QztBQUN4QyxpQ0FBZ0M7QUFDaEMsK0JBQThCO0FBRTlCLElBQU0sV0FBVyxHQUFHLHVCQUFlLENBQUM7SUFDbEMsS0FBSyxlQUFBO0lBQ0wsSUFBSSxhQUFBO0NBQ0wsQ0FBQyxDQUFDO0FBR0Qsa0NBQVcifQ==