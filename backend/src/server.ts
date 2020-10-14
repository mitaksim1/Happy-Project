import express, { response } from 'express';
import { getRepository } from 'typeorm';
import Orphanage from './models/Orphanage';

import './database/connection';

const app = express();

app.use(express.json());

app.post('/orphanages', async(request, response) => {
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
});

app.listen(3333);