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
exports.Profile = void 0;
var mongoose_1 = __importStar(require("mongoose"));
var ProfileSchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'user'
    },
    company: {
        type: String
    },
    website: {
        type: String
    },
    location: {
        type: String
    },
    status: {
        type: String,
        required: true
    },
    skills: {
        type: [String],
        required: true
    },
    bio: {
        type: String
    },
    githubusername: {
        type: String
    },
    experience: [
        {
            title: {
                type: String,
                required: true
            },
            company: {
                type: String,
                required: true
            },
            location: {
                type: String
            },
            from: {
                type: Date,
                required: true
            },
            to: {
                type: Date
            },
            current: {
                type: Boolean,
                default: false
            },
            description: {
                type: String
            }
        }
    ],
    education: [
        {
            school: {
                type: String,
                required: true
            },
            degree: {
                type: String,
                required: true
            },
            fieldofstudy: {
                type: String,
                required: true
            },
            from: {
                type: Date,
                required: true
            },
            to: {
                type: Date
            },
            current: {
                type: Boolean,
                default: false
            },
            description: {
                type: String
            }
        }
    ],
    social: {
        youtube: {
            type: String
        },
        twitter: {
            type: String
        },
        facebook: {
            type: String
        },
        linkedin: {
            type: String
        },
        instagram: {
            type: String
        }
    },
    date: {
        type: Date,
        default: Date.now
    }
});
var Profile = mongoose_1.model('profile', ProfileSchema);
exports.Profile = Profile;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZmlsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL21vZGVscy9Qcm9maWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtREFBb0U7QUF1Q3BFLElBQU0sYUFBYSxHQUFXLElBQUksaUJBQU0sQ0FBQztJQUN2QyxJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUUsa0JBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVE7UUFDcEMsR0FBRyxFQUFFLE1BQU07S0FDWjtJQUNELE9BQU8sRUFBRTtRQUNQLElBQUksRUFBRSxNQUFNO0tBQ2I7SUFDRCxPQUFPLEVBQUU7UUFDUCxJQUFJLEVBQUUsTUFBTTtLQUNiO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsSUFBSSxFQUFFLE1BQU07S0FDYjtJQUNELE1BQU0sRUFBRTtRQUNOLElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLElBQUk7S0FDZjtJQUNELE1BQU0sRUFBRTtRQUNOLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQztRQUNkLFFBQVEsRUFBRSxJQUFJO0tBQ2Y7SUFDRCxHQUFHLEVBQUU7UUFDSCxJQUFJLEVBQUUsTUFBTTtLQUNiO0lBQ0QsY0FBYyxFQUFFO1FBQ2QsSUFBSSxFQUFFLE1BQU07S0FDYjtJQUNELFVBQVUsRUFBRTtRQUNaO1lBQ0UsS0FBSyxFQUFFO2dCQUNMLElBQUksRUFBRSxNQUFNO2dCQUNaLFFBQVEsRUFBRSxJQUFJO2FBQ2Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsSUFBSSxFQUFFLE1BQU07Z0JBQ1osUUFBUSxFQUFFLElBQUk7YUFDZjtZQUNELFFBQVEsRUFBRTtnQkFDUixJQUFJLEVBQUUsTUFBTTthQUNiO1lBQ0QsSUFBSSxFQUFFO2dCQUNKLElBQUksRUFBRSxJQUFJO2dCQUNWLFFBQVEsRUFBRSxJQUFJO2FBQ2Y7WUFDRCxFQUFFLEVBQUU7Z0JBQ0YsSUFBSSxFQUFFLElBQUk7YUFDWDtZQUNELE9BQU8sRUFBRTtnQkFDUCxJQUFJLEVBQUUsT0FBTztnQkFDYixPQUFPLEVBQUUsS0FBSzthQUNmO1lBQ0QsV0FBVyxFQUFFO2dCQUNYLElBQUksRUFBRSxNQUFNO2FBQ2I7U0FDRjtLQUFDO0lBQ0YsU0FBUyxFQUFFO1FBQ1Q7WUFDQSxNQUFNLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLE1BQU07Z0JBQ1osUUFBUSxFQUFFLElBQUk7YUFDZjtZQUNELE1BQU0sRUFBRTtnQkFDTixJQUFJLEVBQUUsTUFBTTtnQkFDWixRQUFRLEVBQUUsSUFBSTthQUNmO1lBQ0QsWUFBWSxFQUFFO2dCQUNaLElBQUksRUFBRSxNQUFNO2dCQUNaLFFBQVEsRUFBRSxJQUFJO2FBQ2Y7WUFDRCxJQUFJLEVBQUU7Z0JBQ0osSUFBSSxFQUFFLElBQUk7Z0JBQ1YsUUFBUSxFQUFFLElBQUk7YUFDZjtZQUNELEVBQUUsRUFBRTtnQkFDRixJQUFJLEVBQUUsSUFBSTthQUNYO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLElBQUksRUFBRSxPQUFPO2dCQUNiLE9BQU8sRUFBRSxLQUFLO2FBQ2Y7WUFDRCxXQUFXLEVBQUU7Z0JBQ1gsSUFBSSxFQUFFLE1BQU07YUFDYjtTQUNBO0tBQ0Y7SUFDRCxNQUFNLEVBQUU7UUFDTixPQUFPLEVBQUU7WUFDUCxJQUFJLEVBQUUsTUFBTTtTQUNiO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsSUFBSSxFQUFFLE1BQU07U0FDYjtRQUNELFFBQVEsRUFBRTtZQUNSLElBQUksRUFBRSxNQUFNO1NBQ2I7UUFDRCxRQUFRLEVBQUU7WUFDUixJQUFJLEVBQUUsTUFBTTtTQUNiO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsSUFBSSxFQUFFLE1BQU07U0FDYjtLQUNGO0lBQ0QsSUFBSSxFQUFFO1FBQ0osSUFBSSxFQUFFLElBQUk7UUFDVixPQUFPLEVBQUUsSUFBSSxDQUFDLEdBQUc7S0FDbEI7Q0FDRixDQUFDLENBQUM7QUFFSCxJQUFNLE9BQU8sR0FBb0IsZ0JBQUssQ0FBVyxTQUFTLEVBQUUsYUFBYSxDQUFDLENBQUM7QUFHekUsMEJBQU8ifQ==