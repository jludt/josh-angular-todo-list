import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Todo, Todos } from "./models/todo";

const endpoint = "https://60e467d45bcbca001749e966.mockapi.io/todos";

@Injectable({ providedIn: "root" })
export class TodoListService {
  constructor(private http: HttpClient) {}

  get(): Observable<Todos> {
    return this.http.get<Todos>(endpoint).pipe();
  }

  getByID(id: number) {
    return this.http.get<Todo>(`${endpoint}/${id}`);
  }

  add(todo) {
    return this.http.post<void>(endpoint, todo);
  }
  delete(todo) {
    return this.http.delete<void>(`${endpoint}/${todo.id}`);
  }
  update(todo) {
    return this.http.put<void>(`${endpoint}/${todo.id}`, todo);
  }
}
