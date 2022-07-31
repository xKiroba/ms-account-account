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
exports.accountRouter = void 0;
const express_1 = __importDefault(require("express"));
const account_1 = require("../controllers/account");
const router = express_1.default.Router();
exports.accountRouter = router;
router.post('/api/createAccount/:id', (req, res) => {
    (0, account_1.createAccount)(req.params.id);
    return res.send('Cuenta creada');
});
router.put('/api/account/widthdrawBalance', (req, res) => {
    return res.send('Retiro exitoso');
});
router.put('/api/account/depositBalance', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const response = yield (0, account_1.depositBalance)(body);
    if (response) {
        return res.send({ status: 'OK', message: 'Balance Actualizado. Saldo Añadido.' });
    }
    else {
        return res.send({ status: 'NO OK', message: 'Mano revisa eso' });
    }
}));
router.get('/api/account/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const respuesta = yield (0, account_1.findAccount)(req.params.id);
    return res.send(respuesta);
}));
