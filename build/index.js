"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const account_1 = require("./src/routes/account");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(account_1.accountRouter);
mongoose_1.default.connect('mongodb://localhost:27017/accounts', {}, () => {
    console.log('Ta conectao viteh');
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
