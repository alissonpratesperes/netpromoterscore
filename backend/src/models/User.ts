import { v4 as uuid } from "uuid";
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

    @Entity("users")
    class User {
        constructor() {
            if(!this.id) {
                this.id = uuid();
            };
        }
        
            @PrimaryColumn()
            readonly id: string;
            @Column()
            name: string;
            @Column()
            email: string;
            @CreateDateColumn()
            created_at: Date;
    };

        export { User };