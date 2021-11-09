import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map } from 'rxjs/operators';
import { sortBy } from 'lodash';

export interface SwapiResponse {
  count: number;
  next: string;
  previous?: any;
  results: Planet[];
}

export interface Planet {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: Date;
  edited: Date;
  url: string;
}

// const FAKE_TODOLIST = [
//   {
//     name: 'Todo 1',
//     description: 'What I need to do:'
//   },
//   {
//     name: 'Todo 2',
//     description: 'What I also need to do:'
//   },
//   {
//     name: 'Todo 3',
//     description: '3rd thing I need to do:'
//   }
// ];

const endpoint = 'https://60e467d45bcbca001749e966.mockapi.io/todos';

@Injectable({ providedIn: 'root' })
export class TodoListService {
  constructor(private http: HttpClient) {}

  get() {
    //return FAKE_TODOLIST;
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

  // getPlanetsToVisit() {
  //   return this.http.get<SwapiResponse>('https://swapi.dev/api/planets');
  // }
}
