import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";

import { SurveysUsersRepository } from "../repositories/SurveysUsersRepository";

    class AnswerController {
        async execute(request: Request, response: Response) {
            const { value } = request.params;
            const { u } = request.query;
            const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);
            const surveyUser = await surveysUsersRepository.findOne({ id: String(u) });

                if(!surveyUser) {
                    return response.status(400).json({ error: "SurveyUser doesn't exists!" });
                };
                if(surveyUser.value != null) {
                    return response.status(400).json({ error: "SurveyUser already has a value!" });
                };

                    surveyUser.value = Number(value);

                        await surveysUsersRepository.save(surveyUser);

                            return response.status(200).json(surveyUser);
        };
    };

        export { AnswerController };