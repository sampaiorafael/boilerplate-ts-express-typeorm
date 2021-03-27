import { RequestHandler, Request, Response, NextFunction } from 'express';

import CarScheme from '../schemes/Cars.scheme'
import CarsService from '../services/Cars.service'
import CarInterface from '../types/Cars.type';


class CarsController {

    public async insertNew (req: Request, res: Response, next: NextFunction): Promise<Response> {

        let reqInputs = req.body as CarInterface

        const { error, value } = CarScheme.validate(reqInputs)

        if (error)
            return res.status(400).json({status: 'failed', msg: 'Fill all the required inputs'})

        let newInsert;

        try {
            newInsert = await CarsService.insertNew(reqInputs)
        } catch (err) {
            return res.status(400).json({status: 'failed', msg: err.message})
        }

        return res.status(200).json({status: 'success', data: newInsert})

    }

}

export default new CarsController()