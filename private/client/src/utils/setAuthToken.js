"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setAuthToken = void 0;
var api_1 = require("./api");
var setAuthToken = function (token) {
    if (token) {
        api_1.api.defaults.headers.common['x-auth-token'] = token;
        localStorage.setItem('token', token);
    }
    else {
        delete api_1.api.defaults.headers.common['x-auth-token'];
        localStorage.removeItem('token');
    }
};
exports.setAuthToken = setAuthToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0QXV0aFRva2VuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vY2xpZW50L3NyYy91dGlscy9zZXRBdXRoVG9rZW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNkJBQTRCO0FBRTVCLElBQU0sWUFBWSxHQUFHLFVBQUMsS0FBYTtJQUNqQyxJQUFJLEtBQUssRUFBRTtRQUNULFNBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDcEQsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7S0FDdEM7U0FBTTtRQUNMLE9BQU8sU0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ25ELFlBQVksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDbEM7QUFDSCxDQUFDLENBQUM7QUFHQSxvQ0FBWSJ9