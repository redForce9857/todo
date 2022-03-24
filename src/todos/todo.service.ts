import { Injectable, NotFoundException } from "@nestjs/common";
import { Todo} from "src/todos/entity/todo.entity";
import { TodoRepository } from "src/todos/entity/todo.entity";
import { CreateDto } from "./DTO/creation-dto";
import { UpdateDto } from "./DTO/updata-dto";

@Injectable()
export class TodoService{
    constructor(private repo: TodoRepository ){} 
    
    async getAll(): Promise<Todo[]>{
        return await this.repo.find();
    }
    async create(creationDto: CreateDto): Promise<Todo>{
        return await this.repo.save(creationDto)
    }

    async get(id: string): Promise<Todo>{
        return await this.repo.findOne({where: {id:id}});   
    }

    async update(id: string, update: UpdateDto): Promise<Todo>{
        const entity = await this.repo.findOne({where: {id:id}})
        if(!entity){
            throw new NotFoundException();
        }
        Object.assign(entity, update)
        return await this.repo.save(entity)
    }
    // DTO for deletion
    async delete(id: string){
        const entity = await this.repo.findOne({where: {id:id}})
        if(!entity){
            throw new NotFoundException();
        }
        return await this.repo.delete(id)
    }
    
}