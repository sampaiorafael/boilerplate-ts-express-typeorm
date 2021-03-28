declare namespace Accounts {

    export interface newAccountInputs {
        firstName: string,
        lastName: string,
        login: string,
        password: string,
        passwordHint: string,
        email: string
    }

    export interface hashedPassword {
        passwordHash: string,
        passwordSalt: string
    }

}