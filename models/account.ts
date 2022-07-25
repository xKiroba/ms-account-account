import mongoose from 'mongoose'

const accountSchema = new mongoose.Schema({
    rut:{
        type: String,
        required: true
    },
    //cuentas: [cuentas]

})

// const cuentas = [
//     {
//         "numero": string,
//         "saldo": number
//     }
// ]
const Account=mongoose.model('Account', accountSchema)

export { Account }