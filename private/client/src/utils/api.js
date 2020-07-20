"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = void 0;
var axios_1 = __importDefault(require("axios"));
var api = axios_1.default.create({
    baseURL: '/api',
    headers: {
        'Content-Type': 'application/json'
    }
});
exports.api = api;
/**
 intercept any error responses from the api
 and check if the token is no longer valid.
 ie. Token has expired
 logout the user if the token has expired
**/
api.interceptors.response.use(function (res) { return res; }, function (err) {
    if (err.response.data.msg === 'Token is not valid') {
        // store.dispatch({ type: LOGOUT });
        console.log(err);
    }
    return Promise.reject(err);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vY2xpZW50L3NyYy91dGlscy9hcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsZ0RBQTBCO0FBRzFCLElBQU0sR0FBRyxHQUFHLGVBQUssQ0FBQyxNQUFNLENBQUM7SUFDdkIsT0FBTyxFQUFFLE1BQU07SUFDZixPQUFPLEVBQUU7UUFDUCxjQUFjLEVBQUUsa0JBQWtCO0tBQ25DO0NBQ0YsQ0FBQyxDQUFDO0FBcUJELGtCQUFHO0FBbkJMOzs7OztHQUtHO0FBRUgsR0FBRyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUMzQixVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsRUFBSCxDQUFHLEVBQ1YsVUFBQSxHQUFHO0lBQ0QsSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssb0JBQW9CLEVBQUU7UUFDbEQsb0NBQW9DO1FBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDbEI7SUFDRCxPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDN0IsQ0FBQyxDQUNGLENBQUMifQ==