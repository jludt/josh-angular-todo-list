import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AddTodoComponent } from './add-todo.component';
import { addTodoRoutes } from './add-todo.routes';
import { TodoFormModule } from '../shared/todo-form/todo-form.module';

@NgModule({
  imports: [RouterModule.forChild(addTodoRoutes), TodoFormModule],
  declarations: [AddTodoComponent]
})
export class AddTodoModule {}
