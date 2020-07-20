"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
var mongoose_1 = require("mongoose");
var PostSchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'users'
    },
    text: {
        type: String,
        required: true
    },
    name: {
        type: String
    },
    avatar: {
        type: String
    },
    likes: [
        {
            user: {
                type: mongoose_1.Schema.Types.ObjectId,
                ref: 'users'
            }
        }
    ],
    comments: [
        {
            user: {
                type: mongoose_1.Schema.Types.ObjectId,
                ref: 'users'
            },
            text: {
                type: String,
                required: true
            },
            avatar: {
                type: String
            },
            date: {
                type: Date,
                default: Date.now
            }
        }
    ],
    date: {
        type: Date,
        default: Date.now
    }
});
var Post = mongoose_1.model('post', PostSchema);
exports.Post = Post;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUG9zdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL21vZGVscy9Qb3N0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUFvRTtBQW1CcEUsSUFBTSxVQUFVLEdBQVcsSUFBSSxpQkFBTSxDQUFDO0lBQ3BDLElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxpQkFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRO1FBQzNCLEdBQUcsRUFBRSxPQUFPO0tBQ2I7SUFDRCxJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxJQUFJO0tBQ2Y7SUFDRCxJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUUsTUFBTTtLQUNiO0lBQ0QsTUFBTSxFQUFFO1FBQ04sSUFBSSxFQUFFLE1BQU07S0FDYjtJQUNELEtBQUssRUFBRTtRQUNMO1lBQ0UsSUFBSSxFQUFFO2dCQUNKLElBQUksRUFBRSxpQkFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRO2dCQUMzQixHQUFHLEVBQUUsT0FBTzthQUNiO1NBQ0Y7S0FDRjtJQUNELFFBQVEsRUFBRTtRQUNSO1lBQ0UsSUFBSSxFQUFFO2dCQUNKLElBQUksRUFBRSxpQkFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRO2dCQUMzQixHQUFHLEVBQUUsT0FBTzthQUNiO1lBQ0QsSUFBSSxFQUFFO2dCQUNKLElBQUksRUFBRSxNQUFNO2dCQUNaLFFBQVEsRUFBRSxJQUFJO2FBQ2Y7WUFDRCxNQUFNLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLE1BQU07YUFDYjtZQUNELElBQUksRUFBRTtnQkFDSixJQUFJLEVBQUUsSUFBSTtnQkFDVixPQUFPLEVBQUUsSUFBSSxDQUFDLEdBQUc7YUFDbEI7U0FDRjtLQUNGO0lBQ0QsSUFBSSxFQUFFO1FBQ0osSUFBSSxFQUFFLElBQUk7UUFDVixPQUFPLEVBQUUsSUFBSSxDQUFDLEdBQUc7S0FDbEI7Q0FDRixDQUFDLENBQUM7QUFFSCxJQUFNLElBQUksR0FBaUIsZ0JBQUssQ0FBUSxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFHMUQsb0JBQUkifQ==