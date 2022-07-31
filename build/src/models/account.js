"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const accountSchema = new mongoose_1.default.Schema({
    _id: {
        type: "ObjectId",
        required: true,
        unique: true,
    },
    accounts: [
        {
            number: {
                type: Number,
                required: true
            },
            balance: {
                type: Number,
                required: true
            }
        }
    ]
});
const Account = mongoose_1.default.model('Account', accountSchema);
exports.Account = Account;
