import logger from '../../../utils/logger';
import { LocationEntity } from '../../entities/LocationEntity';
import { LocationRepository } from '../../repositories/LocationRepository';

export class LocationService{
    async createLocation(locationData: LocationEntity): Promise<LocationEntity> {
        try {
          return await LocationRepository.save(locationData);
        } catch (error) {
          throw error;
        }
    }

    async getAllLocations(): Promise<LocationEntity[]> {
        try {
          return await LocationRepository.find({ relations: ['users'] });
        } catch (error) {
          throw error;
        }
    }
}
