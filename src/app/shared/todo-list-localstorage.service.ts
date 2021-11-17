import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { EMPTY, Observable, of } from "rxjs";
import { Todo, Todos } from "./models/todo";

@Injectable({ providedIn: "root" })
export class TodoListLocalStorageService {
  #KEY = "todos";

  #getFromLocalStorage() {
    return JSON.parse(window.localStorage.getItem(this.#KEY)) as Todos;
  }

  #updateLocalStorage(todos: Todos) {
    window.localStorage.setItem(this.#KEY, JSON.stringify(todos));
  }

  constructor(private http: HttpClient) {}

  get(): Observable<Todos> {
    return of(this.#getFromLocalStorage());
  }

  getByID(id: number) {
    const todos = this.#getFromLocalStorage();
    return of(todos.find((todo) => todo.id === id));
  }

  add(todo: Todo) {
    const todos = this.#getFromLocalStorage();
    this.#updateLocalStorage([...todos, todo]);
    return EMPTY;
  }
  delete(todo) {
    const todos = this.#getFromLocalStorage().filter(
      (todoToUpdate) => todoToUpdate.id === todo.id
    );
    this.#updateLocalStorage(todos);
    return EMPTY;
  }
  update(todo) {
    const todos = this.#getFromLocalStorage().filter(
      (todoToUpdate) => todoToUpdate.id === todo.id
    );
    this.#updateLocalStorage([...todos, todo]);
    return EMPTY;
  }
}
