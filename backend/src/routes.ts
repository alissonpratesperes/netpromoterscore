import { Router } from "express";

import { UserController } from "./controllers/UserController";
import { SurveyController } from "./controllers/SurveyController";
import { SendMailController } from "./controllers/SendMailController";

    const userController = new UserController();
    const surveyController = new SurveyController();
    const sendMailController = new SendMailController();
    const router = Router();

        router.post("/users", userController.create);
        router.get("/surveys", surveyController.index);
        router.post("/surveys", surveyController.create);
        router.post("/sendMail", sendMailController.execute);

            export { router };