import CarsInterface from '../types/Cars.type'
import { CarsEntity } from '../entities/Cars.entity'
import CarsRepository from '../repository/Cars.repository'


class CarsService {

    public async insertNew (reqInputs: CarsInterface): Promise<CarsEntity> {

        let newInsert

        try {
            newInsert = await CarsRepository.insertNew(reqInputs)
        } catch (err) {
            throw err
        }

        return newInsert

    }

}

export default new CarsService()