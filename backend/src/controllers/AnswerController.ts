import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";

import { AppError } from "../errors/AppError";
import { SurveysUsersRepository } from "../repositories/SurveysUsersRepository";

    class AnswerController {
        async execute(request: Request, response: Response) {
            const { value } = request.params;
            const { u } = request.query;
            const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);
            const surveyUser = await surveysUsersRepository.findOne({ id: String(u) });

                if(!surveyUser) { throw new AppError("SurveyUser doesn't exists!"); };
                if(surveyUser.value != null) { throw new AppError("SurveyUser already has a value!") };

                    surveyUser.value = Number(value);

                        await surveysUsersRepository.save(surveyUser);

                            return response.status(200).json(surveyUser);
        };
    };

        export { AnswerController };