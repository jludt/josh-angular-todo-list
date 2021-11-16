import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { TodoListService } from "../shared/todo-list.service";

@Component({
  selector: "app-update-todo",
  templateUrl: "./update-todo.component.html",
  styleUrls: ["./update-todo.component.css"],
})
export class UpdateTodoComponent implements OnInit {
  todo$: Observable<any>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private todoService: TodoListService
  ) {}

  ngOnInit() {
    this.todo$ = this.activatedRoute.params.pipe(
      map((route) => route["todoId"]),
      switchMap((todoId) => this.todoService.getByID(todoId))
    );
  }
  updateTodo(todo) {
    this.todoService.update(todo).subscribe();
  }
}
