"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setAlert = void 0;
var uuid = __importStar(require("uuid"));
var constants_1 = require("./constants");
exports.setAlert = function (msg, alertType, timeout) {
    if (timeout === void 0) { timeout = 5000; }
    return function (dispatch) {
        var id = uuid.v4();
        dispatch({
            type: constants_1.SET_ALERT,
            payload: { msg: msg, alertType: alertType, id: id }
        });
        setTimeout(function () {
            dispatch({
                type: constants_1.REMOVE_ALERT,
                payload: id
            });
        }, timeout);
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9jbGllbnQvc3JjL2FjdGlvbnMvYWxlcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlDQUE2QjtBQUU3Qix5Q0FBaUY7QUFFcEUsUUFBQSxRQUFRLEdBQUcsVUFBQyxHQUFXLEVBQUUsU0FBaUIsRUFBRSxPQUFzQjtJQUF0Qix3QkFBQSxFQUFBLGNBQXNCO0lBQzdFLE9BQUEsVUFBQyxRQUFvQztRQUNyQyxJQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDckIsUUFBUSxDQUFDO1lBQ1AsSUFBSSxFQUFFLHFCQUFTO1lBQ2YsT0FBTyxFQUFFLEVBQUUsR0FBRyxLQUFBLEVBQUUsU0FBUyxXQUFBLEVBQUUsRUFBRSxJQUFBLEVBQUU7U0FDaEMsQ0FBQyxDQUFDO1FBRUgsVUFBVSxDQUFDO1lBQ1QsUUFBUSxDQUFDO2dCQUNQLElBQUksRUFBRSx3QkFBWTtnQkFDbEIsT0FBTyxFQUFFLEVBQUU7YUFDWixDQUFDLENBQUE7UUFDSixDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDZCxDQUFDO0FBYkMsQ0FhRCxDQUFBIn0=