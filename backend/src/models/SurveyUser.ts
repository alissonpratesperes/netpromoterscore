import { v4 as uuid } from "uuid";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

import { User } from "./User";
import { Survey } from "./Survey";

    @Entity("surveys_users")
    class SurveyUser {
        constructor() {
            if(!this.id) {
                this.id = uuid();
            };
        }
        
            @PrimaryColumn()
            readonly id: string;
            @Column()
            user_id: string;
            @Column()
            survey_id: string;
            @Column()
            value: number;
            @CreateDateColumn()
            created_at: Date;

                @ManyToOne(() => User)
                @JoinColumn({ name: "user_id" })
                user: User
                @ManyToOne(() => Survey)
                @JoinColumn({ name: "survey_id" })
                survey: Survey
    };

        export { SurveyUser };