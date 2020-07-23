"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var db_1 = require("./config/db");
var auth_1 = require("./routes/api/auth");
var profile_1 = require("./routes/api/profile");
var post_1 = require("./routes/api/post");
var users_1 = require("./routes/api/users");
var app = express_1.default();
// Connect Database
db_1.connectDB();
// Init Middleware
app.use(express_1.default.json());
// Define Routes
app.use('/api/auth', auth_1.auth);
app.use('/api/profile', profile_1.profile);
app.use('/api/post', post_1.post);
app.use('/api/users', users_1.users);
var PORT = process.env.PORT || 5000;
app.listen(PORT, function () { return console.log("Server started on http://localhost:" + PORT); });
/*
***
"build": "tsc -p tsconfig.json",
   "build:watch": "yarn build --watch",
   "start": "node dist/server.js",
   "start:watch":"nodemon dist/server.js --log",
   "client": "yarn --cwd ./client/src start",
   "server": "concurrently \"yarn build:watch\" \"yarn start:watch\"",
   "dev": "concurrently \"yarn server\" \"yarn client\""
***
*/ 
