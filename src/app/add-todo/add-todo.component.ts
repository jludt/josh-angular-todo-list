import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TodoListService } from "../shared/todo-list.service";

@Component({
  selector: "app-add-todo",
  templateUrl: "./add-todo.component.html",
  styleUrls: ["./add-todo.component.css"],
})
export class AddTodoComponent implements OnInit {
  constructor(private router: Router, private todoService: TodoListService) {}

  ngOnInit() {}

  addTodo(todo) {
    // DO STUFF
    const id = new Date().getTime();
    console.log("A new todo has been added!", todo);
    this.todoService.add(todo).subscribe();
    this.router.navigate(["../"]);
  }
}
