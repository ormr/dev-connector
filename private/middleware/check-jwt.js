"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkJwt = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var config_1 = __importDefault(require("config"));
var checkJwt = function (req, res, next) {
    // Get token from header
    var token = req.header('x-auth-token');
    // Check if not token
    if (!token) {
        return res
            .status(401)
            .json({ msg: 'No token authorization denied' });
    }
    // Verify token
    try {
        var decoded = jsonwebtoken_1.default.verify(token, config_1.default.get('jwtSecret'));
        req.user = decoded.user;
        next();
    }
    catch (err) {
        res.status(401).json({ msg: 'Token isn\'t valid' });
    }
};
exports.checkJwt = checkJwt;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2stand0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbWlkZGxld2FyZS9jaGVjay1qd3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRUEsOERBQStCO0FBQy9CLGtEQUE0QjtBQUU1QixJQUFNLFFBQVEsR0FBUSxVQUFDLEdBQVksRUFBRSxHQUFhLEVBQUUsSUFBa0I7SUFFcEUsd0JBQXdCO0lBQ3hCLElBQU0sS0FBSyxHQUFRLEdBQUcsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7SUFFOUMscUJBQXFCO0lBQ3JCLElBQUksQ0FBQyxLQUFLLEVBQUU7UUFDVixPQUFPLEdBQUc7YUFDUCxNQUFNLENBQUMsR0FBRyxDQUFDO2FBQ1gsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLCtCQUErQixFQUFFLENBQUMsQ0FBQTtLQUNsRDtJQUVELGVBQWU7SUFFZixJQUFJO1FBQ0YsSUFBTSxPQUFPLEdBQVEsc0JBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLGdCQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFFaEUsR0FBRyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO1FBQ3hCLElBQUksRUFBRSxDQUFDO0tBQ1I7SUFBQyxPQUFPLEdBQUcsRUFBRTtRQUNaLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLG9CQUFvQixFQUFFLENBQUMsQ0FBQztLQUNyRDtBQUNILENBQUMsQ0FBQTtBQUdDLDRCQUFRIn0=