import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoFormComponent } from './todo-form.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TodoFormComponent],
  exports: [TodoFormComponent]
})
export class TodoFormModule {}
