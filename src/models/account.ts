import mongoose from 'mongoose'

const accountSchema = new mongoose.Schema({
    userId:{
        type: String,
        required: true,
        maxlength: 60 
    },
    accounts: [
        {
            number: { 
                type: Number,
                required: true
            },
            balance: {
                type:Number,
                required:true
            }
        },
    ]
})
const Account=mongoose.model('Account', accountSchema)

export { Account }