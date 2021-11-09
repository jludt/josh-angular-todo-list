import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { getSelectTodo } from "../state/todos.selectors";

@Component({
  selector: "app-update-todo",
  templateUrl: "./update-todo.component.html",
  styleUrls: ["./update-todo.component.css"],
})
export class UpdateTodoComponent implements OnInit {
  todo$: Observable<any>;

  constructor(private activatedRoute: ActivatedRoute, private store: Store) {}

  ngOnInit() {
    this.todo$ = this.store.select(getSelectTodo);
    // this.todo$ = this.activatedRoute.params.pipe(
    //   map(route => route['todoId']),
    //   switchMap(todoId => this.todoListService.getByID(todoId))
    // );
  }
  updateTodo(todo) {
    // this.todoListService.update(todo).subscribe();
  }
}
