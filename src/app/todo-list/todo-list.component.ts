import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { TodoListService } from "./todo-list.service";

@Component({
  selector: "todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.css"],
})
export class TodoListComponent implements OnInit {
  todoListData$: Observable<any>;
  constructor(private todoService: TodoListService) {}

  ngOnInit() {
    this.todoListData$ = this.todoService.get();
  }

  delete(todo) {
    this.todoService.delete(todo).subscribe();
  }
}
