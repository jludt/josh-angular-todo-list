import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Todo, Todos } from "../shared/models/todo";
import { TodoListService } from "../shared/todo-list.service";

@Component({
  selector: "todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.css"],
})
export class TodoListComponent implements OnInit {
  todoListData$: Observable<Todos>;
  constructor(private todoService: TodoListService) {}

  ngOnInit() {
    this.todoListData$ = this.todoService.get();
  }

  delete(todo: Todo) {
    this.todoService.delete(todo).subscribe();
  }
}
