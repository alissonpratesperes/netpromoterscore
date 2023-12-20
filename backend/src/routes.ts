import { Router } from "express";

import { UserController } from "./controllers/UserController";
import { SurveyController } from "./controllers/SurveyController";

    const userController = new UserController();
    const surveyController = new SurveyController();
    const router = Router();

        router.post("/users", userController.create);
        router.post("/surveys", surveyController.create);
        router.get("/surveys", surveyController.index);

            export { router };