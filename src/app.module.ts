import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModules } from './todos/todo.module';

@Module({
  imports: [
    TodoModules,
    RouterModule.register([
      {
         path: 'api/todo',
         module: TodoModules,
      }
    ])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
