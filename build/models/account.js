"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const accountSchema = new mongoose_1.default.Schema({
    rut: {
        type: String,
        required: true
    },
    //cuentas: [cuentas]
});
// const cuentas = [
//     {
//         "numero": string,
//         "saldo": number
//     }
// ]
const Account = mongoose_1.default.model('Account', accountSchema);
exports.Account = Account;
