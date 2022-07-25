import express, {Request, Response} from 'express'
import { createAccount } from '../controllers/account'
const router = express.Router()

router.get('/api/account/',(req:Request,res:Response)=>{
    return res.send('una respuesta')
})

router.post('/api/account', (req:Request,res:Response)=>{
    createAccount('24861063-')
    return res.send('otra respuesta')
})

export{router as accountRouter}