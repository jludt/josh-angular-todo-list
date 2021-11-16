import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Todo } from "../models/todo";

@Component({
  selector: "todo-form",
  templateUrl: "./todo-form.component.html",
  styleUrls: ["./todo-form.component.css"],
})
export class TodoFormComponent implements OnInit {
  @Output() changeTodoEvent = new EventEmitter<Todo>();
  @Input() todo: Todo;

  constructor() {}

  ngOnInit() {}

  submitTodo(name: string, description: string) {
    const todo = { ...this.todo, name, description };
    this.changeTodoEvent.emit(todo);
  }
}
