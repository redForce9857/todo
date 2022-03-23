import { StatusTodo } from "src/models/status";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Todo{
    @PrimaryGeneratedColumn()
    id: string;

    @Column('text', {default: ''})
    title: string;

    @Column('text', {default: ''})
    description: string;

    @Column({
        type: 'enum',
        enum: StatusTodo,
        default: StatusTodo.OPEN})
    status: string;
}