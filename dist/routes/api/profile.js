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
exports.profile = void 0;
var express_1 = __importDefault(require("express"));
var request_1 = __importDefault(require("request"));
var config_1 = __importDefault(require("config"));
var express_validator_1 = require("express-validator");
var check_jwt_1 = require("../../middleware/check-jwt");
var Profile_1 = require("../../models/Profile");
var User_1 = require("../../models/User");
var router = express_1.default.Router();
// @route  GET api/profile/me
// @desc   Get current users profile
// @access Private
router.get('/me', check_jwt_1.checkJwt, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var profile_1, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Profile_1.Profile
                        .findOne({ user: req.user.id })
                        .populate('user', ['name', 'avatar'])];
            case 1:
                profile_1 = _a.sent();
                if (!profile_1) {
                    return [2 /*return*/, res
                            .status(400)
                            .json({ msg: 'There is no profile for this user' })];
                }
                res.json(profile_1);
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
// @route  POST api/profile
// @desc   Create or update user profile
// @access Private
router.post('/', [
    check_jwt_1.checkJwt,
    [
        express_validator_1.check('status', 'Status is required')
            .not()
            .isEmpty(),
        express_validator_1.check('skills', 'Skills is required')
            .not()
            .isEmpty()
    ]
], function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var errors, _a, company, website, location, bio, status, githubusername, skills, youtube, facebook, twitter, instagram, linkedin, profileFields, profile_2, err_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                errors = express_validator_1.validationResult(req);
                if (!errors.isEmpty()) {
                    return [2 /*return*/, res.status(400).json({ errors: errors.array() })];
                }
                _a = req.body, company = _a.company, website = _a.website, location = _a.location, bio = _a.bio, status = _a.status, githubusername = _a.githubusername, skills = _a.skills, youtube = _a.youtube, facebook = _a.facebook, twitter = _a.twitter, instagram = _a.instagram, linkedin = _a.linkedin;
                profileFields = {
                    user: '',
                    skills: [],
                    social: {}
                };
                profileFields.user = req.user.id;
                if (company)
                    profileFields.company = company;
                if (website)
                    profileFields.website = website;
                if (location)
                    profileFields.location = location;
                if (bio)
                    profileFields.bio = bio;
                if (status)
                    profileFields.status = status;
                if (githubusername)
                    profileFields.githubusername = githubusername;
                if (skills) {
                    profileFields.skills = skills.split(',').map(function (skill) { return skill.trim(); });
                }
                if (youtube)
                    profileFields.social.youtube = youtube;
                if (twitter)
                    profileFields.social.twitter = twitter;
                if (facebook)
                    profileFields.social.facebook = facebook;
                if (linkedin)
                    profileFields.social.linkedin = linkedin;
                if (instagram)
                    profileFields.social.instagram = instagram;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 6, , 7]);
                return [4 /*yield*/, Profile_1.Profile.findOne({ user: req.user.id })];
            case 2:
                profile_2 = _b.sent();
                if (!profile_2) return [3 /*break*/, 4];
                return [4 /*yield*/, Profile_1.Profile.findOneAndUpdate({ user: req.user.id }, { $set: profileFields }, { new: true })];
            case 3:
                // Update
                profile_2 = _b.sent();
                return [2 /*return*/, res.json(profile_2)];
            case 4:
                // Create
                profile_2 = new Profile_1.Profile(profileFields);
                return [4 /*yield*/, profile_2.save()];
            case 5:
                _b.sent();
                return [3 /*break*/, 7];
            case 6:
                err_2 = _b.sent();
                console.error(err_2.message);
                res.status(500).send('Server Error');
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); });
// @route  GET api/profile
// @desc   Get all profiles
// @access Public
router.get('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var profiles, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Profile_1.Profile.find().populate('user', ['name', 'avatar'])];
            case 1:
                profiles = _a.sent();
                res.json(profiles);
                return [3 /*break*/, 3];
            case 2:
                err_3 = _a.sent();
                console.error(err_3.message);
                res.status(500).send('Server Error');
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
// @route  GET api/profile/user/:user_id
// @desc   Get profile by user ID
// @access Public
router.get('/user/:user_id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var profile_3, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Profile_1.Profile.findOne({ user: req.params.user_id }).populate('user', ['name', 'avatar'])];
            case 1:
                profile_3 = _a.sent();
                if (!profile_3)
                    return [2 /*return*/, res.status(400).json({ msg: 'Profile is not found' })];
                res.json(profile_3);
                return [3 /*break*/, 3];
            case 2:
                err_4 = _a.sent();
                console.error(err_4.message);
                if (err_4.kind === 'ObjectId') {
                    return [2 /*return*/, res.status(400).json({ msg: 'Profile is not found' })];
                }
                res.status(500).send('Server Error');
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
// @route  DELETE api/profile
// @desc   Delete profile, user && posts
// @access Private
router.delete('/', check_jwt_1.checkJwt, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var err_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                // Remove profile
                return [4 /*yield*/, Profile_1.Profile.findOneAndRemove({ user: req.user.id })];
            case 1:
                // Remove profile
                _a.sent();
                // Remove user
                return [4 /*yield*/, User_1.User.findOneAndRemove({ _id: req.user.id })];
            case 2:
                // Remove user
                _a.sent();
                res.json({ msg: 'User deleted' });
                return [3 /*break*/, 4];
            case 3:
                err_5 = _a.sent();
                console.error(err_5.message);
                res.status(500).send('Server Error');
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
// @route PUT api/profile/experience
// @desc Add profile experience
// @access Private
router.put('/experience', [
    check_jwt_1.checkJwt,
    [
        express_validator_1.check('title', 'Title is required')
            .not()
            .isEmpty(),
        express_validator_1.check('company', 'Company is required')
            .not()
            .isEmpty(),
        express_validator_1.check('from', 'From date is required')
            .not()
            .isEmpty()
    ]
], function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var errors, _a, title, company, location, from, to, current, description, newExp, profile_4, err_6;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                errors = express_validator_1.validationResult(req);
                if (!errors.isEmpty()) {
                    return [2 /*return*/, res.status(400).json({ errors: errors.array() })];
                }
                _a = req.body, title = _a.title, company = _a.company, location = _a.location, from = _a.from, to = _a.to, current = _a.current, description = _a.description;
                ;
                newExp = {
                    title: title,
                    company: company,
                    location: location,
                    from: from,
                    to: to,
                    current: current,
                    description: description
                };
                _b.label = 1;
            case 1:
                _b.trys.push([1, 4, , 5]);
                return [4 /*yield*/, Profile_1.Profile.findOne({ user: req.user.id })];
            case 2:
                profile_4 = _b.sent();
                if (!profile_4) {
                    return [2 /*return*/, res
                            .status(400)
                            .json({ msg: 'There is no profile for this user' })];
                }
                profile_4.experience.unshift(newExp);
                return [4 /*yield*/, profile_4.save()];
            case 3:
                _b.sent();
                res.json(profile_4);
                return [3 /*break*/, 5];
            case 4:
                err_6 = _b.sent();
                console.error(err_6.message);
                res.status(500).send('Server Error');
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); });
// @route DELETE api/profile/experience/:exp_id
// @desc Delete experience from profile
// @access Private
router.delete('/experience/:exp_id', check_jwt_1.checkJwt, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var profile_5, removeIndex, err_7;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, Profile_1.Profile.findOne({ user: req.user.id })];
            case 1:
                profile_5 = _a.sent();
                if (!profile_5) {
                    console.log(profile_5);
                    return [2 /*return*/, res.status(400).json({ msg: 'There is no such experience' })];
                }
                removeIndex = profile_5.experience.map(function (item) { return item.id; }).indexOf(req.params.exp_id);
                profile_5.experience.splice(removeIndex, 1);
                return [4 /*yield*/, profile_5.save()];
            case 2:
                _a.sent();
                res.json(profile_5);
                return [3 /*break*/, 4];
            case 3:
                err_7 = _a.sent();
                console.error(err_7.message);
                res.status(500).send('Server error');
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
// @route PUT api/profile/education
// @desc Add profile education
// @access Private
router.put('/education', [check_jwt_1.checkJwt, [
        express_validator_1.check('school', 'School is required')
            .not()
            .isEmpty(),
        express_validator_1.check('degree', 'Degree is required')
            .not()
            .isEmpty(),
        express_validator_1.check('fieldofstudy', 'Field of study is required')
            .not()
            .isEmpty(),
        express_validator_1.check('from', 'From is required')
            .not()
            .isEmpty(),
    ]
], function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var errors, _a, school, degree, fieldofstudy, from, to, current, description, newEdu, profile_6, err_8;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                errors = express_validator_1.validationResult(req);
                if (!errors.isEmpty()) {
                    return [2 /*return*/, res.status(400).json({ errors: errors.array() })];
                }
                _a = req.body, school = _a.school, degree = _a.degree, fieldofstudy = _a.fieldofstudy, from = _a.from, to = _a.to, current = _a.current, description = _a.description;
                ;
                newEdu = {
                    school: school,
                    degree: degree,
                    fieldofstudy: fieldofstudy,
                    from: from,
                    to: to,
                    current: current,
                    description: description
                };
                _b.label = 1;
            case 1:
                _b.trys.push([1, 4, , 5]);
                return [4 /*yield*/, Profile_1.Profile.findOne({ user: req.user.id })];
            case 2:
                profile_6 = _b.sent();
                if (!profile_6) {
                    return [2 /*return*/, res.status(400).json({ msg: 'Education is not found' })];
                }
                profile_6.education.unshift(newEdu);
                return [4 /*yield*/, profile_6.save()];
            case 3:
                _b.sent();
                res.json(profile_6);
                return [3 /*break*/, 5];
            case 4:
                err_8 = _b.sent();
                console.error(err_8.message);
                res.status(500).send('Server error');
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); });
// @route DELETE api/profile/education/:edu_id
// @desc Delete education from profile
// @access Private
router.delete('/education/:edu_id', check_jwt_1.checkJwt, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var profile_7, removeIndex, err_9;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, Profile_1.Profile.findOne({ user: req.user.id })];
            case 1:
                profile_7 = _a.sent();
                if (!profile_7) {
                    return [2 /*return*/, res.status(400).json({ msg: 'Education is not found' })];
                }
                removeIndex = profile_7
                    .experience
                    .map(function (item) { return item.id; })
                    .indexOf(req.params.edu_id);
                profile_7.education.splice(removeIndex, 1);
                return [4 /*yield*/, profile_7.save()];
            case 2:
                _a.sent();
                res.json(profile_7);
                return [3 /*break*/, 4];
            case 3:
                err_9 = _a.sent();
                console.error(err_9.message);
                res.status(500).json('Server error');
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
// @route GET api/profile/github/:username
// @desc Get user repos from Github
// @access Public
router.get('/github/:username', function (req, res) {
    try {
        var options = {
            uri: "https://api.github.com/users/" + req.params.username + "/repos?per_page=5&sort=created:asc&client_id=" + config_1.default.get('githubClientId') + "&client_secret=" + config_1.default.get('githubSecret'),
            method: 'GET',
            headers: { 'user-agent': 'node.js' }
        };
        request_1.default(options, function (error, response, body) {
            if (error) {
                console.error(error);
            }
            if (response.statusCode !== 200) {
                return res.status(404).json({ msg: 'No Github profile found' });
            }
            res.json(JSON.parse(body));
        });
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});
var profile = router;
exports.profile = profile;
