"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
var express_1 = __importDefault(require("express"));
var express_validator_1 = require("express-validator");
var bcryptjs_1 = __importDefault(require("bcryptjs"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var config_1 = __importDefault(require("config"));
var check_jwt_1 = require("../../middleware/check-jwt");
var User_1 = require("../../models/User");
var auth = express_1.default.Router();
exports.auth = auth;
// @route  GET api/auth
// @desc   test route
// @access Public
auth.get('/', check_jwt_1.checkJwt, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, User_1.User.findById(req.user.id).select('-password')];
            case 1:
                user = _a.sent();
                res.json(user);
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                console.error(err_1.message);
                res.status(500).send('Server Error');
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
// @route  POST api/auth
// @desc   Register user
// @access Public
auth.post('/', [
    express_validator_1.check('email', 'Please include a valid email')
        .isEmail(),
    express_validator_1.check('password', 'Password is required')
        .exists()
], function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var errors, _a, email, password, user, isMatch, payload, err_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                errors = express_validator_1.validationResult(req);
                if (!errors.isEmpty()) {
                    return [2 /*return*/, res.status(400).json({ error: errors.array() })];
                }
                _a = req.body, email = _a.email, password = _a.password;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 4, , 5]);
                return [4 /*yield*/, User_1.User.findOne({ email: email })];
            case 2:
                user = _b.sent();
                if (!user) {
                    return [2 /*return*/, res
                            .status(400)
                            .json({ errors: [{ msg: 'Invalid Credentials' }] })];
                }
                return [4 /*yield*/, bcryptjs_1.default.compare(password, user.password)];
            case 3:
                isMatch = _b.sent();
                if (!isMatch) {
                    return [2 /*return*/, res
                            .status(400)
                            .json({ errors: [{ msg: 'Invalid Credentials' }] })];
                }
                payload = {
                    user: {
                        id: user.id
                    }
                };
                jsonwebtoken_1.default.sign(payload, config_1.default.get('jwtSecret'), { expiresIn: 360000 }, function (err, token) {
                    if (err)
                        throw err;
                    res.json({ token: token });
                });
                return [3 /*break*/, 5];
            case 4:
                err_2 = _b.sent();
                console.error(err_2.message);
                res.status(500).send('Server error');
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3JvdXRlcy9hcGkvYXV0aC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvREFBNkQ7QUFDN0QsdURBQTREO0FBQzVELHNEQUE4QjtBQUM5Qiw4REFBK0I7QUFDL0Isa0RBQTRCO0FBQzVCLHdEQUFzRDtBQUN0RCwwQ0FBd0M7QUFJeEMsSUFBTSxJQUFJLEdBQVcsaUJBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQXlFN0Isb0JBQUk7QUF2RWIsdUJBQXVCO0FBQ3ZCLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsb0JBQVEsRUFBRSxVQUFPLEdBQVksRUFBRSxHQUFhOzs7Ozs7Z0JBRXpDLHFCQUFNLFdBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLEVBQUE7O2dCQUEzRCxJQUFJLEdBQUcsU0FBb0Q7Z0JBQ2pFLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Ozs7Z0JBRWYsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzNCLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDOzs7OztLQUV4QyxDQUFDLENBQUM7QUFFSCx3QkFBd0I7QUFDeEIsd0JBQXdCO0FBQ3hCLGlCQUFpQjtBQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFDWDtJQUNFLHlCQUFLLENBQUMsT0FBTyxFQUFFLDhCQUE4QixDQUFDO1NBQzNDLE9BQU8sRUFBRTtJQUNaLHlCQUFLLENBQUMsVUFBVSxFQUNkLHNCQUFzQixDQUFDO1NBQ3JCLE1BQU0sRUFBRTtDQUNiLEVBQ0QsVUFBTyxHQUFZLEVBQUUsR0FBYTs7Ozs7Z0JBQzVCLE1BQU0sR0FBRyxvQ0FBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDckMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsRUFBRTtvQkFDckIsc0JBQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsRUFBQztpQkFDeEQ7Z0JBRUssS0FBc0IsR0FBRyxDQUFDLElBQUksRUFBNUIsS0FBSyxXQUFBLEVBQUUsUUFBUSxjQUFBLENBQWM7Ozs7Z0JBS25CLHFCQUFNLFdBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFDLEVBQUE7O2dCQUF6QyxJQUFJLEdBQVEsU0FBNkI7Z0JBRTdDLElBQUksQ0FBQyxJQUFJLEVBQUU7b0JBQ1Qsc0JBQU8sR0FBRzs2QkFDUCxNQUFNLENBQUMsR0FBRyxDQUFDOzZCQUNYLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLHFCQUFxQixFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUM7aUJBQ3ZEO2dCQUVlLHFCQUFNLGtCQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUE7O2dCQUF2RCxPQUFPLEdBQUcsU0FBNkM7Z0JBRTdELElBQUksQ0FBQyxPQUFPLEVBQUU7b0JBQ1osc0JBQU8sR0FBRzs2QkFDUCxNQUFNLENBQUMsR0FBRyxDQUFDOzZCQUNYLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLHFCQUFxQixFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUM7aUJBQ3ZEO2dCQUVLLE9BQU8sR0FBRztvQkFDZCxJQUFJLEVBQUU7d0JBQ0osRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFO3FCQUNaO2lCQUNGLENBQUE7Z0JBRUQsc0JBQUcsQ0FBQyxJQUFJLENBQ04sT0FBTyxFQUNQLGdCQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUN2QixFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsRUFDckIsVUFBQyxHQUFHLEVBQUUsS0FBSztvQkFDVCxJQUFJLEdBQUc7d0JBQUUsTUFBTSxHQUFHLENBQUM7b0JBQ25CLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFDLENBQUM7Z0JBQ3RCLENBQUMsQ0FBQyxDQUFDOzs7O2dCQUVMLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUMzQixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQzs7Ozs7S0FFeEMsQ0FBQyxDQUFDIn0=