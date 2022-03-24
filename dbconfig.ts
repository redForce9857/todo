import {TypeOrmModuleOptions } from "@nestjs/typeorm";
import * as dotenv from 'dotenv';
import { Todo } from "src/todos/entity/todo.entity";

// const DB_ENTITIES = [Todo];

dotenv.config();

export const DB_CONFIG: TypeOrmModuleOptions = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [Todo],
    autoLoadEntities: true,
    synchronize: true,
}