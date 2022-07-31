import { Account } from '../models/account'
import { ObjectId } from 'bson';

export class AccountRepository {

    createAccount = async (id: string, numberAcc: number) => {
        //accountRepository.userId = new ObjectId(id);
        console.log("repository ->", { id })
        const accountExist = await this.findAccount(id)

        if (accountExist) {
            // accountExist.accounts.push({
            //     number: numberAcc,
            //     balance: 0.00
            // })
            // const ex2 = new Account(accountExist)
            // return ex2.save();
            const execute = Account.findByIdAndUpdate(
                { _id: accountExist._id },
                {
                    $push: {
                        accounts: {
                            number: numberAcc,
                            balance: 0.00
                        }
                    }
                }
            ).exec()
        }

        const ex = {
            _id: new ObjectId(id),
            accounts: [{ number: numberAcc, balance: 0.00 }]
        };

        console.log(ex._id)
        const ex2 = new Account(ex)

        return ex2.save();
    }

    findAccount = async (id: string) => {
        const account = await Account.findById(id)
        return account
    }

    findAccountByIdClient = async (idClient:string, accountNumber: number) => {
        const accountResponse = await Account.findOne(
            {
                _id: idClient,
                accounts: {$elemMatch: {number: accountNumber} }
            }
        ).exec()
        console.log('accountResponse', JSON.stringify(accountResponse))
        if (!accountResponse) {
            return undefined;
        } 

        return accountResponse
    }

    updateAccount = async (idClient: string, accountNumber: number, newBalance: number) => {
        const newUpdate = await Account.updateMany(
            {
                _id: idClient,
                accounts: { $elemMatch: { number: accountNumber } }
            },
            {
                $set: {
                    'accounts.$.balance': newBalance
                }
            }
        ).exec()

        return newUpdate
    }
}

