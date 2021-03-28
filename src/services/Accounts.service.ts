import { AccountsEntity } from '../entities/Accounts.entity'
import AccountsRepository from '../repository/Accounts.repository'
import BcryptUtil from '../utils/Bcrypt.util'

class AccountsService {
    
    public async insertNewAccount (reqInputs: Accounts.newAccountInputs): Promise<AccountsEntity> {

        let newAccount

        let hashPassword = BcryptUtil.hashPassword(reqInputs.password)

        let data = {...reqInputs, ...hashPassword}

        try {
            newAccount = await AccountsRepository.insertNewAccount(data)
        } catch (err) {
            throw err
        }

        return newAccount

    }

}

export default new AccountsService()