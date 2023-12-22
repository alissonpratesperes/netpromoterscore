import { v4 as uuid } from "uuid";
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

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
    };

        export { SurveyUser };