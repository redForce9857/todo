import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DB_CONFIG } from 'dbconfig';
import { TodoModules } from './todos/todo.module';


@Module({
  imports: [
    TodoModules,
    TypeOrmModule.forRoot(DB_CONFIG)
  ],
  controllers: [],
})
export class AppModule {}
