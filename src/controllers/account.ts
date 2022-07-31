import axios from 'axios'
import dotenv from 'dotenv';
import { TransactionDTO } from '../dto/transactions.dto';
import { AccountRepository } from '../repository/account'
dotenv.config();

const account = new AccountRepository()

export const createAccount = async (id: string) => {
  const url = process.env.URL_CLIENT || 'http://localhost:4000/v1/clients/'
  //account.createAccount("62e18e7a3b09f8b6b7ed19fa")
  const numberAcc= numberAccount()
  console.log({id})

  await axios.get(`${url}${id}`)
    .then(function (response) {
      account.createAccount(id, numberAcc)
    })
    .catch(function (error) {
      console.log(error);
    })
  return true
}

export const depositBalance = async (data: TransactionDTO) => {
  const { idClient, amount, accountNumber } = data;

  // if (Math.sign(amount) === -1) {
  //   return undefined;
  // }
  
  let actualBalance: any = 0;
  // Verifico si existe un numero de cuenta asociado al id
  const clientExist = await account.findAccountByIdClient(idClient, accountNumber)
  console.log(typeof clientExist)
  if (!clientExist) {
    return undefined
  }

  actualBalance = clientExist.accounts[0].balance

  // Si existe el cliente y la cuenta, sumamos la wea
  const newBalance = depositOperation(actualBalance, amount)

  // Update del Balance
  const newUpdate = await account.updateAccount(idClient, accountNumber, newBalance)


  // Retorno nuevo saldo

  if (newUpdate) {
    return true
  }
}

export const findAccount =async (id:string) => {
  console.log(id)
  const response = await account.findAccount(id)
  return response
}

const numberAccount = ()=>{
  let min = 1000000000;
  let max = 9000000000;
  return Math.floor(Math.random() * min) + max;
}

const depositOperation = (depositBalance: any, amount: number) => {
  return depositBalance + amount
}


