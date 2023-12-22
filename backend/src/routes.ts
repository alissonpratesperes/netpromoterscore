import { Router } from "express";

import { UserController } from "./controllers/UserController";
import { SurveyController } from "./controllers/SurveyController";
import { AnswerController } from "./controllers/AnswerController";
import { SendMailController } from "./controllers/SendMailController";

    const userController = new UserController();
    const surveyController = new SurveyController();
    const answerController = new AnswerController();
    const sendMailController = new SendMailController();
    const router = Router();

        router.post("/users", userController.create);
        router.get("/surveys", surveyController.index);
        router.post("/surveys", surveyController.create);
        router.post("/sendMail", sendMailController.execute);
        router.get("/answers/:value", answerController.execute);

            export { router };