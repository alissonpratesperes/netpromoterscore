import { v4 as uuid } from "uuid";
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

    @Entity("surveys")
    class Survey {
        constructor() {
            if(!this.id) {
                this.id = uuid();
            };
        }
        
            @PrimaryColumn()
            readonly id: string;
            @Column()
            title: string;
            @Column()
            description: string;
            @CreateDateColumn()
            created_at: Date;
    };

        export { Survey };