"use strict";
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
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.alert = void 0;
var constants_1 = require("../actions/constants");
var initialState = [];
var alert = function (state, action) {
    if (state === void 0) { state = initialState; }
    var type = action.type, payload = action.payload;
    switch (type) {
        case constants_1.SET_ALERT:
            return __spread(state, [payload]);
        case constants_1.REMOVE_ALERT:
            return state.filter(function (alert) { return alert.id !== payload; });
        default:
            return state;
    }
};
exports.alert = alert;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9jbGllbnQvc3JjL3JlZHVjZXJzL2FsZXJ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0Esa0RBQStEO0FBRy9ELElBQU0sWUFBWSxHQUFjLEVBRS9CLENBQUM7QUFFRixJQUFNLEtBQUssR0FBWSxVQUFDLEtBQW9CLEVBQUUsTUFBd0I7SUFBOUMsc0JBQUEsRUFBQSxvQkFBb0I7SUFDbEMsSUFBQSxJQUFJLEdBQWMsTUFBTSxLQUFwQixFQUFFLE9BQU8sR0FBSyxNQUFNLFFBQVgsQ0FBWTtJQUVqQyxRQUFRLElBQUksRUFBRTtRQUNaLEtBQUsscUJBQVM7WUFDWixnQkFBVyxLQUFLLEdBQUUsT0FBTyxHQUFFO1FBQzdCLEtBQUssd0JBQVk7WUFDZixPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQyxLQUFjLElBQUssT0FBQSxLQUFLLENBQUMsRUFBRSxLQUFLLE9BQU8sRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDO1FBQ2hFO1lBQ0UsT0FBTyxLQUFLLENBQUM7S0FDaEI7QUFDSCxDQUFDLENBQUE7QUFHQyxzQkFBSyJ9