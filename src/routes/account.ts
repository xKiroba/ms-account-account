import express, {Request, Response} from 'express'

import { createAccount,findAccount } from '../controllers/account'
const router = express.Router()

router.get('/api/account/',(req:Request,res:Response)=>{
    createAccount("6576805e-af57-4158-ba05-6ec174de200b")
    return res.send('una respuesta')
})

router.post('/api/account', (req:Request,res:Response)=>{
    
    return res.send('otra respuesta')
})

router.put('/api/widthdrawBalance',(req:Request,res:Response)=>{
    return res.send('Retiro exitoso')
})

router.put('/api/depositBalance',(req:Request,res:Response)=>{
    return res.send('Deposito exitoso')
})

router.get('/api/account/:id',(req:Request,res:Response)=>{
    findAccount(req.params.id)
    return res.send('algo')
})
export{router as accountRouter}