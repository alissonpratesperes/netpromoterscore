import { getRepository } from "typeorm";
import { Request, Response } from "express";

import { User } from "../models/User";

    class UserController {
        async create(request: Request, response: Response) {
            const { name, email } = request.body;
            const usersRepository = getRepository(User);
            const userAlreadyExists = await usersRepository.findOne({ email });

                if(userAlreadyExists) {
                    return response.status(400).json({ error: "User already exists!" });
                };

            const user = usersRepository.create({ name, email });

                await usersRepository.save(user);

                    return response.status(200).json(user);
        };
    };

        export { UserController };