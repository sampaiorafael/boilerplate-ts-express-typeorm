import joi from 'joi'

class AccountsScheme {

    private scheme = joi.object({

        firstName: joi.string()
        .max(20)
        .required(),

        lastName: joi.string()
        .max(20)
        .required(),

        login: joi.string()
        .max(15)
        .required(),

        password: joi.string()
        .max(20)
        .required(),

        passwordHint: joi.string()
        .max(20)
        .required(),

        email: joi.string()
        .max(50)
        .required()

    })

    public validateSchema (object: object): joi.ValidationResult {
        return this.scheme.validate(object)
    }

}

export default new AccountsScheme()