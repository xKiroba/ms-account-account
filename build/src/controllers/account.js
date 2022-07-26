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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAccount = exports.createAccount = void 0;
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
const account_1 = require("../repository/account");
dotenv_1.default.config();
const account = new account_1.AccountRepository();
const createAccount = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const url = process.env.URL_CLIENT || 'http://localhost:4000/v1/clients/';
    yield axios_1.default.get(`${url}${id}`)
        .then(function (response) {
        account.createAccount(id);
    })
        .catch(function (error) {
        console.log(error);
    });
    return true;
});
exports.createAccount = createAccount;
const findAccount = (id) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(id);
    const userId = id;
    yield account.findAccount(userId);
});
exports.findAccount = findAccount;
// export const withdrawBalance = async (amount:number) =>{
//   const amount = 
// }
