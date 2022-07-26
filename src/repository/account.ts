import { Account } from '../models/account'

const accountRepository = new Account()

export class AccountRepository {
    
    createAccount = async (id: string) => {
        accountRepository.userId = id
        await accountRepository.save()
    }

    findAccount = async (userId:string) =>{
       const account = await Account.findById(userId)
       console.log(account)
       return account
    }
}  

