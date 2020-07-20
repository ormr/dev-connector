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
exports.users = void 0;
var express_1 = __importDefault(require("express"));
var express_validator_1 = require("express-validator");
var gravatar_1 = __importDefault(require("gravatar"));
var bcryptjs_1 = __importDefault(require("bcryptjs"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var User_1 = require("../../models/User");
var config_1 = __importDefault(require("config"));
var users = express_1.default.Router();
exports.users = users;
// @route  POST api/users
// @desc   Register user
// @access Public
users.post('/', [
    express_validator_1.check('name', 'Name is required')
        .not()
        .isEmpty(),
    express_validator_1.check('email', 'Please include a valid email')
        .isEmail(),
    express_validator_1.check('password', 'Please enter a password with 6 or more characters')
        .isLength({ min: 6 })
], function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var errors, _a, name, email, password, user, avatar, salt, _b, payload, err_1;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                errors = express_validator_1.validationResult(req);
                if (!errors.isEmpty()) {
                    return [2 /*return*/, res.status(400).json({ error: errors.array() })];
                }
                _a = req.body, name = _a.name, email = _a.email, password = _a.password;
                _c.label = 1;
            case 1:
                _c.trys.push([1, 6, , 7]);
                return [4 /*yield*/, User_1.User.findOne({ email: email })];
            case 2:
                user = _c.sent();
                if (user) {
                    return [2 /*return*/, res.status(400).json({ errors: [{ msg: 'User already exists' }] })];
                }
                avatar = gravatar_1.default.url(email, {
                    s: '200',
                    r: 'pg',
                    d: 'mm'
                });
                user = new User_1.User({
                    name: name,
                    email: email,
                    avatar: avatar,
                    password: password
                });
                return [4 /*yield*/, bcryptjs_1.default.genSalt(10)];
            case 3:
                salt = _c.sent();
                _b = user;
                return [4 /*yield*/, bcryptjs_1.default.hash(password, salt)];
            case 4:
                _b.password = _c.sent();
                return [4 /*yield*/, user.save()];
            case 5:
                _c.sent();
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
                return [3 /*break*/, 7];
            case 6:
                err_1 = _c.sent();
                console.error(err_1.message);
                res.status(500).send('Server error');
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9yb3V0ZXMvYXBpL3VzZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9EQUE2RDtBQUM3RCx1REFBNEQ7QUFDNUQsc0RBQWdDO0FBQ2hDLHNEQUE4QjtBQUM5Qiw4REFBK0I7QUFDL0IsMENBQXlDO0FBQ3pDLGtEQUE0QjtBQUU1QixJQUFNLEtBQUssR0FBVyxpQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBOEU5QixzQkFBSztBQTVFZCx5QkFBeUI7QUFDekIsd0JBQXdCO0FBQ3hCLGlCQUFpQjtBQUNqQixLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFDWjtJQUNFLHlCQUFLLENBQUMsTUFBTSxFQUFFLGtCQUFrQixDQUFDO1NBQzlCLEdBQUcsRUFBRTtTQUNMLE9BQU8sRUFBRTtJQUNaLHlCQUFLLENBQUMsT0FBTyxFQUFFLDhCQUE4QixDQUFDO1NBQzNDLE9BQU8sRUFBRTtJQUNaLHlCQUFLLENBQUMsVUFBVSxFQUNkLG1EQUFtRCxDQUFDO1NBQ2xELFFBQVEsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQztDQUN6QixFQUNELFVBQU8sR0FBWSxFQUFFLEdBQWE7Ozs7O2dCQUM1QixNQUFNLEdBQUcsb0NBQWdCLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEVBQUU7b0JBQ3JCLHNCQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEVBQUM7aUJBQ3hEO2dCQUVLLEtBQTRCLEdBQUcsQ0FBQyxJQUFJLEVBQWxDLElBQUksVUFBQSxFQUFFLEtBQUssV0FBQSxFQUFFLFFBQVEsY0FBQSxDQUFjOzs7O2dCQUt6QixxQkFBTSxXQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxPQUFBLEVBQUUsQ0FBQyxFQUFBOztnQkFBekMsSUFBSSxHQUFRLFNBQTZCO2dCQUU3QyxJQUFJLElBQUksRUFBRTtvQkFDUixzQkFBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLHFCQUFxQixFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUM7aUJBQzNFO2dCQUlLLE1BQU0sR0FBRyxrQkFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUU7b0JBQ2pDLENBQUMsRUFBRSxLQUFLO29CQUNSLENBQUMsRUFBRSxJQUFJO29CQUNQLENBQUMsRUFBRSxJQUFJO2lCQUNSLENBQUMsQ0FBQztnQkFFSCxJQUFJLEdBQUcsSUFBSSxXQUFJLENBQUM7b0JBQ2QsSUFBSSxNQUFBO29CQUNKLEtBQUssT0FBQTtvQkFDTCxNQUFNLFFBQUE7b0JBQ04sUUFBUSxVQUFBO2lCQUNULENBQUMsQ0FBQTtnQkFJVyxxQkFBTSxrQkFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBQTs7Z0JBQS9CLElBQUksR0FBRyxTQUF3QjtnQkFFckMsS0FBQSxJQUFJLENBQUE7Z0JBQVkscUJBQU0sa0JBQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxFQUFBOztnQkFBakQsR0FBSyxRQUFRLEdBQUcsU0FBaUMsQ0FBQztnQkFFbEQscUJBQU0sSUFBSSxDQUFDLElBQUksRUFBRSxFQUFBOztnQkFBakIsU0FBaUIsQ0FBQztnQkFJWixPQUFPLEdBQUc7b0JBQ2QsSUFBSSxFQUFFO3dCQUNKLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtxQkFDWjtpQkFDRixDQUFBO2dCQUVELHNCQUFHLENBQUMsSUFBSSxDQUNOLE9BQU8sRUFDUCxnQkFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFDdkIsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEVBQ3JCLFVBQUMsR0FBRyxFQUFFLEtBQUs7b0JBQ1QsSUFBSSxHQUFHO3dCQUFFLE1BQU0sR0FBRyxDQUFDO29CQUNuQixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxPQUFBLEVBQUUsQ0FBQyxDQUFDO2dCQUN0QixDQUFDLENBQUMsQ0FBQzs7OztnQkFFTCxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDM0IsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7Ozs7O0tBRXhDLENBQUMsQ0FBQyJ9