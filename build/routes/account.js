"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.accountRouter = void 0;
const express_1 = __importDefault(require("express"));
const account_1 = require("../controllers/account");
const router = express_1.default.Router();
exports.accountRouter = router;
router.get('/api/account/', (req, res) => {
    return res.send('una respuesta');
});
router.post('/api/account', (req, res) => {
    (0, account_1.createAccount)('24861063-');
    return res.send('otra respuesta');
});
