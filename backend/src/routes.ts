import { Router } from "express";

import { UserController } from "./controllers/UserController";

    const userController = new UserController();
    const router = Router();

        router.post("/users", userController.create);

            export { router };