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
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
var constants_1 = require("../actions/constants");
var initialState = {
    token: localStorage.getItem('token'),
    isAuthenicated: null,
    loading: true,
    user: null
};
exports.auth = function (state, action) {
    if (state === void 0) { state = initialState; }
    var type = action.type, payload = action.payload;
    switch (type) {
        case constants_1.REGISTER_SUCCESS:
            localStorage.setItem('token', payload.token);
            return __assign(__assign(__assign({}, state), payload), { isAuthenicated: true, loading: false });
        case constants_1.REGISTER_FAIL:
            localStorage.removeItem('token');
            return __assign(__assign({}, state), { token: null, isAuthenicated: false, loading: false });
        default:
            return state;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9zcmMvcmVkdWNlcnMvYXV0aC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBLGtEQUFtRztBQUVuRyxJQUFNLFlBQVksR0FBYztJQUM5QixLQUFLLEVBQUUsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7SUFDcEMsY0FBYyxFQUFFLElBQUk7SUFDcEIsT0FBTyxFQUFFLElBQUk7SUFDYixJQUFJLEVBQUUsSUFBSTtDQUNYLENBQUM7QUFFVyxRQUFBLElBQUksR0FBWSxVQUFDLEtBQW9CLEVBQUUsTUFBaUI7SUFBdkMsc0JBQUEsRUFBQSxvQkFBb0I7SUFDeEMsSUFBQSxJQUFJLEdBQWMsTUFBTSxLQUFwQixFQUFFLE9BQU8sR0FBSyxNQUFNLFFBQVgsQ0FBWTtJQUVqQyxRQUFRLElBQUksRUFBRTtRQUNaLEtBQUssNEJBQWdCO1lBQ25CLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM3QyxzQ0FDSyxLQUFLLEdBQ0wsT0FBTyxLQUNWLGNBQWMsRUFBRSxJQUFJLEVBQ3BCLE9BQU8sRUFBRSxLQUFLLElBQ2Y7UUFDSCxLQUFLLHlCQUFhO1lBQ2hCLFlBQVksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDakMsNkJBQ0ssS0FBSyxLQUNSLEtBQUssRUFBRSxJQUFJLEVBQ1gsY0FBYyxFQUFFLEtBQUssRUFDckIsT0FBTyxFQUFFLEtBQUssSUFDZjtRQUNIO1lBQ0UsT0FBTyxLQUFLLENBQUM7S0FDaEI7QUFDSCxDQUFDLENBQUEifQ==