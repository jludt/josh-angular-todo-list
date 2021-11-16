import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

const endpoint = "https://60e467d45bcbca001749e966.mockapi.io/todos";

@Injectable({ providedIn: "root" })
export class TodoListService {
  constructor(private http: HttpClient) {}

  get() {
    return this.http.get(endpoint).pipe();
  }

  getByID(id: number) {
    return this.http.get(`${endpoint}/${id}`);
  }

  add(todo) {
    return this.http.post(endpoint, todo);
  }
  delete(todo) {
    return this.http.delete(`${endpoint}/${todo.id}`);
  }
  update(todo) {
    return this.http.put(`${endpoint}/${todo.id}`, todo);
  }
}
