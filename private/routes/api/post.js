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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3JvdXRlcy9hcGkvcG9zdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvREFBNkQ7QUFDN0Qsd0RBQXNEO0FBQ3RELDBDQUFnRDtBQUNoRCx1REFBcUY7QUFFckYsMENBQStDO0FBQy9DLElBQU0sTUFBTSxHQUFXLGlCQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFeEMsd0JBQXdCO0FBQ3hCLHdCQUF3QjtBQUN4QixrQkFBa0I7QUFFbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQ2I7SUFDRSxvQkFBUTtJQUNSO1FBQ0UseUJBQUssQ0FBQyxNQUFNLEVBQUUsa0JBQWtCLENBQUM7YUFDOUIsR0FBRyxFQUFFO2FBQ0wsT0FBTyxFQUFFO0tBQ2I7Q0FDRixFQUNELFVBQU8sR0FBWSxFQUFFLEdBQWE7Ozs7O2dCQUMxQixNQUFNLEdBQTRCLG9DQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUU5RCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxFQUFFO29CQUNyQixzQkFBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxFQUFBO2lCQUN4RDs7OztnQkFHNEIscUJBQU0sV0FBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsRUFBQTs7Z0JBQXpFLElBQUksR0FBaUIsU0FBb0Q7Z0JBRS9FLElBQUksQ0FBQyxJQUFJLEVBQUU7b0JBQ1Qsc0JBQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsbUJBQW1CLEVBQUUsQ0FB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