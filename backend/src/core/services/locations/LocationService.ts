import logger from '../../../utils/logger';
import { LocationEntity } from '../../entities/LocationEntity';
import { LocationRepository } from '../../repositories/locations/LocationRepository';

export class LocationService{
    async createLocation(locationData: LocationEntity): Promise<LocationEntity> {
        try {
          return await LocationRepository.save(locationData);
        } catch (error) {
          logger.error(error.stack);
          console.error('Error creating location:', error);
          throw new Error('Failed to create location');
        }
    }

    async getAllLocations(): Promise<LocationEntity[]> {
        try {
          return await LocationRepository.find({ relations: ['users'] });
        } catch (error) {
          logger.error(error.stack);
          console.error('Error getting all locations:', error);
          throw new Error('Failed to get all locations');
        }
    }
}
