"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountRepository = void 0;
const account_1 = require("../src/models/account");
class AccountRepository {
    constructor() {
        this.createAccount = (rut) => {
            const account = new account_1.Account();
            account.rut = rut;
            account.save();
        };
    }
}
exports.AccountRepository = AccountRepository;
