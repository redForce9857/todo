import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { Todo} from "src/entity/todo.entity";
import { DeleteResult, InsertResult, Repository } from "typeorm";


@Injectable()
export class TodoService{
    constructor(@Inject('TODOS_REPOSITORY') private todoRepository: Repository<Todo> ){} 
    
    
    async getAllTodos(): Promise<Todo[]>{
        return this.todoRepository.find();
    }
    
    async createTodo(todo: Todo): Promise<InsertResult>{
        return this.todoRepository.insert(todo)
    }

    async getTodo(id: string): Promise<Todo>{
        return  this.todoRepository.findOne({where: {id:id}});   
    }

    async updateTodo(id: string, todo: Todo): Promise<Todo>{
        // const todoToUpdatet = await this.todoRepository.findOne({where: {id:id}})
        // if(todoToUpdatet === undefined){
        //     throw new NotFoundException();
        // }
        // await this.todoRepository.update(id, todo)
        // return this.todoRepository.findOne({where: {id:id}})
        const todoToUpdatet = this.todoRepository.preload({id})
        if(!todo) throw new NotFoundException('not found')
        return await this.todoRepository.save(todo)
    }

    async deleteTodo(id: string): Promise<DeleteResult>{
        const todoToUpdatet = await this.todoRepository.findOne({where: {id:id}})
        if(todoToUpdatet === undefined){
            throw new NotFoundException();
        }
        return this.todoRepository.delete(id)
    }
    
}