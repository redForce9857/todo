import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { TodoProvider } from "src/providers/todo.provider";
import { TodoController } from "./todo.controller";
import { TodoService } from "./todo.service";

@Module({
    imports: [DatabaseModule],
    controllers: [TodoController],
    providers: [...TodoProvider, TodoService]
})
export class TodoModules{}