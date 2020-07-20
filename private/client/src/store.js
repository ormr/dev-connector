"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
var redux_1 = require("redux");
var redux_devtools_extension_1 = require("redux-devtools-extension");
var redux_thunk_1 = __importDefault(require("redux-thunk"));
var reducers_1 = require("./reducers");
var initialState = {};
var middleware = [redux_thunk_1.default];
var store = redux_1.createStore(reducers_1.rootReducer, initialState, redux_devtools_extension_1.composeWithDevTools(redux_1.applyMiddleware.apply(void 0, __spread(middleware))));
exports.store = store;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9jbGllbnQvc3JjL3N0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0JBQXFEO0FBQ3JELHFFQUErRDtBQUMvRCw0REFBZ0M7QUFDaEMsdUNBQXlDO0FBRXpDLElBQU0sWUFBWSxHQUFHLEVBRXBCLENBQUE7QUFFRCxJQUFNLFVBQVUsR0FBRyxDQUFDLHFCQUFLLENBQUMsQ0FBQztBQUUzQixJQUFNLEtBQUssR0FBRyxtQkFBVyxDQUN2QixzQkFBVyxFQUNYLFlBQVksRUFDWiw4Q0FBbUIsQ0FBQyx1QkFBZSx3QkFBSSxVQUFVLEdBQUUsQ0FDcEQsQ0FBQztBQUdBLHNCQUFLIn0=