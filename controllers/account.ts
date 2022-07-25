import { Account } from '../models/account'
import  axios from 'axios'
import dotenv from 'dotenv';
dotenv.config();

export const createAccount=async (rut:string)=>{
   // const url= process.env.URL_CLIENT.toString() || 'http://localhost:4000/v1/clients/'
    await axios.get(`${rut}`)
    .then(function (response) {
        const account= new Account()
        account.rut=rut
        account.save()
      })
      .catch(function (error) {
        console.log(error);
      })
    return true
}