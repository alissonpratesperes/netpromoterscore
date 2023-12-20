import { getRepository } from "typeorm";
import { Request, Response } from "express";

import { Survey } from "../models/Survey";

    class SurveyController {
        async create(request: Request, response: Response) {
            const { title, description } = request.body;
            const surveysRepository = getRepository(Survey);
            const survey = surveysRepository.create({ title, description });

                await surveysRepository.save(survey);

                    return response.status(201).json(survey);
        };
    };

        export { SurveyController };