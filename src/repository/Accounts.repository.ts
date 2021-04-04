import { EntityRepository, Repository, getRepository } from 'typeorm';

import { AccountsEntity } from '../entities/Accounts.entity'

@EntityRepository(AccountsEntity)
class AccountsRepository extends Repository<AccountsEntity> {

    public async insertNewAccount (data: Accounts.newAccountInputs): Promise<AccountsEntity> {

        const repository = getRepository(AccountsEntity)

        let newAccont

        try {
            newAccont = await repository.save(data)
        } catch (err) {
            throw err.message
        }

        return newAccont

    }

}

export default new AccountsRepository()