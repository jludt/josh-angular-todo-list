import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  @Output() changeTodoEvent = new EventEmitter();
  @Input() todo: any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {}

  submitTodo(name: string, description: string) {
    const todo = { ...this.todo, name, description };
    this.changeTodoEvent.emit(todo);
  }
}
