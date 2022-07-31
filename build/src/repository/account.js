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
const bson_1 = require("bson");
class AccountRepository {
    constructor() {
        this.createAccount = (id, numberAcc) => __awaiter(this, void 0, void 0, function* () {
            //accountRepository.userId = new ObjectId(id);
            console.log("repository ->", { id });
            const accountExist = yield this.findAccount(id);
            if (accountExist) {
                // accountExist.accounts.push({
                //     number: numberAcc,
                //     balance: 0.00
                // })
                // const ex2 = new Account(accountExist)
                // return ex2.save();
                const execute = account_1.Account.findByIdAndUpdate({ _id: accountExist._id }, {
                    $push: {
                        accounts: {
                            number: numberAcc,
                            balance: 0.00
                        }
                    }
                }).exec();
            }
            const ex = {
                _id: new bson_1.ObjectId(id),
                accounts: [{ number: numberAcc, balance: 0.00 }]
            };
            console.log(ex._id);
            const ex2 = new account_1.Account(ex);
            return ex2.save();
        });
        this.findAccount = (id) => __awaiter(this, void 0, void 0, function* () {
            const account = yield account_1.Account.findById(id);
            return account;
        });
        this.findAccountByIdClient = (idClient, accountNumber) => __awaiter(this, void 0, void 0, function* () {
            const accountResponse = yield account_1.Account.findOne({
                _id: idClient,
                accounts: { $elemMatch: { number: accountNumber } }
            }).exec();
            console.log('accountResponse', JSON.stringify(accountResponse));
            if (!accountResponse) {
                return undefined;
            }
            return accountResponse;
        });
        this.updateAccount = (idClient, accountNumber, newBalance) => __awaiter(this, void 0, void 0, function* () {
            const newUpdate = yield account_1.Account.updateMany({
                _id: idClient,
                accounts: { $elemMatch: { number: accountNumber } }
            }, {
                $set: {
                    'accounts.$.balance': newBalance
                }
            }).exec();
            return newUpdate;
        });
    }
}
exports.AccountRepository = AccountRepository;
