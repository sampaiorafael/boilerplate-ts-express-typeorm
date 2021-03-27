import { EntityRepository, Repository, getRepository } from 'typeorm';

import { CarsEntity } from '../entities/Cars.entity'
import CarsInterface from '../types/Cars.type'

@EntityRepository(CarsEntity)
class CarsRepository extends Repository<CarsEntity> {

    public async insertNew (reqInputs: CarsInterface): Promise<CarsEntity> {

        const repository = getRepository(CarsEntity)

        let query

        const { brand, model, year, category, value, motorHp, rate, description } = reqInputs

        try {
            query = await repository.save({ brand, model, year, category, value, motorHp, rate, description })
        } catch (err) {
            throw err
        }

        return query

    }
    
}

export default new CarsRepository()