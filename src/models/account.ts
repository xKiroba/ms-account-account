import mongoose, { Schema, Types } from 'mongoose'


const accountSchema = new mongoose.Schema({
    _id:{
        type: "ObjectId",
        required: true,
        unique:true,
    },
    accounts: [
        {
            number: { 
                type: Number,
                required: true
            },
            balance: {
                type: Number,
                required:true
            }
        }
    ]
})
const Account=mongoose.model('Account', accountSchema)

export { Account }