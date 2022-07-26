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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountRepository = void 0;
const account_1 = require("../models/account");
const accountRepository = new account_1.Account();
class AccountRepository {
    constructor() {
        this.createAccount = (id) => __awaiter(this, void 0, void 0, function* () {
            accountRepository.userId = id;
            yield accountRepository.save();
        });
        this.findAccount = (userId) => __awaiter(this, void 0, void 0, function* () {
            const account = yield account_1.Account.findById(userId);
            console.log(account);
            return account;
        });
    }
}
exports.AccountRepository = AccountRepository;