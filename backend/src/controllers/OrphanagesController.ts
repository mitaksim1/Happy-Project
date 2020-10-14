import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Orphanage from '../models/Orphanage';

export default {
    // List all orphanages
    async index(request: Request, response: Response) {
        const orphanagesRepository = getRepository(Orphanage);

        const orphanages = await orphanagesRepository.find();

        return response.json(orphanages);
    },

    // Show a single orphanage
    async show(request: Request, response: Response) {
        const { id } = request.params;

        const orphanagesRepository = getRepository(Orphanage);

        const orphanage = await orphanagesRepository.findOneOrFail(id);

        return response.json(orphanage);
    },

    // Creates an orphanage
    async create(request: Request, response: Response) {
        // console.log(request.body);
        console.log(request.files);
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

    // Get images from request.files
    const requestImages = request.files as Express.Multer.File[];

    const images = requestImages.map(image => {
        return { path: image.filename }
    })

    // Creates an orphanage
    const orphanage = orphanagesRepository.create({
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends,
        images
    });

    // Saves the created orphanage into the db
    await orphanagesRepository.save(orphanage);

    return response.status(201).json(orphanage);
    }
}