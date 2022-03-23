import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { Todo} from "src/entity/todo.entity";
import { DeleteResult } from "typeorm";
import { TodoService } from "./todo.service";

 
@Controller()
export class TodoController{
    constructor(private todoService: TodoService){}

    @Get()
    getAllTodo(): Promise<Todo[]>{
        return this.todoService.getAllTodos()
    }

    @Post()
    createTodo(@Body()todo: Todo){
        return this.todoService.createTodo(todo)
    }

    @Get(':id')
    getOneTodo(@Param('id')id: string): Promise<Todo>{
        return this.todoService.getTodo(id)
    }

    @Patch(':id')
    updateTodo( @Param('id')id: string, @Body('')todo: Todo): Promise<Todo> {
        return this.todoService.updateTodo(id,todo)
    }
    
    @Delete(':id')
    deleteTodo( @Param('id')id: string) {
        return this.todoService.deleteTodo(id)
    }

} 