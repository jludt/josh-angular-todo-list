import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Todo, Todos } from "src/app/shared/models/todo";

@Component({
  selector: "todo-list-presentation",
  templateUrl: "./todo-list-presentation.component.html",
  styleUrls: ["./todo-list-presentation.component.css"],
})
export class TodoListPresentationComponent implements OnInit {
  @Input() todoList: Todos;
  @Output() deleteTodo = new EventEmitter<Todo>();
  constructor() {}

  ngOnInit() {}
}
