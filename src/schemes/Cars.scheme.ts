import joi from 'joi';

class CarsScheme {

    private schema = joi.object({

        brand: joi.string() 
        .required(),

        model: joi.string() 
        .required(),

        year: joi.number() 
        .required(),

        category: joi.string() 
        .required(),

        value: joi.number() 
        .required(),

        motorHp: joi.number() 
        .required(),

        rate: joi.number() 
        .required(),

        description: joi.string() 
        .required(),

    })

    public validate (object: object): joi.ValidationResult {
        return this.schema.validate(object)
    }

}

export default new CarsScheme()