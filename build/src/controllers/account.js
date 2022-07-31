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
exports.findAccount = exports.depositBalance = exports.createAccount = void 0;
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
const account_1 = require("../repository/account");
dotenv_1.default.config();
const account = new account_1.AccountRepository();
const createAccount = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const url = process.env.URL_CLIENT || 'http://localhost:4000/v1/clients/';
    //account.createAccount("62e18e7a3b09f8b6b7ed19fa")
    const numberAcc = numberAccount();
    console.log({ id });
    yield axios_1.default.get(`${url}${id}`)
        .then(function (response) {
        account.createAccount(id, numberAcc);
    })
        .catch(function (error) {
        console.log(error);
    });
    return true;
});
exports.createAccount = createAccount;
const depositBalance = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { idClient, amount, accountNumber } = data;
    // if (Math.sign(amount) === -1) {
    //   return undefined;
    // }
    let actualBalance = 0;
    // Verifico si existe un numero de cuenta asociado al id
    const clientExist = yield account.findAccountByIdClient(idClient, accountNumber);
    console.log(typeof clientExist);
    if (!clientExist) {
        return undefined;
    }
    actualBalance = clientExist.accounts[0].balance;
    // Si existe el cliente y la cuenta, sumamos la wea
    const newBalance = depositOperation(actualBalance, amount);
    // Update del Balance
    const newUpdate = yield account.updateAccount(idClient, accountNumber, newBalance);
    // Retorno nuevo saldo
    if (newUpdate) {
        return true;
    }
});
exports.depositBalance = depositBalance;
const findAccount = (id) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(id);
    const response = yield account.findAccount(id);
    return response;
});
exports.findAccount = findAccount;
const numberAccount = () => {
    let min = 1000000000;
    let max = 9000000000;
    return Math.floor(Math.random() * min) + max;
};
const depositOperation = (depositBalance, amount) => {
    return depositBalance + amount;
};
