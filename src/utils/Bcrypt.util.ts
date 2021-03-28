import bcrypt from 'bcrypt'

import configs from '../configs/configs'

class BcryptUtil {

    public hashPassword(password: string): Accounts.hashedPassword {

        const salt = bcrypt.genSaltSync(configs.Accounts.bcryptSalt)

        return {
            passwordHash: bcrypt.hashSync(password, salt),
            passwordSalt: salt
        }
        
    }

    public checkPassword(password: string, hashPassword:string): boolean {
        return bcrypt.compareSync(password, hashPassword)
    }

}

export default new BcryptUtil()