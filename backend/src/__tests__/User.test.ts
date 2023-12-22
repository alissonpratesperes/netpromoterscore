import request from "supertest";

import { app } from "../app";
import createConnection from "../database";

    describe("Users", () => {
        beforeAll(async () => {
            const connection = await createConnection();
    
                await connection.runMigrations();
        });

            it("Should be able to create a new User", async () => {
                const response = await request(app).post("/users").send({ name: "User Example", email: "user.example@mail.com" });

                    expect(response.status).toBe(201);
            });
            it("Shouldn't be able to create a new User with existing email on the database", async () => {
                const response = await request(app).post("/users").send({ name: "User Example", email: "user.example@mail.com" });

                    expect(response.status).toBe(400);
            });
    });