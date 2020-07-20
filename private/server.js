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
app.listen(PORT, function () { return console.log("Server started on port http://localhost:" + PORT); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsb0RBQThCO0FBQzlCLGtDQUF3QztBQUN4QywwQ0FBeUM7QUFDekMsZ0RBQStDO0FBQy9DLDBDQUF5QztBQUN6Qyw0Q0FBMkM7QUFFM0MsSUFBTSxHQUFHLEdBQUcsaUJBQU8sRUFBRSxDQUFDO0FBRXRCLG1CQUFtQjtBQUNuQixjQUFTLEVBQUUsQ0FBQztBQUVaLGtCQUFrQjtBQUNsQixHQUFHLENBQUMsR0FBRyxDQUFDLGlCQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUV4QixnQkFBZ0I7QUFDaEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsV0FBSSxDQUFDLENBQUM7QUFDM0IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsaUJBQU8sQ0FBQyxDQUFDO0FBQ2pDLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLFdBQUksQ0FBQyxDQUFDO0FBQzNCLEdBQUcsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLGFBQUssQ0FBQyxDQUFDO0FBRTdCLElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQztBQUV0QyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxjQUFNLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2Q0FBMkMsSUFBTSxDQUFDLEVBQTlELENBQThELENBQUMsQ0FBQyJ9