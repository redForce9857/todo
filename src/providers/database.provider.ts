import { Todo} from "src/entity/todo.entity"
import { createConnection } from "typeorm"


export const DatabaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async () => 
            await createConnection({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: 'redForce',
                database: 'todo',
                entities: [Todo],
                synchronize: true,
                
            }),
    },
]

// TypeOrmModule.forRootAsync({
//     useFactory: async () =>
//       Object.assign(await getConnectionOptions(), {
//         autoLoadEntities: true,
//       }),
//   });