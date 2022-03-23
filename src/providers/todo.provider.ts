import { Provider } from "@nestjs/common";
import { Todo} from "src/entity/todo.entity";
import { Connection, getRepository } from "typeorm";



export const TodoProvider: Provider[] = [
   {
    provide: 'TODOS_REPOSITORY',
    useFactory: (connection: Connection)=>
    connection.getRepository(Todo),
    inject: ['DATABASE_CONNECTION'],
   },
];

