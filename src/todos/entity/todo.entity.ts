import { StatusTodo } from "../enum/status";
import { Column, Entity, EntityRepository, PrimaryGeneratedColumn, Repository } from "typeorm";


@Entity({name: 'todo'})
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


@EntityRepository(Todo)
export class TodoRepository extends Repository<Todo>{}