import axios from 'axios'
import dotenv from 'dotenv';
import { AccountRepository } from '../repository/account'
dotenv.config();

const account = new AccountRepository()

export const createAccount = async (id: string) => {
  const url = process.env.URL_CLIENT || 'http://localhost:4000/v1/clients/'
  await axios.get(`${url}${id}`)
    .then(function (response) {
      account.createAccount(id)
    })
    .catch(function (error) {
      console.log(error);
    })
  return true


}

export const findAccount =async (id:string) => {
  console.log(id)
  const userId=id
  await account.findAccount(userId)
}

// export const withdrawBalance = async (amount:number) =>{
//   const amount = 
// }