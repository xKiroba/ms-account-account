import express, { Request, Response } from 'express'

import { createAccount, depositBalance, findAccount } from '../controllers/account'
const router = express.Router()

router.post('/api/createAccount/:id', (req: Request, res: Response) => {
    createAccount(req.params.id)
    return res.send('Cuenta creada')
})


router.put('/api/account/widthdrawBalance', (req: Request, res: Response) => {
    return res.send('Retiro exitoso')
})

router.put('/api/account/depositBalance', async (req: Request, res: Response) => {
    const body = req.body;
    const response = await depositBalance(body)

    if (response) {
        return res.send({status: 'OK', message: 'Balance Actualizado. Saldo Añadido.'})
    } else {
        return res.send({status: 'NO OK', message: 'Mano revisa eso'})
    }
})

router.get('/api/account/:id', async (req: Request, res: Response) => {
    const respuesta = await findAccount(req.params.id)
    return res.send(respuesta)
})
export { router as accountRouter }