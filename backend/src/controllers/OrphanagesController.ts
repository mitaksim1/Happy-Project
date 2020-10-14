import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Orphanage from '../models/Orphanage';

export default {
    async create(request: Request, response: Response) {
        // console.log(request.body);
    const {
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends,
    } = request.body;

    // Which schema model we want to use
    const orphanagesRepository = getRepository(Orphanage);

    // Creates an orphanage
    const orphanage = orphanagesRepository.create({
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends,
    });

    // Saves the created orphanage into the db
    await orphanagesRepository.save(orphanage);

    return response.status(201).json(orphanage);
    }
}