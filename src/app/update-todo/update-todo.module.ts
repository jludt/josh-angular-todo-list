import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TodoFormModule } from '../shared/todo-form/todo-form.module';
import { UpdateTodoComponent } from './update-todo.component';
import { updateTodoRoutes } from './update-todo.routes';

@NgModule({
  imports: [
    RouterModule.forChild(updateTodoRoutes),
    CommonModule,
    TodoFormModule
  ],
  declarations: [UpdateTodoComponent]
})
export class UpdateTodoModule {}
