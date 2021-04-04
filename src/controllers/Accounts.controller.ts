import { RequestHandler, Request, Response, NextFunction } from 'express';

import AccountScheme from '../schemes/Accounts.scheme'
import AccountsService from '../services/Accounts.service'

class AccountsController {

    public async insertNewAccount (req: Request, res: Response, next: NextFunction): Promise<Response> {

        let reqInputs = req.body as Accounts.newAccountInputs

        const { error, value } = AccountScheme.validateSchema(reqInputs)

        if (error)
            return res.status(400).json({status: 'failed', msg: error})

        let newAccount

        try {
            newAccount = await AccountsService.insertNewAccount(value)
        } catch (err) {
            return res.status(400).json({status: 'failed', msg: err})
        }

        return res.status(201).json({status: 'success', data: newAccount})

    }

}

export default new AccountsController()