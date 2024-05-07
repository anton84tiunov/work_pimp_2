import { Request, Response } from 'express';
import { LocationService } from '../../../core/services/locations/LocationService';
import { LocationEntity } from '../../../core/entities/LocationEntity';
import logger from '../../../utils/logger';

const locationService = new LocationService();

export const getAllLocations = async (req: Request, res: Response) => {
  try {
    const locations = await locationService.getAllLocations();
    res.status(200).json(locations);
  } catch (error) {
    logger.error(error);
    res.status(500).json({ error: 'Failed to get locations' });
  }
};

export const createLocation = async (req: Request, res: Response) => {
  try {
    const locationData: LocationEntity = req.body;
    const newLocation = await locationService.createLocation(locationData);
    res.status(201).json(newLocation);
  } catch (error) {
    logger.error(error);
    res.status(500).json({ error: 'Failed to create location' });
  }
};