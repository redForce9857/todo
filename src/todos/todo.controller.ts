import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { Todo} from "src/todos/entity/todo.entity";
import { CreateDto } from "./DTO/creation-dto";
import { UpdateDto } from "./DTO/updata-dto";
import { TodoService } from "./todo.service";

 
@Controller('todo')
export class TodoController{
    constructor(private service: TodoService){}

    @Get()
    getAll(): Promise<Todo[]>{
        return this.service.getAll()
    }

    @Post()
    create(@Body() creationDto:CreateDto){
        return this.service.create(creationDto)
    }

    @Get(':id')
    getOne(@Param('id')id: string): Promise<Todo>{
        return this.service.get(id)
    }

    @Patch(':id')
    // DTO update
    update( @Param('id')id: string, @Body() updatDto: UpdateDto): Promise<Todo> {
        return this.service.update(id,updatDto)
    }
    
    @Delete(':id')
    delete( @Param('id')id: string) {
        return this.service.delete(id)
    }

} 