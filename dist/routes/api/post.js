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
exports.post = void 0;
var express_1 = __importDefault(require("express"));
var check_jwt_1 = require("../../middleware/check-jwt");
var Post_1 = require("../../models/Post");
var express_validator_1 = require("express-validator");
var User_1 = require("../../models/User");
var router = express_1.default.Router();
// @route  POST api/post
// @desc   Create a post
// @access Private
router.post('/', [
    check_jwt_1.checkJwt,
    [
        express_validator_1.check('text', 'Text is required')
            .not()
            .isEmpty()
    ]
], function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var errors, user, newPost, post_1, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                errors = express_validator_1.validationResult(req);
                if (!errors.isEmpty()) {
                    return [2 /*return*/, res.status(400).json({ errors: errors.array() })];
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, User_1.User.findById(req.user.id).select('-password')];
            case 2:
                user = _a.sent();
                if (!user) {
                    return [2 /*return*/, res.status(400).json({ msg: 'User is not found' })];
                }
                newPost = new Post_1.Post({
                    text: req.body.text,
                    name: user.name,
                    avatar: user.avatar,
                    user: req.user.id
                });
                return [4 /*yield*/, newPost.save()];
            case 3:
                post_1 = _a.sent();
                res.json(post_1);
                return [3 /*break*/, 5];
            case 4:
                err_1 = _a.sent();
                console.error(err_1.message);
                res.status(500).send('Server Error');
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); });
// @route  GET api/post
// @desc   Get all posts
// @access Private
router.get('/', check_jwt_1.checkJwt, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var posts, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Post_1.Post.find().sort({ date: -1 })];
            case 1:
                posts = _a.sent();
                res.json(posts);
                return [3 /*break*/, 3];
            case 2:
                err_2 = _a.sent();
                console.error(err_2.message);
                res.status(500).send('Server Error');
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
// @route GET api/post/:id
// @desc Get post by id
// @access Private
router.get('/:id', check_jwt_1.checkJwt, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var post_2, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Post_1.Post.findById(req.params.id)];
            case 1:
                post_2 = _a.sent();
                if (!post_2) {
                    return [2 /*return*/, res.status(404).json({ msg: 'Post not found' })];
                }
                res.json(post_2);
                return [3 /*break*/, 3];
            case 2:
                err_3 = _a.sent();
                console.error(err_3.message);
                if (err_3.kind === 'ObjectId') {
                    return [2 /*return*/, res.status(404).json({ msg: 'Post not found' })];
                }
                res.status(500).send('Server Error');
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
// @route DELETE api/post/:id
// @desc Delete post by id
// @access Private
router.delete('/:id', check_jwt_1.checkJwt, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var post_3, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, Post_1.Post.findById(req.params.id)];
            case 1:
                post_3 = _a.sent();
                if (!post_3) {
                    return [2 /*return*/, res.status(404).json({ msg: 'Post not found' })];
                }
                if (post_3.user.toString() !== req.user.id) {
                    return [2 /*return*/, res.status(401)
                            .json({ msg: 'User not authorized' })];
                }
                return [4 /*yield*/, post_3.remove()];
            case 2:
                _a.sent();
                res.json({ msg: 'Post deleted' });
                return [3 /*break*/, 4];
            case 3:
                err_4 = _a.sent();
                console.error(err_4.message);
                if (err_4.kind === 'ObjectId') {
                    return [2 /*return*/, res.status(404).json({ msg: 'Post not found' })];
                }
                res.status(500).send('Server Error');
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
// @route PUT api/post/like/:id
// @desc Like a post
// @access Private
router.put('/like/:id', check_jwt_1.checkJwt, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var post_4, err_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, Post_1.Post.findById(req.params.id)];
            case 1:
                post_4 = _a.sent();
                if (!post_4) {
                    return [2 /*return*/, res.json('Like by ID not found')];
                }
                // Check if the post has already been linked
                if (post_4.likes.filter(function (like) { return like.user.toString() === req.user.id; }).length > 0) {
                    return [2 /*return*/, res.status(400).json({ msg: 'Post already liked' })];
                }
                post_4.likes.unshift({ user: req.user.id });
                return [4 /*yield*/, post_4.save()];
            case 2:
                _a.sent();
                res.json(post_4.likes);
                return [3 /*break*/, 4];
            case 3:
                err_5 = _a.sent();
                console.error(err_5.message);
                if (err_5.kind === 'ObjectId') {
                    return [2 /*return*/, res.status(404).json({ msg: 'Id not found' })];
                }
                res.status(500).send('Server Error');
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
// @route PUT api/post/unlike/:id
// @desc Unlike a post
// @access Private
router.put('/unlike/:id', check_jwt_1.checkJwt, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var post_5, removeIndex, err_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, Post_1.Post.findById(req.params.id)];
            case 1:
                post_5 = _a.sent();
                if (!post_5) {
                    return [2 /*return*/, res.status(400).json('Id not found')];
                }
                // Check if the post has already been linked
                if (post_5.likes.filter(function (like) { return like.user.toString() === req.user.id; }).length === 0) {
                    return [2 /*return*/, res.status(400).json('Post has not yet been liked')];
                }
                removeIndex = post_5.likes.map(function (like) { return like.user.toString(); }).indexOf(req.params.id);
                post_5.likes.splice(removeIndex, 1);
                return [4 /*yield*/, post_5.save()];
            case 2:
                _a.sent();
                res.json(post_5.likes);
                return [3 /*break*/, 4];
            case 3:
                err_6 = _a.sent();
                console.error(err_6.message);
                if (err_6.kind === 'ObjectId') {
                    return [2 /*return*/, res.status(404).json({ msg: 'Id not found' })];
                }
                res.status(500).send('Server Error');
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
// @route  POST api/post/comment/:id
// @desc   Comment on a post
// @access Private
router.post('/comment/:id', [
    check_jwt_1.checkJwt,
    [
        express_validator_1.check('text', 'Text is required')
            .not()
            .isEmpty()
    ]
], function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var errors, user, post_6, newComment, err_7;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                errors = express_validator_1.validationResult(req);
                if (!errors.isEmpty()) {
                    return [2 /*return*/, res.status(400).json({ errors: errors.array() })];
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 5, , 6]);
                return [4 /*yield*/, User_1.User.findById(req.user.id).select('-password')];
            case 2:
                user = _a.sent();
                return [4 /*yield*/, Post_1.Post.findById(req.params.id)];
            case 3:
                post_6 = _a.sent();
                if (!user || !post_6) {
                    return [2 /*return*/, res.status(400).json({ msg: 'User is not found' })];
                }
                newComment = {
                    text: req.body.text,
                    name: user.name,
                    avatar: user.avatar,
                    user: req.user.id
                };
                post_6.comments.unshift(newComment);
                return [4 /*yield*/, post_6.save()];
            case 4:
                _a.sent();
                res.json(post_6.comments);
                return [3 /*break*/, 6];
            case 5:
                err_7 = _a.sent();
                console.error(err_7.message);
                if (err_7.kind === 'ObjectId') {
                    return [2 /*return*/, res.status(404).json({ msg: 'Post not found' })];
                }
                res.status(500).send('Server Error');
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); });
// @route  DELETE api/post/comment/:id/:comment_id
// @desc   Delete comment on post
// @access Private
router.delete('/comment/:id/:comment_id', check_jwt_1.checkJwt, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var post_7, comment, removeIndex, err_8;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, Post_1.Post.findById(req.params.id)];
            case 1:
                post_7 = _a.sent();
                if (!post_7) {
                    return [2 /*return*/, res
                            .status(404)
                            .json({ msg: 'Post not found' })];
                }
                comment = post_7.comments.find(function (comment) { return comment.id === req.params.comment_id; });
                if (!comment) {
                    return [2 /*return*/, res
                            .status(404)
                            .json({ msg: 'Comment does not exist' })];
                }
                // Check user
                if (comment.user.toString() !== req.user.id) {
                    return [2 /*return*/, res
                            .status(404)
                            .json({ msg: 'User not authorized' })];
                }
                removeIndex = post_7.comments
                    .map(function (comment) { return comment.user.toString(); })
                    .indexOf(req.user.id);
                post_7.comments.splice(removeIndex, 1);
                return [4 /*yield*/, post_7.save()];
            case 2:
                _a.sent();
                res.json(post_7.comments);
                return [3 /*break*/, 4];
            case 3:
                err_8 = _a.sent();
                console.error(err_8.message);
                if (err_8.kind === 'ObjectId') {
                    return [2 /*return*/, res.status(404).json({ msg: 'Post not found' })];
                }
                res.status(500).send('Server Error');
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
var post = router;
exports.post = post;
